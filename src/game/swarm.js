import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';

/** Attack phases for cute telegraph → bonk. */
const PHASE_MOVE = 0;
const PHASE_TELEGRAPH = 1;
const PHASE_BONK = 2;
const PHASE_RECOVER = 3;

/**
 * Data-oriented cube horde rendered with InstancedMesh —
 * the Three.js analogue of Godot's MultiMesh swarm.
 */
export function createSwarm(scene) {
  const capacity = TUNING.maxEnemies;
  const geo = new THREE.BoxGeometry(TUNING.enemySize, TUNING.enemySize, TUNING.enemySize);
  const mat = new THREE.MeshLambertMaterial({ color: COLORS.enemy });
  const mesh = new THREE.InstancedMesh(geo, mat, capacity);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.count = 0;
  scene.add(mesh);

  const dummy = new THREE.Object3D();
  const alive = new Uint8Array(capacity);
  const x = new Float32Array(capacity);
  const y = new Float32Array(capacity);
  const z = new Float32Array(capacity);
  const hp = new Float32Array(capacity);
  const hitFlash = new Float32Array(capacity);
  const contactCd = new Float32Array(capacity);
  const phase = new Uint8Array(capacity);
  const phaseT = new Float32Array(capacity);
  const facing = new Float32Array(capacity);
  const wobbleSeed = new Float32Array(capacity);
  const colors = new Float32Array(capacity * 3);
  mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
  mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  const enemyColor = new THREE.Color(COLORS.enemy);
  const hitColor = new THREE.Color(COLORS.enemyHit);
  const tmpColor = new THREE.Color();

  let liveCount = 0;
  let freeList = [];
  for (let i = capacity - 1; i >= 0; i--) freeList.push(i);

  function setColor(i, color) {
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  function writeTransform(i, opts = {}) {
    const bounce = opts.bounce ?? 0;
    const lean = opts.lean ?? 0; // + lean back, - lean forward (pitch)
    const stretchY = opts.stretchY ?? 1;
    const stretchXZ = opts.stretchXZ ?? 1;
    const yaw = facing[i];

    dummy.position.set(x[i], y[i] + bounce, z[i]);
    const s = (1 + hitFlash[i] * 0.22) * stretchXZ;
    dummy.scale.set(s, (1 + hitFlash[i] * 0.1) * stretchY, s);
    // Face movement / attack direction; add a little side wobble while walking
    const wobbleRoll = opts.wobbleRoll ?? 0;
    dummy.rotation.set(lean, yaw, wobbleRoll);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }

  function spawnAt(px, pz) {
    if (freeList.length === 0) return -1;
    const i = freeList.pop();
    alive[i] = 1;
    x[i] = px;
    y[i] = TUNING.enemySize / 2;
    z[i] = pz;
    hp[i] = TUNING.enemyHp;
    hitFlash[i] = 0;
    contactCd[i] = 0;
    phase[i] = PHASE_MOVE;
    phaseT[i] = Math.random() * 0.4;
    facing[i] = Math.random() * Math.PI * 2;
    wobbleSeed[i] = Math.random() * Math.PI * 2;
    setColor(i, enemyColor);
    writeTransform(i);
    liveCount += 1;
    mesh.count = capacity;
    return i;
  }

  function kill(i) {
    if (!alive[i]) return;
    alive[i] = 0;
    liveCount -= 1;
    dummy.position.set(0, -10, 0);
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    freeList.push(i);
  }

  function spawnWave(count, portalPos, gatePos) {
    const towardGate = new THREE.Vector3().subVectors(gatePos, portalPos).normalize();
    const side = new THREE.Vector3(-towardGate.z, 0, towardGate.x);
    let spawned = 0;
    let ring = 0;
    while (spawned < count) {
      const inRing = Math.min(count - spawned, 6 + ring * 4);
      const radius = 2.2 + ring * 1.7;
      for (let n = 0; n < inRing; n++) {
        const a = (n / inRing) * Math.PI * 2 + ring * 0.35;
        const px = portalPos.x + Math.cos(a) * radius * 0.65 + side.x * Math.sin(a) * radius;
        const pz = portalPos.z + towardGate.z * (1.5 + ring * 0.4) + Math.sin(a) * radius * 0.75;
        const lim = TUNING.arenaRadius - 2;
        const d = Math.hypot(px, pz);
        const sx = d > lim ? (px / d) * lim : px;
        const sz = d > lim ? (pz / d) * lim : pz;
        if (spawnAt(sx, sz) >= 0) spawned += 1;
      }
      ring += 1;
      if (ring > 40) break;
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    return spawned;
  }

  function clear() {
    for (let i = 0; i < capacity; i++) {
      if (alive[i]) kill(i);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  function damage(i, amount) {
    if (!alive[i]) return false;
    hp[i] -= amount;
    hitFlash[i] = 1;
    tmpColor.copy(enemyColor).lerp(hitColor, 0.85);
    setColor(i, tmpColor);
    // Interrupt attack windup on hit
    if (phase[i] === PHASE_TELEGRAPH) {
      phase[i] = PHASE_MOVE;
      phaseT[i] = 0;
    }
    if (hp[i] <= 0) {
      kill(i);
      return true;
    }
    return false;
  }

  function update(dt, playerPos, gatePos, onContactPlayer, onContactGate) {
    let dirty = false;
    const now = performance.now() * 0.001;

    for (let i = 0; i < capacity; i++) {
      if (!alive[i]) continue;
      contactCd[i] = Math.max(0, contactCd[i] - dt);
      phaseT[i] += dt;

      if (hitFlash[i] > 0) {
        hitFlash[i] = Math.max(0, hitFlash[i] - dt * 3);
        tmpColor.copy(enemyColor).lerp(hitColor, hitFlash[i]);
        setColor(i, tmpColor);
        dirty = true;
      }

      const toGateX = gatePos.x - x[i];
      const toGateZ = gatePos.z - z[i];
      const gateDist = Math.hypot(toGateX, toGateZ) || 1;
      const toPlayerX = playerPos.x - x[i];
      const toPlayerZ = playerPos.z - z[i];
      const playerDist = Math.hypot(toPlayerX, toPlayerZ) || 1;

      let dirX = toGateX / gateDist;
      let dirZ = toGateZ / gateDist;
      if (playerDist < 11) {
        const w = THREE.MathUtils.clamp(1.15 - playerDist / 11, 0.25, 0.85);
        dirX = dirX * (1 - w) + (toPlayerX / playerDist) * w;
        dirZ = dirZ * (1 - w) + (toPlayerZ / playerDist) * w;
        const len = Math.hypot(dirX, dirZ) || 1;
        dirX /= len;
        dirZ /= len;
      }

      // Separation
      let sepX = 0;
      let sepZ = 0;
      for (let s = 0; s < 8; s++) {
        const j = (i + 1 + s * 37) % capacity;
        if (!alive[j] || j === i) continue;
        const dx = x[i] - x[j];
        const dz = z[i] - z[j];
        const d2 = dx * dx + dz * dz;
        if (d2 < 1.6 && d2 > 0.0001) {
          const inv = 1 / d2;
          sepX += dx * inv;
          sepZ += dz * inv;
        }
      }
      dirX += sepX * 0.15;
      dirZ += sepZ * 0.15;
      const dlen = Math.hypot(dirX, dirZ) || 1;
      dirX /= dlen;
      dirZ /= dlen;

      const targetYaw = Math.atan2(dirX, dirZ);
      // Smooth facing
      let dyaw = targetYaw - facing[i];
      while (dyaw > Math.PI) dyaw -= Math.PI * 2;
      while (dyaw < -Math.PI) dyaw += Math.PI * 2;
      facing[i] += dyaw * Math.min(1, dt * 6);

      let bounce = 0;
      let lean = 0;
      let stretchY = 1;
      let stretchXZ = 1;
      let wobbleRoll = 0;
      let moving = false;

      // --- Attack state machine vs player ---
      if (phase[i] === PHASE_MOVE) {
        if (playerDist < TUNING.enemyAttackRange && contactCd[i] <= 0) {
          phase[i] = PHASE_TELEGRAPH;
          phaseT[i] = 0;
        } else {
          moving = true;
        }
      }

      if (phase[i] === PHASE_TELEGRAPH) {
        // Lean back, squash a little — telegraph the bonk
        const u = Math.min(1, phaseT[i] / TUNING.enemyTelegraph);
        lean = 0.55 * u; // tip backward
        stretchY = 1 - u * 0.12;
        stretchXZ = 1 + u * 0.15;
        bounce = u * 0.08;
        // Face the player hard
        facing[i] = Math.atan2(toPlayerX, toPlayerZ);
        if (phaseT[i] >= TUNING.enemyTelegraph) {
          phase[i] = PHASE_BONK;
          phaseT[i] = 0;
        }
      } else if (phase[i] === PHASE_BONK) {
        const u = Math.min(1, phaseT[i] / TUNING.enemyBonk);
        lean = 0.55 - u * 1.15; // whip forward
        stretchY = 0.88 + u * 0.25;
        stretchXZ = 1.15 - u * 0.2;
        // Lunge toward player
        const lunge = 5.5 * (1 - u);
        x[i] += Math.sin(facing[i]) * lunge * dt;
        z[i] += Math.cos(facing[i]) * lunge * dt;
        if (u > 0.35 && u < 0.85 && contactCd[i] <= 0) {
          const distNow = Math.hypot(playerPos.x - x[i], playerPos.z - z[i]);
          if (distNow < TUNING.playerRadius + TUNING.enemySize * 0.7) {
            contactCd[i] = TUNING.enemyContactCooldown;
            onContactPlayer?.(i);
          }
        }
        if (phaseT[i] >= TUNING.enemyBonk) {
          phase[i] = PHASE_RECOVER;
          phaseT[i] = 0;
        }
      } else if (phase[i] === PHASE_RECOVER) {
        const u = Math.min(1, phaseT[i] / TUNING.enemyRecover);
        lean = THREE.MathUtils.lerp(-0.35, 0, u);
        stretchY = 1;
        stretchXZ = 1;
        if (phaseT[i] >= TUNING.enemyRecover) {
          phase[i] = PHASE_MOVE;
          phaseT[i] = 0;
          contactCd[i] = TUNING.enemyContactCooldown * 0.5;
        }
      }

      if (moving) {
        const speed = TUNING.enemySpeed * (0.9 + (i % 5) * 0.04);
        x[i] += dirX * speed * dt;
        z[i] += dirZ * speed * dt;

        // Cute bouncy walk: hop + squash/stretch + side wobble
        const walk = now * 7.5 + wobbleSeed[i];
        bounce = Math.abs(Math.sin(walk)) * 0.22;
        stretchY = 1 + Math.sin(walk) * 0.12;
        stretchXZ = 1 - Math.sin(walk) * 0.1;
        wobbleRoll = Math.sin(walk * 0.5) * 0.18;
        lean = Math.sin(walk) * 0.08;
      }

      y[i] = TUNING.enemySize / 2;

      // Clamp to arena
      const lim = TUNING.arenaRadius - 1;
      const d = Math.hypot(x[i], z[i]);
      if (d > lim) {
        x[i] = (x[i] / d) * lim;
        z[i] = (z[i] / d) * lim;
      }

      writeTransform(i, { bounce, lean, stretchY, stretchXZ, wobbleRoll });
      dirty = true;

      // Gate contact (still while moving / recovering)
      if (gateDist < TUNING.gateSize * 0.85 && contactCd[i] <= 0 && phase[i] === PHASE_MOVE) {
        contactCd[i] = TUNING.enemyGateCooldown;
        onContactGate?.(i);
      }
    }

    if (dirty) {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
    }
  }

  function queryHits(origin, forward, range, arcCos = 0.35) {
    const hits = [];
    const ox = origin.x;
    const oz = origin.z;
    for (let i = 0; i < capacity; i++) {
      if (!alive[i]) continue;
      const dx = x[i] - ox;
      const dz = z[i] - oz;
      const dist = Math.hypot(dx, dz);
      if (dist > range || dist < 0.01) continue;
      const ndx = dx / dist;
      const ndz = dz / dist;
      const dot = ndx * forward.x + ndz * forward.z;
      if (dot >= arcCos) hits.push({ i, dist });
    }
    hits.sort((a, b) => a.dist - b.dist);
    return hits;
  }

  function queryRadius(origin, range) {
    const hits = [];
    for (let i = 0; i < capacity; i++) {
      if (!alive[i]) continue;
      const dist = Math.hypot(x[i] - origin.x, z[i] - origin.z);
      if (dist <= range) hits.push({ i, dist });
    }
    return hits;
  }

  return {
    mesh,
    get aliveCount() {
      return liveCount;
    },
    spawnWave,
    clear,
    damage,
    update,
    queryHits,
    queryRadius,
    getPosition(i) {
      return { x: x[i], y: y[i], z: z[i] };
    },
  };
}
