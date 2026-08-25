import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';

export function createPlayer(scene, spawn = new THREE.Vector3(0, 0, -4)) {
  const root = new THREE.Group();
  root.position.copy(spawn);
  root.position.y = 0;
  scene.add(root);

  const body = new THREE.Mesh(
    new THREE.SphereGeometry(TUNING.playerRadius, 24, 18),
    new THREE.MeshLambertMaterial({ color: COLORS.player, emissive: 0x000000 }),
  );
  body.position.y = TUNING.playerRadius;
  root.add(body);

  // Shield (left) + sword (right) — readable from over-shoulder view
  const shield = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.55, 0.08, 20),
    new THREE.MeshLambertMaterial({ color: COLORS.shield }),
  );
  shield.rotation.z = Math.PI / 2;
  shield.position.set(-0.55, 0.85, 0.15);
  root.add(shield);

  const sword = new THREE.Group();
  sword.position.set(0.65, 0.9, 0.2);
  root.add(sword);

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

  // Slash VFX arc
  const slashGeo = new THREE.RingGeometry(1.1, 1.45, 24, 1, 0, Math.PI * 0.7);
  const slashMat = new THREE.MeshBasicMaterial({
    color: COLORS.slash,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const slash = new THREE.Mesh(slashGeo, slashMat);
  slash.rotation.x = Math.PI / 2;
  slash.position.set(0.4, 1.0, 0.6);
  root.add(slash);

  const state = {
    yaw: 0,
    pitch: 0.18,
    hp: TUNING.playerHp,
    vy: 0,
    grounded: true,
    blocking: false,
    iFrames: 0,
    dodgeTimer: 0,
    anim: null, // { type, t, dur }
    cooldowns: { light: 0, heavy: 0, spin: 0, slam: 0, dodge: 0 },
    alive: true,
  };

  const _fwd = new THREE.Vector3();
  const _right = new THREE.Vector3();
  const _wish = new THREE.Vector3();

  function getForward() {
    _fwd.set(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
    return _fwd;
  }

  function getRight() {
    _right.set(Math.cos(state.yaw), 0, -Math.sin(state.yaw));
    return _right;
  }

  function startAnim(type, dur) {
    state.anim = { type, t: 0, dur };
    slashMat.opacity = type === 'block' ? 0 : 0.85;
  }

  function updateVisuals(dt) {
    // Idle bob
    const bob = Math.sin(performance.now() * 0.006) * 0.03;
    body.position.y = TUNING.playerRadius + bob;

    if (state.anim) {
      state.anim.t += dt;
      const u = Math.min(1, state.anim.t / state.anim.dur);
      const swing = Math.sin(u * Math.PI);
      if (state.anim.type === 'light') {
        sword.rotation.z = -swing * 1.4;
        sword.rotation.x = swing * 0.4;
        slash.rotation.z = -0.4 + u * 1.4;
      } else if (state.anim.type === 'heavy') {
        sword.rotation.z = -swing * 1.8;
        sword.rotation.x = -swing * 0.8;
        slash.rotation.z = -0.6 + u * 1.8;
      } else if (state.anim.type === 'spin') {
        root.rotation.y = state.yaw + u * Math.PI * 2;
        slashMat.opacity = 0.7 * (1 - u);
      } else if (state.anim.type === 'slam') {
        sword.rotation.x = -swing * 1.6;
        body.scale.setScalar(1 + swing * 0.15);
      } else if (state.anim.type === 'dodge') {
        body.material.opacity = 0.45 + 0.55 * Math.abs(Math.sin(u * Math.PI * 4));
        body.material.transparent = true;
      }
      slashMat.opacity = Math.max(0, slashMat.opacity - dt * 2.5);
      if (u >= 1) {
        state.anim = null;
        sword.rotation.set(0, 0, 0);
        body.scale.setScalar(1);
        body.material.transparent = false;
        body.material.opacity = 1;
        root.rotation.y = state.yaw;
      }
    } else {
      root.rotation.y = state.yaw;
      // Block pose
      if (state.blocking) {
        shield.position.set(-0.15, 0.95, 0.55);
        shield.rotation.set(0.4, 0, Math.PI / 2);
      } else {
        shield.position.set(-0.55, 0.85, 0.15);
        shield.rotation.set(0, 0, Math.PI / 2);
      }
    }
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
    applyLook(dx, dy) {
      state.yaw -= dx * TUNING.mouseSensitivity;
      state.pitch -= dy * TUNING.mouseSensitivity;
      state.pitch = THREE.MathUtils.clamp(state.pitch, -0.35, 0.55);
    },
    tryAttack(kind) {
      if (!state.alive) return false;
      if (state.dodgeTimer > 0) return false;
      if (state.cooldowns[kind] > 0) return false;
      const map = {
        light: { cd: TUNING.lightCooldown, dur: 0.22 },
        heavy: { cd: TUNING.heavyCooldown, dur: 0.36 },
        spin: { cd: TUNING.spinCooldown, dur: 0.45 },
        slam: { cd: TUNING.slamCooldown, dur: 0.4 },
      };
      const m = map[kind];
      if (!m) return false;
      state.cooldowns[kind] = m.cd;
      startAnim(kind, m.dur);
      return true;
    },
    tryDodge() {
      if (!state.alive || state.cooldowns.dodge > 0 || state.dodgeTimer > 0) return false;
      state.cooldowns.dodge = TUNING.dodgeCooldown;
      state.dodgeTimer = TUNING.dodgeDuration;
      state.iFrames = TUNING.iFrameDuration;
      startAnim('dodge', TUNING.dodgeDuration);
      return true;
    },
    tryJump() {
      if (!state.alive || !state.grounded) return false;
      state.vy = TUNING.jumpVelocity;
      state.grounded = false;
      return true;
    },
    takeDamage(amount) {
      if (!state.alive || state.iFrames > 0) return 0;
      let dmg = amount;
      if (state.blocking) dmg *= 0.28;
      state.hp = Math.max(0, state.hp - dmg);
      state.iFrames = state.blocking ? 0.15 : 0.4;
      body.material.emissive = new THREE.Color(0xff2222);
      body.material.emissiveIntensity = 0.6;
      setTimeout(() => {
        body.material.emissiveIntensity = 0;
      }, 80);
      if (state.hp <= 0) state.alive = false;
      return dmg;
    },
    update(dt, input, clampFn) {
      if (!state.alive) return;

      for (const k of Object.keys(state.cooldowns)) {
        state.cooldowns[k] = Math.max(0, state.cooldowns[k] - dt);
      }
      state.iFrames = Math.max(0, state.iFrames - dt);
      state.dodgeTimer = Math.max(0, state.dodgeTimer - dt);
      state.blocking = input.isBlocking();

      const fwd = getForward();
      const right = getRight();
      _wish.set(0, 0, 0);
      _wish.addScaledVector(right, input.move.x);
      _wish.addScaledVector(fwd, -input.move.y);
      if (_wish.lengthSq() > 1) _wish.normalize();

      let speed = TUNING.playerSpeed;
      if (state.dodgeTimer > 0) speed *= TUNING.dodgeSpeedMul;
      if (state.blocking) speed *= 0.55;
      if (state.anim && (state.anim.type === 'heavy' || state.anim.type === 'slam')) {
        speed *= 0.35;
      }

      root.position.x += _wish.x * speed * dt;
      root.position.z += _wish.z * speed * dt;

      // Gravity / jump
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
    hitOrigin() {
      return new THREE.Vector3(
        root.position.x - Math.sin(state.yaw) * 0.8,
        root.position.y + 1.0,
        root.position.z - Math.cos(state.yaw) * 0.8,
      );
    },
    facingDir() {
      return getForward().clone();
    },
  };
}

export function updateCamera(camera, player, dt) {
  const yaw = player.state.yaw;
  const pitch = player.state.pitch;
  const dist = TUNING.cameraDistance;
  const target = new THREE.Vector3(
    player.position.x,
    player.position.y + TUNING.cameraLookHeight,
    player.position.z,
  );
  const offset = new THREE.Vector3(
    Math.sin(yaw) * dist * Math.cos(pitch),
    TUNING.cameraHeight + Math.sin(pitch) * dist,
    Math.cos(yaw) * dist * Math.cos(pitch),
  );
  const desired = target.clone().add(offset);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camera.lookAt(target);
}
