import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';

/**
 * Movement/combat forward is local −Z (matches W / getForward).
 * Positive Z is behind the player.
 */
const IDLE_SWORD = { x: 0.65, y: 0.9, z: -0.15 };
const IDLE_SHIELD = { x: -0.55, y: 0.85, z: -0.1 };
const FWD = -1; // local Z multiplier for “in front”

export function createPlayer(scene, spawn = new THREE.Vector3(0, 0, -4)) {
  const root = new THREE.Group();
  root.position.copy(spawn);
  scene.add(root);

  const body = new THREE.Mesh(
    new THREE.SphereGeometry(TUNING.playerRadius, 24, 18),
    new THREE.MeshLambertMaterial({ color: COLORS.player, emissive: 0x000000 }),
  );
  body.position.y = TUNING.playerRadius;
  root.add(body);

  const weaponRig = new THREE.Group();
  weaponRig.position.y = 0.9;
  root.add(weaponRig);

  const shield = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.55, 0.1, 22),
    new THREE.MeshLambertMaterial({
      color: COLORS.shield,
      emissive: 0x000000,
      emissiveIntensity: 0,
    }),
  );
  shield.rotation.set(0, 0, Math.PI / 2);
  shield.position.set(IDLE_SHIELD.x, IDLE_SHIELD.y - 0.9, IDLE_SHIELD.z);
  weaponRig.add(shield);

  const sword = new THREE.Group();
  sword.position.set(IDLE_SWORD.x, IDLE_SWORD.y - 0.9, IDLE_SWORD.z);
  weaponRig.add(sword);

  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 1.35, 0.06),
    new THREE.MeshLambertMaterial({ color: COLORS.swordBlade }),
  );
  blade.position.y = 0.55;
  sword.add(blade);

  const guard = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12),
    new THREE.MeshLambertMaterial({ color: COLORS.swordGuard }),
  );
  guard.rotation.z = Math.PI / 2;
  sword.add(guard);

  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.35, 8),
    new THREE.MeshLambertMaterial({ color: 0x5a3a22 }),
  );
  handle.position.y = -0.18;
  sword.add(handle);

  // Horizontal slash arc: sword orbits on slashPivot; trail shows the fixed semicircle ahead.
  const SLASH_RADIUS = 1.15;
  const SLASH_ARC = Math.PI * 0.92;
  const SLASH_ARC_HALF = SLASH_ARC / 2;

  const slashPivot = new THREE.Group();
  slashPivot.position.set(0, 0.12, 0);
  weaponRig.add(slashPivot);

  const slashGeo = new THREE.RingGeometry(
    SLASH_RADIUS - 0.14,
    SLASH_RADIUS + 0.14,
    40,
    1,
    Math.PI / 2 - SLASH_ARC_HALF,
    SLASH_ARC,
  );
  const slashMat = new THREE.MeshBasicMaterial({
    color: COLORS.slash,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
    depthTest: false,
  });
  const slash = new THREE.Mesh(slashGeo, slashMat);
  slash.rotation.x = -Math.PI / 2;
  slash.position.set(0, 0.12, 0);
  slash.renderOrder = 20;
  slash.frustumCulled = false;
  weaponRig.add(slash);

  const impactGeo = new THREE.RingGeometry(0.4, 0.75, 32);
  const impactMat = new THREE.MeshBasicMaterial({
    color: COLORS.impact,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const impactRing = new THREE.Mesh(impactGeo, impactMat);
  impactRing.rotation.x = -Math.PI / 2;
  impactRing.position.y = 0.06;
  root.add(impactRing);

  const state = {
    yaw: Math.PI,
    pitch: 0.12,
    hp: TUNING.playerHp,
    vy: 0,
    grounded: true,
    blocking: false,
    iFrames: 0,
    dodgeTimer: 0,
    hitStop: 0,
    knockX: 0,
    knockZ: 0,
    anim: null,
    comboStep: 0,
    comboTimer: 0,
    cooldowns: { light: 0, heavy: 0, push: 0, spin: 0, slam: 0, dodge: 0 },
    alive: true,
    pendingHits: [],
    cameraMode: 0, // 0 shoulder, 1 high, 2 close
  };

  const _fwd = new THREE.Vector3();
  const _right = new THREE.Vector3();
  const _wish = new THREE.Vector3();

  function getForward() {
    // Local −Z after root.rotation.y = yaw
    _fwd.set(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
    return _fwd;
  }

  function getRight() {
    _right.set(Math.cos(state.yaw), 0, -Math.sin(state.yaw));
    return _right;
  }

  function resetWeaponPose() {
    mountSwordOnHip();
    shield.position.set(IDLE_SHIELD.x, IDLE_SHIELD.y - 0.9, IDLE_SHIELD.z);
    shield.rotation.set(0, 0, Math.PI / 2);
    shield.scale.set(1, 1, 1);
    weaponRig.rotation.set(0, 0, 0);
    slashPivot.rotation.set(0, 0, 0);
    body.scale.set(1, 1, 1);
  }

  /** Sword on hip (idle / block). */
  function mountSwordOnHip() {
    if (sword.parent !== weaponRig) {
      slashPivot.remove(sword);
      weaponRig.add(sword);
    }
    sword.position.set(IDLE_SWORD.x, IDLE_SWORD.y - 0.9, IDLE_SWORD.z);
    sword.rotation.set(0, 0, 0);
    sword.scale.set(1, 1, 1);
  }

  /** Sword on horizontal arc arm — hilt near rim, blade tip points outward (−Z local). */
  function mountSwordOnArc() {
    if (sword.parent !== slashPivot) {
      weaponRig.remove(sword);
      slashPivot.add(sword);
    }
    // Guard sits on the arc ring; tip extends further toward enemies, hilt back toward player.
    sword.position.set(0, 0, -(SLASH_RADIUS - 0.22));
    sword.rotation.set(-Math.PI / 2, 0, 0);
    sword.scale.set(1, 1, 1);
  }

  function startAnim(spec) {
    state.anim = { ...spec, t: 0 };
    state.pendingHits = (spec.hits || []).map((h) => ({ ...h, fired: false }));
  }

  function easeOutCubic(u) {
    return 1 - (1 - u) ** 3;
  }

  function easeInCubic(u) {
    return u * u * u;
  }

  function updateVisuals(dt) {
    const bob = Math.sin(performance.now() * 0.006) * 0.03;
    body.position.y = TUNING.playerRadius + bob;
    root.rotation.y = state.yaw;

    if (impactMat.opacity > 0) {
      impactMat.opacity = Math.max(0, impactMat.opacity - dt * 2.2);
      const grow = 1 + (1 - impactMat.opacity) * 2.8;
      impactRing.scale.set(grow, grow, grow);
    }

    if (!state.anim) {
      slashMat.opacity = Math.max(0, slashMat.opacity - dt * 4);
      slash.visible = slashMat.opacity > 0.02;
      slashPivot.rotation.y = 0;
      if (state.blocking) {
        mountSwordOnHip();
        // Wall in front (local −Z)
        shield.position.set(0, 0.22, 1.1 * FWD);
        // Caps face along forward (−Z): rotate so flat face aims forward
        shield.rotation.set(Math.PI / 2, 0, 0);
        shield.scale.set(1.4, 1.4, 1.4);
        shield.material.emissive.setHex(0x6a9ccc);
        shield.material.emissiveIntensity = 0.45;
        sword.position.set(0.75, -0.1, 0.05 * FWD);
        sword.rotation.set(0.4, 0, 0.7);
      } else {
        mountSwordOnHip();
        shield.material.emissive.setHex(0x000000);
        shield.material.emissiveIntensity = 0;
        shield.scale.set(1, 1, 1);
        shield.position.set(IDLE_SHIELD.x, IDLE_SHIELD.y - 0.9, IDLE_SHIELD.z);
        shield.rotation.set(0, 0, Math.PI / 2);
        sword.position.set(IDLE_SWORD.x, IDLE_SWORD.y - 0.9, IDLE_SWORD.z);
        sword.rotation.set(0, 0, 0);
      }
      return;
    }

    state.anim.t += dt;
    const u = Math.min(1, state.anim.t / state.anim.dur);
    const type = state.anim.type;

    if (type === 'slashL' || type === 'slashR') {
      const left = type === 'slashL';
      const swing = Math.sin(u * Math.PI);
      mountSwordOnArc();
      // Half-circle wipe: right (+X) → front (−Z) → left (−X), or reverse
      const start = left ? -SLASH_ARC_HALF : SLASH_ARC_HALF;
      const end = left ? SLASH_ARC_HALF : -SLASH_ARC_HALF;
      slashPivot.rotation.y = THREE.MathUtils.lerp(start, end, easeOutCubic(u));
      slash.visible = true;
      slashMat.opacity = 0.35 + swing * 0.65;
      slash.scale.setScalar(0.94 + swing * 0.08);
      shield.position.set(-0.45, 0.0, 0.1 * FWD);
      shield.rotation.set(0, 0, Math.PI / 2);
    } else if (type === 'slashSpin') {
      const turns = u * Math.PI * 2;
      mountSwordOnArc();
      weaponRig.rotation.y = turns;
      slashPivot.rotation.y = 0;
      slash.visible = true;
      slashMat.opacity = 0.7 * (1 - u * 0.5);
      shield.position.set(-0.85, 0.05, 0.05 * FWD);
      shield.rotation.set(0, 0, Math.PI / 2);
    } else if (type === 'spin') {
      mountSwordOnHip();
      const revs = TUNING.spinRevolutions;
      const angle = u * Math.PI * 2 * revs;
      weaponRig.rotation.y = angle;
      sword.position.set(1.25, 0.05, 0);
      sword.rotation.set(0, 0, -Math.PI / 2);
      shield.position.set(-1.25, 0.05, 0);
      shield.rotation.set(Math.PI / 2, 0, Math.PI / 2);
      slashMat.opacity = 0.55;
      slash.visible = true;
      body.scale.setScalar(1 + Math.sin(angle * 2) * 0.04);
    } else if (type === 'slam') {
      mountSwordOnHip();
      const wind = TUNING.slamWindup;
      const slamT = TUNING.slamSlam;
      const t = state.anim.t;
      if (t < wind) {
        const w = easeOutCubic(t / wind);
        sword.position.set(0.25, 0.2 + w * 1.1, 0.1 * FWD);
        sword.rotation.set(-1.4 * w, 0, 0.2);
        shield.position.set(-0.25, 0.15 + w * 1.0, 0.05 * FWD);
        shield.rotation.set(-0.4 * w, 0, Math.PI / 2);
        body.scale.set(1, 1 + w * 0.12, 1);
      } else if (t < wind + slamT) {
        const s = easeInCubic((t - wind) / slamT);
        sword.position.set(0.2, 1.3 - s * 1.5, 0.35 * FWD);
        sword.rotation.set(-1.4 + s * 2.2, 0, 0);
        shield.position.set(-0.2, 1.15 - s * 1.35, 0.3 * FWD);
        shield.rotation.set(-0.4 + s * 1.2, 0, Math.PI / 2);
        body.scale.set(1 + s * 0.2, 1.12 - s * 0.25, 1 + s * 0.2);
        if (s > 0.85 && impactMat.opacity < 0.1) {
          impactMat.opacity = 0.95;
          impactRing.scale.set(1, 1, 1);
        }
      } else {
        const r = (t - wind - slamT) / TUNING.slamRecover;
        sword.position.lerp(
          new THREE.Vector3(IDLE_SWORD.x, IDLE_SWORD.y - 0.9, IDLE_SWORD.z),
          r,
        );
        shield.position.lerp(
          new THREE.Vector3(IDLE_SHIELD.x, IDLE_SHIELD.y - 0.9, IDLE_SHIELD.z),
          r,
        );
        body.scale.setScalar(1);
      }
      slashMat.opacity = 0;
    } else if (type === 'heavy' || type === 'push') {
      const swing = Math.sin(u * Math.PI);
      if (type === 'push') {
        mountSwordOnHip();
        // Shield bash forward
        shield.position.set(0, 0.15, (0.4 + swing * 0.9) * FWD);
        shield.rotation.set(Math.PI / 2, 0, 0);
        shield.scale.set(1.3, 1.3, 1.3);
        sword.position.set(0.6, 0, 0.1 * FWD);
      } else {
        mountSwordOnArc();
        const start = -SLASH_ARC_HALF * 0.55;
        const end = SLASH_ARC_HALF * 0.65;
        slashPivot.rotation.y = THREE.MathUtils.lerp(start, end, easeOutCubic(u));
        slash.visible = true;
        slashMat.opacity = swing * 0.85;
        shield.position.set(-0.4, 0, 0.2 * FWD);
      }
    } else if (type === 'dodge') {
      body.material.transparent = true;
      body.material.opacity = 0.4 + 0.6 * Math.abs(Math.sin(u * Math.PI * 4));
    }

    if (u >= 1) {
      const wasDodge = type === 'dodge';
      state.anim = null;
      weaponRig.rotation.set(0, 0, 0);
      resetWeaponPose();
      slashMat.opacity = 0;
      slash.visible = false;
      slashPivot.rotation.y = 0;
      if (wasDodge) {
        body.material.transparent = false;
        body.material.opacity = 1;
      }
    }
  }

  function consumeHits() {
    if (!state.anim) return [];
    const u = Math.min(1, state.anim.t / state.anim.dur);
    const out = [];
    for (const h of state.pendingHits) {
      if (!h.fired && u >= h.at) {
        h.fired = true;
        out.push(h);
      }
    }
    return out;
  }

  return {
    root,
    body,
    sword,
    shield,
    state,
    getForward,
    getRight,
    get position() {
      return root.position;
    },
    setSpawn(spawn = { x: 0, z: -4 }) {
      root.position.set(spawn.x ?? 0, root.position.y, spawn.z ?? -4);
    },
    applyLook(dx, dy) {
      state.yaw -= dx * TUNING.mouseSensitivity;
      state.pitch -= dy * TUNING.mouseSensitivity;
      state.pitch = THREE.MathUtils.clamp(state.pitch, -0.35, 0.55);
    },
    cycleCamera() {
      state.cameraMode = (state.cameraMode + 1) % 3;
      return state.cameraMode;
    },
    tryLight() {
      if (!state.alive || state.dodgeTimer > 0) return false;
      if (state.cooldowns.light > 0) return false;
      if (state.anim && (state.anim.type === 'spin' || state.anim.type === 'slam')) return false;
      if (state.comboTimer <= 0) state.comboStep = 0;
      const step = state.comboStep % 3;
      const dur = TUNING.comboStepDur[step];
      state.cooldowns.light = TUNING.lightCooldown;
      state.comboTimer = TUNING.comboWindow;
      state.comboStep = step + 1;
      if (step === 0) {
        startAnim({
          type: 'slashL',
          dur,
          hits: [{ kind: 'arc', damage: TUNING.lightDamage, range: TUNING.lightRange, arc: -0.1, at: 0.4 }],
        });
      } else if (step === 1) {
        startAnim({
          type: 'slashR',
          dur,
          hits: [{ kind: 'arc', damage: TUNING.lightDamage, range: TUNING.lightRange, arc: -0.1, at: 0.4 }],
        });
      } else {
        startAnim({
          type: 'slashSpin',
          dur,
          hits: [
            { kind: 'radius', damage: TUNING.combo3Damage, range: TUNING.lightRange * 0.95, at: 0.35 },
            { kind: 'radius', damage: TUNING.combo3Damage * 0.6, range: TUNING.lightRange * 0.95, at: 0.7 },
          ],
        });
        state.comboStep = 0;
        state.comboTimer = 0;
      }
      return true;
    },
    tryHeavy() {
      if (!state.alive || state.dodgeTimer > 0 || state.cooldowns.heavy > 0) return false;
      if (state.anim && (state.anim.type === 'spin' || state.anim.type === 'slam')) return false;
      state.cooldowns.heavy = TUNING.heavyCooldown;
      state.comboStep = 0;
      state.comboTimer = 0;
      startAnim({
        type: 'heavy',
        dur: TUNING.heavyDur,
        hits: [{ kind: 'arc', damage: TUNING.heavyDamage, range: TUNING.heavyRange, arc: -0.15, at: 0.45 }],
      });
      return true;
    },
    tryPush() {
      if (!state.alive || state.cooldowns.push > 0) return false;
      if (state.anim && (state.anim.type === 'spin' || state.anim.type === 'slam')) return false;
      state.cooldowns.push = TUNING.pushCooldown;
      startAnim({
        type: 'push',
        dur: TUNING.pushDur,
        hits: [{ kind: 'arc', damage: TUNING.pushDamage, range: TUNING.pushRange, arc: -0.2, at: 0.35 }],
      });
      return true;
    },
    trySpin() {
      if (!state.alive || state.dodgeTimer > 0 || state.cooldowns.spin > 0) return false;
      state.cooldowns.spin = TUNING.spinCooldown;
      state.comboStep = 0;
      state.comboTimer = 0;
      const hits = [];
      for (let r = 0; r < TUNING.spinRevolutions; r++) {
        hits.push({
          kind: 'radius',
          damage: TUNING.spinDamage,
          range: TUNING.spinRange,
          at: (r + 0.45) / TUNING.spinRevolutions,
        });
      }
      startAnim({ type: 'spin', dur: TUNING.spinDur, hits });
      return true;
    },
    trySlam() {
      if (!state.alive || state.dodgeTimer > 0 || state.cooldowns.slam > 0) return false;
      state.cooldowns.slam = TUNING.slamCooldown;
      state.comboStep = 0;
      state.comboTimer = 0;
      const dur = TUNING.slamWindup + TUNING.slamSlam + TUNING.slamRecover;
      const impactAt = TUNING.slamWindup / dur + (TUNING.slamSlam * 0.9) / dur;
      startAnim({
        type: 'slam',
        dur,
        hits: [{ kind: 'radius', damage: TUNING.slamDamage, range: TUNING.slamRange, at: impactAt }],
      });
      return true;
    },
    tryDodge() {
      if (!state.alive || state.cooldowns.dodge > 0 || state.dodgeTimer > 0) return false;
      state.cooldowns.dodge = TUNING.dodgeCooldown;
      state.dodgeTimer = TUNING.dodgeDuration;
      state.iFrames = TUNING.iFrameDuration;
      startAnim({ type: 'dodge', dur: TUNING.dodgeDuration, hits: [] });
      return true;
    },
    tryJump() {
      if (!state.alive || !state.grounded) return false;
      state.vy = TUNING.jumpVelocity;
      state.grounded = false;
      return true;
    },
    takeDamage(amount, fromX = 0, fromZ = 0) {
      if (!state.alive || state.iFrames > 0) return 0;
      let dmg = amount;
      if (state.blocking) dmg *= 0.28;
      state.hp = Math.max(0, state.hp - dmg);
      state.iFrames = state.blocking ? 0.15 : 0.4;
      state.hitStop = TUNING.hitStop;
      // Knock player away from source
      const dx = root.position.x - fromX;
      const dz = root.position.z - fromZ;
      const len = Math.hypot(dx, dz) || 1;
      const force = state.blocking ? TUNING.playerKnockback * 0.35 : TUNING.playerKnockback;
      state.knockX = (dx / len) * force;
      state.knockZ = (dz / len) * force;
      body.material.emissiveIntensity = 0.7;
      body.material.emissive.setHex(0xff2222);
      setTimeout(() => {
        body.material.emissiveIntensity = 0;
      }, 90);
      if (state.hp <= 0) state.alive = false;
      return dmg;
    },
    consumeHits,
    update(dt, input, clampFn) {
      if (!state.alive) return;

      if (state.hitStop > 0) {
        state.hitStop = Math.max(0, state.hitStop - dt);
        // Still tick i-frames / visuals lightly
        state.iFrames = Math.max(0, state.iFrames - dt);
        updateVisuals(dt * 0.2);
        return;
      }

      for (const k of Object.keys(state.cooldowns)) {
        state.cooldowns[k] = Math.max(0, state.cooldowns[k] - dt);
      }
      state.iFrames = Math.max(0, state.iFrames - dt);
      state.dodgeTimer = Math.max(0, state.dodgeTimer - dt);
      state.comboTimer = Math.max(0, state.comboTimer - dt);
      if (state.comboTimer <= 0) state.comboStep = 0;

      state.blocking = input.isBlocking();
      if (
        state.blocking &&
        state.anim &&
        (state.anim.type === 'slashL' ||
          state.anim.type === 'slashR' ||
          state.anim.type === 'slashSpin' ||
          state.anim.type === 'heavy')
      ) {
        state.anim = null;
        state.pendingHits = [];
        weaponRig.rotation.set(0, 0, 0);
        slashPivot.rotation.set(0, 0, 0);
        resetWeaponPose();
        slashMat.opacity = 0;
        slash.visible = false;
      }
      if (state.blocking && (state.anim?.type === 'spin' || state.anim?.type === 'slam' || state.anim?.type === 'dodge')) {
        state.blocking = false;
      }

      const fwd = getForward();
      const right = getRight();
      _wish.set(0, 0, 0);
      _wish.addScaledVector(right, input.move.x);
      _wish.addScaledVector(fwd, -input.move.y);
      if (_wish.lengthSq() > 1) _wish.normalize();

      let speed = TUNING.playerSpeed;
      if (state.dodgeTimer > 0) speed *= TUNING.dodgeSpeedMul;
      if (state.blocking) speed *= 0.55;
      if (state.anim && (state.anim.type === 'slam' || state.anim.type === 'heavy' || state.anim.type === 'push')) {
        speed *= 0.35;
      }
      if (state.anim && state.anim.type === 'spin') speed *= 0.7;

      root.position.x += _wish.x * speed * dt + state.knockX * dt;
      root.position.z += _wish.z * speed * dt + state.knockZ * dt;
      state.knockX *= Math.max(0, 1 - dt * 8);
      state.knockZ *= Math.max(0, 1 - dt * 8);

      state.vy -= TUNING.gravity * dt;
      root.position.y += state.vy * dt;
      if (root.position.y <= 0) {
        root.position.y = 0;
        state.vy = 0;
        state.grounded = true;
      }

      clampFn(root.position, TUNING.playerRadius);
      updateVisuals(dt);
    },
    facingDir() {
      return getForward().clone();
    },
  };
}

export function updateCamera(camera, player, dt) {
  const yaw = player.state.yaw;
  const pitch = player.state.pitch;
  const mode = player.state.cameraMode;
  let dist = TUNING.cameraDistance;
  let height = TUNING.cameraHeight;
  let lookH = TUNING.cameraLookHeight;
  if (mode === 1) {
    dist = 5.2;
    height = 3.4;
    lookH = 0.6;
  } else if (mode === 2) {
    dist = 2.2;
    height = 1.25;
    lookH = 1.15;
  }
  const target = new THREE.Vector3(
    player.position.x,
    player.position.y + lookH,
    player.position.z,
  );
  const offset = new THREE.Vector3(
    Math.sin(yaw) * dist * Math.cos(pitch),
    height + Math.sin(pitch) * dist,
    Math.cos(yaw) * dist * Math.cos(pitch),
  );
  const desired = target.clone().add(offset);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camera.lookAt(target);
}
