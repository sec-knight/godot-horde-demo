import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';

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

  function writeTransform(i) {
    dummy.position.set(x[i], y[i], z[i]);
    const s = 1 + hitFlash[i] * 0.25;
    dummy.scale.setScalar(s);
    dummy.rotation.set(0, (i % 7) * 0.3 + hitFlash[i], 0);
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
    setColor(i, enemyColor);
    writeTransform(i);
    liveCount += 1;
    mesh.count = capacity; // keep full buffer; hide dead via scale 0
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

  /**
   * Spawn enemies in expanding ring ranks around the portal,
   * matching the Godot "ring ranks from far portal" feel.
   */
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
        // Keep inside arena
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
    if (hp[i] <= 0) {
      kill(i);
      return true;
    }
    return false;
  }

  /**
   * Enemies advance primarily toward the gate, with a mild pull toward the player
   * when close — swarm pressure without perfect player-chasing.
   */
  function update(dt, playerPos, gatePos, onContactPlayer, onContactGate) {
    let dirty = false;
    for (let i = 0; i < capacity; i++) {
      if (!alive[i]) continue;
      contactCd[i] = Math.max(0, contactCd[i] - dt);
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

      // Prefer the player when close so the horde fights you on the way to the gate.
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

      // Light separation so the horde doesn't fully stack
      let sepX = 0;
      let sepZ = 0;
      const sample = 8;
      for (let s = 0; s < sample; s++) {
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

      const speed = TUNING.enemySpeed * (0.9 + (i % 5) * 0.04);
      x[i] += dirX * speed * dt;
      z[i] += dirZ * speed * dt;
      y[i] = TUNING.enemySize / 2 + Math.sin(performance.now() * 0.008 + i) * 0.04;

      // Clamp to arena
      const lim = TUNING.arenaRadius - 1;
      const d = Math.hypot(x[i], z[i]);
      if (d > lim) {
        x[i] = (x[i] / d) * lim;
        z[i] = (z[i] / d) * lim;
      }

      writeTransform(i);
      dirty = true;

      // Player contact
      if (playerDist < TUNING.playerRadius + TUNING.enemySize * 0.55 && contactCd[i] <= 0) {
        contactCd[i] = TUNING.enemyContactCooldown;
        onContactPlayer?.(i);
      }
      // Gate contact
      if (gateDist < TUNING.gateSize * 0.85) {
        // Reuse contactCd but with slower gate cadence via a threshold check
        if (contactCd[i] <= 0) {
          contactCd[i] = TUNING.enemyGateCooldown;
          onContactGate?.(i);
        }
      }
    }
    if (dirty) {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
    }
  }

  function queryHits(origin, forward, range, arcCos = 0.35) {
    const hits = [];
    for (let i = 0; i < capacity; i++) {
      if (!alive[i]) continue;
      const dx = x[i] - origin.x;
      const dz = z[i] - origin.z;
      const dist = Math.hypot(dx, dz);
      if (dist > range || dist < 0.01) continue;
      const ndx = dx / dist;
      const ndz = dz / dist;
      const dot = ndx * forward.x + ndz * forward.z;
      if (dot >= arcCos) hits.push({ i, dist });
    }
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
