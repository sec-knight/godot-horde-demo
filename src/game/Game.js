import * as THREE from 'three';
import { TUNING } from './config.js';
import { createInput } from './input.js';
import { createArena } from './arena.js';
import { createPlayer, updateCamera } from './player.js';
import { createSwarm } from './swarm.js';
import { createCombat } from './combat.js';
import { createWaveController } from './waves.js';
import { createHUD } from './hud.js';

const BEST_KEY = 'threejs-horde-best';

export function createGame(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 120);

  const arena = createArena(scene);
  const player = createPlayer(scene, new THREE.Vector3(0, 0, -4));
  const swarm = createSwarm(scene);
  const combat = createCombat(player, swarm);
  const waves = createWaveController(swarm, arena);
  const input = createInput(canvas);
  const hud = createHUD();

  let mode = 'menu'; // menu | playing | gameover
  let gateHp = TUNING.gateHp;
  let score = 0;
  let kills = 0;
  let time = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let raf = 0;
  let last = performance.now();

  waves.on('countdown', ({ wave, value }) => {
    hud.showCallout(wave, value);
  });
  waves.on('fight', () => {
    hud.hideCallout();
  });
  waves.on('cleared', () => {
    score += 40;
  });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', resize);

  function resetRun() {
    swarm.clear();
    player.state.hp = TUNING.playerHp;
    player.state.alive = true;
    player.state.iFrames = 0;
    player.state.vy = 0;
    player.position.set(0, 0, -4);
    // Face the portal / incoming horde (+Z); gate sits behind the player.
    player.state.yaw = Math.PI;
    player.state.pitch = 0.12;
    gateHp = TUNING.gateHp;
    score = 0;
    kills = 0;
    time = 0;
    arena.gateMesh.material.color.setHex(0xdc3545);
    waves.startRun();
  }

  function start() {
    resetRun();
    mode = 'playing';
    hud.showHud();
    hud.setHintVisible(!matchMedia('(pointer: coarse)').matches);
    input.requestLock();
  }

  function endRun(reason) {
    if (mode !== 'playing') return;
    mode = 'gameover';
    document.exitPointerLock?.();
    best = Math.max(best, score);
    localStorage.setItem(BEST_KEY, String(Math.floor(best)));
    hud.showGameOver({
      reason,
      score,
      kills,
      waves: waves.wavesCleared,
      time,
      best,
    });
  }

  function handleCombatInput() {
    if (input.consumeAction('light')) combat.light();
    if (input.consumeAction('heavy')) combat.heavy();
    if (input.consumeAction('spin')) combat.spin();
    if (input.consumeAction('slam')) combat.slam();
    if (input.consumeAction('dodge')) player.tryDodge();
    if (input.consumeAction('jump')) player.tryJump();
  }

  function tick(now) {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    if (mode === 'playing') {
      const { dx, dy } = input.consumeMouseDelta();
      player.applyLook(dx, dy);
      handleCombatInput();
      player.update(dt, input, arena.clampToArena);
      const gained = combat.update(dt);
      if (gained > 0) {
        kills += gained;
        score += gained * TUNING.scorePerKill;
      }
      waves.update(dt);

      swarm.update(
        dt,
        player.position,
        arena.gatePosition,
        () => {
          const dealt = player.takeDamage(TUNING.enemyContactDamage);
          if (dealt > 0) score += 1;
          if (!player.state.alive) endRun('player');
        },
        () => {
          gateHp = Math.max(0, gateHp - TUNING.enemyGateDamage);
          arena.gateMesh.material.emissive.setHex(0xff4444);
          arena.gateMesh.material.emissiveIntensity = 0.55;
          if (gateHp <= 0) endRun('gate');
        },
      );

      arena.gateMesh.material.emissiveIntensity = Math.max(
        0,
        arena.gateMesh.material.emissiveIntensity - dt * 2.5,
      );

      // Passive score while the fight is on and enemies are near
      if (waves.phase === 'fighting') {
        if (swarm.aliveCount > 0) score += TUNING.scorePerSecondNear * dt;
        time += dt;
      }

      updateCamera(camera, player, dt);
      if (combat.shake > 0) {
        camera.position.x += (Math.random() - 0.5) * combat.shake;
        camera.position.y += (Math.random() - 0.5) * combat.shake * 0.6;
      }

      hud.update({
        gateHp,
        gateMax: TUNING.gateHp,
        hp: player.state.hp,
        hpMax: TUNING.playerHp,
        score,
        wave: waves.wave,
        kills,
        time,
        alive: swarm.aliveCount,
      });

      // Dim gate as it takes damage
      const g = gateHp / TUNING.gateHp;
      arena.gateMesh.material.color.setRGB(0.86 * (0.4 + 0.6 * g), 0.21 * g, 0.27 * g);
    } else {
      // Idle orbit on menu — horde creeps toward the gate for atmosphere
      swarm.update(dt * 0.35, player.position, arena.gatePosition);
      const t = now * 0.00025;
      camera.position.set(Math.sin(t) * 14, 8, Math.cos(t) * 14);
      camera.lookAt(0, 1, -8);
    }

    renderer.render(scene, camera);
  }

  function bindUI() {
    document.getElementById('btn-play')?.addEventListener('click', () => start());
    document.getElementById('btn-retry')?.addEventListener('click', () => start());
    document.getElementById('btn-menu')?.addEventListener('click', () => {
      mode = 'menu';
      swarm.clear();
      hud.showMenu();
    });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        document.exitPointerLock?.();
        hud.setHintVisible(true);
      }
    });
  }

  bindUI();
  hud.showMenu();
  // Place a preview swarm on the menu for atmosphere
  swarm.spawnWave(18, arena.portalPosition, arena.gatePosition);
  raf = requestAnimationFrame(tick);

  // Dev/test hook for automation
  globalThis.__horde = {
    player,
    isBlocking: () => player.state.blocking,
    shieldPos: () => ({ ...player.shield.position }),
  };

  return {
    start,
    dispose() {
      cancelAnimationFrame(raf);
      input.dispose();
      window.removeEventListener('resize', resize);
      renderer.dispose();
    },
  };
}
