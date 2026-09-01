import * as THREE from 'three';
import { TUNING } from './config.js';
import { createInput } from './input.js';
import { createArena } from './arena.js';
import { createPlayer, updateCamera } from './player.js';
import { createSwarm } from './swarm.js';
import { createCombat } from './combat.js';
import { createWaveController } from './waves.js';
import { createHUD } from './hud.js';
import { createAudio } from './audio.js';
import { loadPreset, loadBundle } from '../bundle/load.js';
import { applyBundle } from '../bundle/apply.js';
import { getBundle, getScoring } from '../runtime/bundleState.js';
import { createAdminStudio } from '../admin/panel.js';
import { createStudioWorkshop } from './studioWorkshop.js';
import { createStudioDock } from '../studio/studioDock.js';
import { createCharacterSetup } from '../ui/characterSetup.js';
import { loadLoadout, resolveThing } from '../runtime/loadout.js';
import { getPlayCatalog } from '../runtime/playCatalog.js';
import { applyWeaponStatsToTuning, weaponStatsFromThing } from '../runtime/weaponStats.js';

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
  const workshop = createStudioWorkshop(scene);
  const bundle = loadPreset('default');
  const spawn = bundle.world.playerSpawn;
  const player = createPlayer(scene, new THREE.Vector3(spawn.x, 0, spawn.z));
  const swarm = createSwarm(scene);
  const audio = createAudio();
  const combat = createCombat(player, swarm, audio);
  const waves = createWaveController(swarm, arena);
  const input = createInput(canvas);
  const hud = createHUD();

  let mode = 'menu'; // menu | setup | playing | gameover | studio
  let gateHp = TUNING.gateHp;
  let score = 0;
  let kills = 0;
  let time = 0;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  let raf = 0;
  let last = performance.now();
  let wasBlocking = false;
  let lastDomain = null;

  const bundleCtx = {
    arena,
    player,
    waves,
    swarm,
    scene,
    workshop,
    getBundle,
    onApplied: null,
    onApply: null,
  };

  applyBundle(bundleCtx, bundle);

  function applyCurrentLoadout(loadout = loadLoadout()) {
    const catalog = getPlayCatalog();
    player.applyLoadout(loadout, catalog);
    const weapon = resolveThing(catalog, loadout?.slots?.hand);
    applyWeaponStatsToTuning(weaponStatsFromThing(weapon));
  }
  applyCurrentLoadout();

  bundleCtx.onApply = () => {
    gateHp = Math.min(gateHp, TUNING.gateHp);
    player.state.hp = Math.min(player.state.hp, TUNING.playerHp);
    applyCurrentLoadout();
  };

  const admin = createAdminStudio({
    ...bundleCtx,
    onApply: bundleCtx.onApply,
  });

  const dock = createStudioDock({
    getActiveDomain: () => workshop.getActiveDomain(),
    onCatalogChange: (b) => {
      workshop.rebuildPreviews(b);
    },
    onLeave: () => leaveStudio(),
  });

  const characterSetup = createCharacterSetup({
    getCatalog: () => getPlayCatalog(),
    onChange: (loadout, catalog) => {
      player.applyLoadout(loadout, catalog);
      const weapon = resolveThing(catalog, loadout?.slots?.hand);
      applyWeaponStatsToTuning(weaponStatsFromThing(weapon));
    },
    onConfirm: () => start(),
    onBack: () => {
      mode = 'menu';
      characterSetup.hide();
      hud.showMenu();
    },
  });

  waves.on('countdown', ({ wave, value }) => {
    hud.showCallout(wave, value);
  });
  waves.on('fight', () => {
    hud.hideCallout();
  });
  waves.on('cleared', () => {
    score += getScoring().waveClearBonus ?? 40;
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
    const ps = getBundle().world.playerSpawn;
    player.setSpawn(ps);
    player.state.yaw = Math.PI;
    player.state.pitch = 0.12;
    gateHp = TUNING.gateHp;
    score = 0;
    kills = 0;
    time = 0;
    arena.gateMesh.material.color.setHex(0xdc3545);
    applyCurrentLoadout();
    waves.startRun();
  }

  function openSetup() {
    audio.unlock();
    workshop.setVisible(false);
    arena.setSiegeVisible(true);
    dock.setVisible(false);
    if (getBundle().foundation?.id === 'studio') {
      applyBundle(bundleCtx, loadPreset('default'));
    }
    swarm.clear();
    const ps = getBundle().world.playerSpawn;
    player.setSpawn(ps);
    player.state.yaw = Math.PI * 0.15;
    player.state.pitch = 0.08;
    player.root.position.y = 0;
    applyCurrentLoadout();
    mode = 'setup';
    characterSetup.show();
    hud.showSetup();
  }

  function start() {
    audio.unlock();
    characterSetup.hide();
    workshop.setVisible(false);
    arena.setSiegeVisible(true);
    dock.setVisible(false);
    if (getBundle().foundation?.id === 'studio') {
      applyBundle(bundleCtx, loadPreset('default'));
    }
    resetRun();
    mode = 'playing';
    hud.showHud();
    hud.setHintVisible(!matchMedia('(pointer: coarse)').matches);
    input.requestLock();
  }

  function startStudio() {
    audio.unlock();
    swarm.clear();
    const draft = dock.loadDraft();
    const studioBundle = draft?.foundation?.id === 'studio' ? loadBundle(draft) : loadPreset('studio');
    applyBundle(bundleCtx, studioBundle);
    workshop.setVisible(true);
    arena.setSiegeVisible(false);
    player.state.hp = TUNING.playerHp;
    player.state.alive = true;
    player.state.vy = 0;
    player.setSpawn(getBundle().world.playerSpawn);
    player.state.yaw = 0;
    player.state.pitch = 0.1;
    mode = 'studio';
    lastDomain = null;
    hud.showStudio();
    hud.setStudioDomain(null);
    dock.setVisible(true);
    input.requestLock();
  }

  function leaveStudio() {
    document.exitPointerLock?.();
    workshop.setVisible(false);
    arena.setSiegeVisible(true);
    dock.setVisible(false);
    admin.enabled && admin.close();
    applyBundle(bundleCtx, loadPreset('default'));
    applyCurrentLoadout();
    swarm.clear();
    mode = 'menu';
    hud.showMenu();
    swarm.spawnWave(18, arena.portalPosition, arena.gatePosition);
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
    if (input.consumeAction('push')) combat.push();
    if (input.consumeAction('heavy')) combat.heavy();
    if (input.consumeAction('spin')) combat.spin();
    if (input.consumeAction('slam')) combat.slam();
    if (input.consumeAction('dodge')) {
      if (player.tryDodge()) audio.dodge();
    }
    if (input.consumeAction('jump')) player.tryJump();
    if (input.consumeAction('camera')) player.cycleCamera();

    const blocking = input.isBlocking();
    if (blocking && !wasBlocking) audio.block();
    wasBlocking = blocking;
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
        (enemyIndex) => {
          const pos = swarm.getPosition(enemyIndex);
          const dealt = player.takeDamage(TUNING.enemyContactDamage, pos.x, pos.z);
          if (dealt > 0) {
            audio.hurt();
            combat.addShake(0.12);
            score += 1;
          }
          if (!player.state.alive) endRun('player');
        },
        () => {
          gateHp = Math.max(0, gateHp - TUNING.enemyGateDamage);
          arena.gateMesh.material.emissive.setHex(0xff4444);
          arena.gateMesh.material.emissiveIntensity = 0.85;
          audio.gateHit();
          combat.addShake(0.08);
          if (gateHp <= 0) endRun('gate');
        },
      );

      arena.gateMesh.material.emissiveIntensity = Math.max(
        0,
        arena.gateMesh.material.emissiveIntensity - dt * 2.5,
      );

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

      const g = gateHp / TUNING.gateHp;
      arena.gateMesh.material.color.setRGB(0.86 * (0.4 + 0.6 * g), 0.21 * g, 0.27 * g);
    } else if (mode === 'studio') {
      const { dx, dy } = input.consumeMouseDelta();
      player.applyLook(dx, dy);
      if (input.consumeAction('jump')) player.tryJump();
      if (input.consumeAction('camera')) player.cycleCamera();
      // Soft walk — no combat actions
      player.update(dt, input, arena.clampToArena);
      updateCamera(camera, player, dt);

      const domain = workshop.updateFromPlayer(player.position.x, player.position.z);
      if (domain !== lastDomain) {
        lastDomain = domain;
        hud.setStudioDomain(domain);
        if (dock.isVisible()) dock.render();
      }
    } else if (mode === 'setup') {
      // Slow turntable preview of loadout
      player.state.yaw += dt * 0.55;
      player.root.rotation.y = player.state.yaw;
      const focus = player.position.clone();
      focus.y += 1.05;
      camera.position.set(focus.x + 3.4, 2.2, focus.z + 3.8);
      camera.lookAt(focus);
    } else {
      swarm.update(dt * 0.35, player.position, arena.gatePosition);
      const t = now * 0.00025;
      camera.position.set(Math.sin(t) * 14, 8, Math.cos(t) * 14);
      camera.lookAt(0, 1, -8);
    }

    renderer.render(scene, camera);
  }

  function bindUI() {
    document.getElementById('btn-play')?.addEventListener('click', () => openSetup());
    document.getElementById('btn-studio')?.addEventListener('click', () => startStudio());
    document.getElementById('btn-retry')?.addEventListener('click', () => start());
    document.getElementById('btn-menu')?.addEventListener('click', () => {
      mode = 'menu';
      characterSetup.hide();
      swarm.clear();
      hud.showMenu();
    });
    document.getElementById('btn-studio-leave')?.addEventListener('click', () => leaveStudio());
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        document.exitPointerLock?.();
        hud.setHintVisible(true);
        if (mode === 'studio') dock.setVisible(true);
      }
    });
  }

  bindUI();
  hud.showMenu();
  swarm.spawnWave(18, arena.portalPosition, arena.gatePosition);
  raf = requestAnimationFrame(tick);

  globalThis.__horde = {
    player,
    admin,
    dock,
    workshop,
    characterSetup,
    getBundle,
    startStudio,
    openSetup,
    isBlocking: () => player.state.blocking,
    shieldPos: () => ({ ...player.shield.position }),
  };

  return {
    start,
    openSetup,
    startStudio,
    admin,
    dispose() {
      cancelAnimationFrame(raf);
      input.dispose();
      window.removeEventListener('resize', resize);
      renderer.dispose();
    },
  };
}
