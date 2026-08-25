import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';

/** Attack phases for cute telegraph → bonk. */
const PHASE_MOVE = 0;
const PHASE_TELEGRAPH = 1;
const PHASE_BONK = 2;
const PHASE_RECOVER = 3;

const ALIVE = 1;
const CORPSE = 2;

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
  mesh.frustumCulled = false;
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), TUNING.arenaRadius + 2);
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
  const knockX = new Float32Array(capacity);
  const knockZ = new Float32Array(capacity);
  const hurtSquash = new Float32Array(capacity);
  const velX = new Float32Array(capacity);
  const velY = new Float32Array(capacity);
  const velZ = new Float32Array(capacity);
  const spinVelX = new Float32Array(capacity);
  const spinVelY = new Float32Array(capacity);
  const spinVelZ = new Float32Array(capacity);
  const rotX = new Float32Array(capacity);
  const rotY = new Float32Array(capacity);
  const rotZ = new Float32Array(capacity);
  const corpseT = new Float32Array(capacity);
  const colors = new Float32Array(capacity * 3);
  mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
  mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  const enemyColor = new THREE.Color(COLORS.enemy);
  const hitColor = new THREE.Color(COLORS.enemyHit);
  const corpseColor = new THREE.Color(0x5a1520);
  const tmpColor = new THREE.Color();

  let liveCount = 0;
  let freeList = [];
  for (let i = capacity - 1; i >= 0; i--) freeList.push(i);

  function markDirty() {
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
  }

  function setColor(i, color) {
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  function writeTransform(i, opts = {}) {
    const bounce = opts.bounce ?? 0;
    const lean = opts.lean ?? 0;
    const stretchY = opts.stretchY ?? 1;
    const stretchXZ = opts.stretchXZ ?? 1;
    const yaw = facing[i];
    const hurt = hurtSquash[i];

    dummy.position.set(x[i], y[i] + bounce, z[i]);
    const flash = hitFlash[i];
    const s = (1 + flash * 0.22) * stretchXZ * (1 + hurt * 0.35);
    const sy = (1 + flash * 0.1) * stretchY * (1 - hurt * 0.45);
    dummy.scale.set(s, Math.max(0.35, sy), s);
    const wobbleRoll = opts.wobbleRoll ?? 0;
    dummy.rotation.set(lean + hurt * 0.4 + rotX[i], yaw + rotY[i], wobbleRoll + rotZ[i]);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }

  function hideInstance(i) {
    dummy.position.set(0, -10, 0);
    dummy.scale.setScalar(0);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    spinVelX[i] = 0;
    spinVelY[i] = 0;
    spinVelZ[i] = 0;
    rotX[i] = 0;
    rotY[i] = 0;
    rotZ[i] = 0;
    velX[i] = 0;
    velY[i] = 0;
    velZ[i] = 0;
    corpseT[i] = 0;
  }

  function release(i) {
    alive[i] = 0;
    hideInstance(i);
    freeList.push(i);
    markDirty();
  }

  function spawnAt(px, pz) {
    if (freeList.length === 0) return -1;
    const i = freeList.pop();
    alive[i] = ALIVE;
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
    knockX[i] = 0;
    knockZ[i] = 0;
    hurtSquash[i] = 0;
    velX[i] = 0;
    velY[i] = 0;
    velZ[i] = 0;
    spinVelX[i] = 0;
    spinVelY[i] = 0;
    spinVelZ[i] = 0;
    rotX[i] = 0;
    rotY[i] = 0;
    rotZ[i] = 0;
    corpseT[i] = 0;
    setColor(i, enemyColor);
    writeTransform(i);
    liveCount += 1;
    mesh.count = capacity;
    markDirty();
    return i;
  }

  function startCorpse(i, fromX, fromZ) {
    if (alive[i] !== ALIVE) return;
    alive[i] = CORPSE;
    liveCount -= 1;

    let dx = x[i] - fromX;
    let dz = z[i] - fromZ;
    let len = Math.hypot(dx, dz);
    if (len < 0.01) {
      dx = Math.sin(facing[i] + Math.PI);
      dz = Math.cos(facing[i] + Math.PI);
      len = 1;
    }
    const dirX = dx / len;
    const dirZ = dz / len;

    velX[i] = dirX * (4.5 + Math.random() * 2.5) + knockX[i];
    velZ[i] = dirZ * (4.5 + Math.random() * 2.5) + knockZ[i];
    velY[i] = 4.2 + Math.random() * 2.8;
    spinVelX[i] = (Math.random() - 0.5) * 10;
    spinVelY[i] = (Math.random() - 0.5) * 10;
    spinVelZ[i] = (Math.random() - 0.5) * 10;
    corpseT[i] = TUNING.corpseLifetime;
    hurtSquash[i] = 0;
    hitFlash[i] = 0;
    knockX[i] = 0;
    knockZ[i] = 0;
    setColor(i, corpseColor);
    markDirty();
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
    return spawned;
  }

  function clear() {
    for (let i = 0; i < capacity; i++) {
      if (alive[i]) hideInstance(i);
      alive[i] = 0;
    }
    liveCount = 0;
    freeList = [];
    for (let i = capacity - 1; i >= 0; i--) freeList.push(i);
    markDirty();
  }

  function damage(i, amount, fromX = null, fromZ = null) {
    if (alive[i] !== ALIVE) return false;
    hp[i] -= amount;
    hitFlash[i] = 1;
    hurtSquash[i] = 1;
    tmpColor.copy(enemyColor).lerp(hitColor, 0.85);
    setColor(i, tmpColor);
    const ox = fromX ?? x[i];
    const oz = fromZ ?? z[i];
    let dx = x[i] - ox;
    let dz = z[i] - oz;
    let len = Math.hypot(dx, dz);
    if (len < 0.01) {
      dx = Math.sin(facing[i] + Math.PI);
      dz = Math.cos(facing[i] + Math.PI);
      len = 1;
    }
    knockX[i] = (dx / len) * TUNING.enemyKnockback;
    knockZ[i] = (dz / len) * TUNING.enemyKnockback;
    if (phase[i] === PHASE_TELEGRAPH) {
      phase[i] = PHASE_MOVE;
      phaseT[i] = 0;
    }
    if (hp[i] <= 0) {
      startCorpse(i, ox, oz);
      return true;
    }
    return false;
  }

  function updateCorpse(i, dt) {
    corpseT[i] -= dt;
    velY[i] -= TUNING.gravity * dt;
    x[i] += velX[i] * dt;
    y[i] += velY[i] * dt;
    z[i] += velZ[i] * dt;
    rotX[i] += spinVelX[i] * dt;
    rotY[i] += spinVelY[i] * dt;
    rotZ[i] += spinVelZ[i] * dt;

    const ground = TUNING.enemySize / 2;
    if (y[i] <= ground) {
      y[i] = ground;
      if (velY[i] < -0.5) {
        velY[i] = -velY[i] * TUNING.corpseBounce;
        velX[i] *= 0.72;
        velZ[i] *= 0.72;
        spinVelX[i] *= 0.65;
        spinVelY[i] *= 0.65;
        spinVelZ[i] *= 0.65;
      } else {
        velY[i] = 0;
        velX[i] *= Math.max(0, 1 - dt * 2.2);
        velZ[i] *= Math.max(0, 1 - dt * 2.2);
      }
    }

    const lim = TUNING.arenaRadius - 1;
    const d = Math.hypot(x[i], z[i]);
    if (d > lim) {
      x[i] = (x[i] / d) * lim;
      z[i] = (z[i] / d) * lim;
      velX[i] *= -0.35;
      velZ[i] *= -0.35;
    }

    writeTransform(i);
    if (corpseT[i] <= 0) release(i);
  }

  function update(dt, playerPos, gatePos, onContactPlayer, onContactGate) {
    let dirty = false;
    const now = performance.now() * 0.001;

    for (let i = 0; i < capacity; i++) {
      if (alive[i] === CORPSE) {
        updateCorpse(i, dt);
        dirty = true;
        continue;
      }
      if (alive[i] !== ALIVE) continue;
      contactCd[i] = Math.max(0, contactCd[i] - dt);
      phaseT[i] += dt;
      if (hurtSquash[i] > 0) hurtSquash[i] = Math.max(0, hurtSquash[i] - dt * 4);

      if (knockX[i] !== 0 || knockZ[i] !== 0) {
        x[i] += knockX[i] * dt;
        z[i] += knockZ[i] * dt;
        knockX[i] *= Math.max(0, 1 - dt * 7);
        knockZ[i] *= Math.max(0, 1 - dt * 7);
        if (Math.abs(knockX[i]) < 0.05) knockX[i] = 0;
        if (Math.abs(knockZ[i]) < 0.05) knockZ[i] = 0;
      }

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

      let sepX = 0;
      let sepZ = 0;
      for (let s = 0; s < 8; s++) {
        const j = (i + 1 + s * 37) % capacity;
        if (alive[j] !== ALIVE || j === i) continue;
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

      if (phase[i] === PHASE_MOVE) {
        if (playerDist < TUNING.enemyAttackRange && contactCd[i] <= 0) {
          phase[i] = PHASE_TELEGRAPH;
          phaseT[i] = 0;
        } else {
          moving = true;
        }
      }

      if (phase[i] === PHASE_TELEGRAPH) {
        const u = Math.min(1, phaseT[i] / TUNING.enemyTelegraph);
        const ease = u * u;
        lean = 0.95 * ease;
        stretchY = 1 - ease * 0.22;
        stretchXZ = 1 + ease * 0.28;
        bounce = ease * 0.15;
        facing[i] = Math.atan2(toPlayerX, toPlayerZ);
        if (phaseT[i] >= TUNING.enemyTelegraph) {
          phase[i] = PHASE_BONK;
          phaseT[i] = 0;
        }
      } else if (phase[i] === PHASE_BONK) {
        const u = Math.min(1, phaseT[i] / TUNING.enemyBonk);
        lean = 0.95 - u * 1.7;
        stretchY = 0.78 + u * 0.4;
        stretchXZ = 1.28 - u * 0.35;
        bounce = (1 - u) * 0.12;
        const lunge = 7.5 * (1 - u);
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

        const walk = now * 7.5 + wobbleSeed[i];
        bounce = Math.abs(Math.sin(walk)) * 0.22;
        stretchY = 1 + Math.sin(walk) * 0.12;
        stretchXZ = 1 - Math.sin(walk) * 0.1;
        wobbleRoll = Math.sin(walk * 0.5) * 0.18;
        lean = Math.sin(walk) * 0.08;
      }

      y[i] = TUNING.enemySize / 2;

      const lim = TUNING.arenaRadius - 1;
      const d = Math.hypot(x[i], z[i]);
      if (d > lim) {
        x[i] = (x[i] / d) * lim;
        z[i] = (z[i] / d) * lim;
      }

      writeTransform(i, { bounce, lean, stretchY, stretchXZ, wobbleRoll });
      dirty = true;

      if (gateDist < TUNING.gateSize * 0.85 && contactCd[i] <= 0 && phase[i] === PHASE_MOVE) {
        contactCd[i] = TUNING.enemyGateCooldown;
        onContactGate?.(i);
      }
    }

    if (dirty) markDirty();
  }

  function queryHits(origin, forward, range, arcCos = 0.35) {
    const hits = [];
    const ox = origin.x;
    const oz = origin.z;
    for (let i = 0; i < capacity; i++) {
      if (alive[i] !== ALIVE) continue;
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
      if (alive[i] !== ALIVE) continue;
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
