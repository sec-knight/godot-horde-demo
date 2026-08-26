import * as THREE from 'three';
import { TUNING, COLORS } from '../game/config.js';
import { setObstacles, getObstacles } from '../game/obstacles.js';
import { setBundle } from '../runtime/bundleState.js';

function hexToNum(hex) {
  return Number.parseInt(String(hex).replace('#', ''), 16);
}

function patchTuning(things = {}, actors = {}, events = {}) {
  const p = things.player ?? {};
  const g = things.gate ?? {};
  const e = things.enemy ?? {};
  const w = things.weapons ?? {};
  const ap = actors.player ?? {};
  const cam = actors.camera ?? {};
  const h = actors.horde ?? {};
  const c = actors.corpse ?? {};

  Object.assign(TUNING, {
    playerHp: p.hp ?? TUNING.playerHp,
    playerRadius: p.radius ?? TUNING.playerRadius,
    playerSpeed: p.speed ?? TUNING.playerSpeed,
    gateHp: g.hp ?? TUNING.gateHp,
    enemyHp: e.hp ?? TUNING.enemyHp,
    enemySize: e.size ?? TUNING.enemySize,
    enemySpeed: e.speed ?? TUNING.enemySpeed,
    enemyContactDamage: e.contactDamage ?? TUNING.enemyContactDamage,
    enemyGateDamage: e.gateDamage ?? TUNING.enemyGateDamage,
    enemyKnockback: e.knockback ?? TUNING.enemyKnockback,
    lightDamage: w.light?.damage ?? TUNING.lightDamage,
    lightRange: w.light?.range ?? TUNING.lightRange,
    lightCooldown: w.light?.cooldown ?? TUNING.lightCooldown,
    combo3Damage: w.comboFinisher?.damage ?? TUNING.combo3Damage,
    heavyDamage: w.heavy?.damage ?? TUNING.heavyDamage,
    heavyRange: w.heavy?.range ?? TUNING.heavyRange,
    heavyCooldown: w.heavy?.cooldown ?? TUNING.heavyCooldown,
    pushDamage: w.push?.damage ?? TUNING.pushDamage,
    pushRange: w.push?.range ?? TUNING.pushRange,
    pushCooldown: w.push?.cooldown ?? TUNING.pushCooldown,
    spinDamage: w.spin?.damage ?? TUNING.spinDamage,
    spinRange: w.spin?.range ?? TUNING.spinRange,
    spinRevolutions: w.spin?.revolutions ?? TUNING.spinRevolutions,
    spinCooldown: w.spin?.cooldown ?? TUNING.spinCooldown,
    slamDamage: w.slam?.damage ?? TUNING.slamDamage,
    slamRange: w.slam?.range ?? TUNING.slamRange,
    slamCooldown: w.slam?.cooldown ?? TUNING.slamCooldown,
    playerKnockback: ap.knockback ?? TUNING.playerKnockback,
    hitStop: ap.hitStop ?? TUNING.hitStop,
    dodgeCooldown: ap.dodgeCooldown ?? TUNING.dodgeCooldown,
    dodgeDuration: ap.dodgeDuration ?? TUNING.dodgeDuration,
    iFrameDuration: ap.iFrameDuration ?? TUNING.iFrameDuration,
    jumpVelocity: ap.jumpVelocity ?? TUNING.jumpVelocity,
    gravity: ap.gravity ?? TUNING.gravity,
    mouseSensitivity: ap.mouseSensitivity ?? TUNING.mouseSensitivity,
    cameraDistance: cam.distance ?? TUNING.cameraDistance,
    cameraHeight: cam.height ?? TUNING.cameraHeight,
    cameraLookHeight: cam.lookHeight ?? TUNING.cameraLookHeight,
    maxEnemies: h.maxEnemies ?? TUNING.maxEnemies,
    enemyContactCooldown: h.contactCooldown ?? TUNING.enemyContactCooldown,
    enemyGateCooldown: h.gateContactCooldown ?? TUNING.enemyGateCooldown,
    enemyAttackRange: h.attackRange ?? TUNING.enemyAttackRange,
    enemyTelegraph: h.telegraph ?? TUNING.enemyTelegraph,
    enemyBonk: h.bonk ?? TUNING.enemyBonk,
    enemyRecover: h.recover ?? TUNING.enemyRecover,
    corpseLifetime: c.lifetime ?? TUNING.corpseLifetime,
    corpseBounce: c.bounce ?? TUNING.corpseBounce,
    waveCountdown: events.waveCountdown ?? TUNING.waveCountdown,
    scorePerKill: events.scoring?.perKill ?? TUNING.scorePerKill,
    scorePerSecondNear: events.scoring?.perSecondNear ?? TUNING.scorePerSecondNear,
  });
}

export function applyBundle(ctx, bundle) {
  setBundle(bundle);
  const { world, things, actors, events } = bundle;

  TUNING.arenaRadius = world.arenaRadius;
  TUNING.gateSize = world.gate.size;
  patchTuning(things, actors, events);

  setObstacles(
    world.obstacles.map((o) => ({
      x: o.x,
      z: o.z,
      radius: o.radius,
      label: o.id,
      visualRadius: o.visualRadius,
    })),
  );

  ctx.arena.applyWorld(world);
  ctx.player.setSpawn(world.playerSpawn);

  ctx.workshop?.applyBundle(bundle);

  if (ctx.onApplied) ctx.onApplied(bundle);
}

export function captureBundleFromRuntime(ctx) {
  const prev = structuredClone(ctx.getBundle());
  const w = prev.world;
  w.arenaRadius = TUNING.arenaRadius;
  w.gate = {
    x: ctx.arena.gateGroup.position.x,
    z: ctx.arena.gateGroup.position.z,
    size: TUNING.gateSize,
  };
  w.portal = { x: ctx.arena.portalGroup.position.x, z: ctx.arena.portalGroup.position.z };
  w.obstacles = getObstacles().map((o) => ({
    id: o.label ?? 'obstacle',
    kind: 'berm',
    x: o.x,
    z: o.z,
    radius: o.radius,
    visualRadius: o.visualRadius ?? o.radius + 0.8,
  }));

  prev.things = prev.things ?? {};
  prev.things.player = { hp: TUNING.playerHp, radius: TUNING.playerRadius, speed: TUNING.playerSpeed };
  prev.things.gate = { hp: TUNING.gateHp };
  prev.things.enemy = {
    hp: TUNING.enemyHp,
    size: TUNING.enemySize,
    speed: TUNING.enemySpeed,
    contactDamage: TUNING.enemyContactDamage,
    gateDamage: TUNING.enemyGateDamage,
    knockback: TUNING.enemyKnockback,
  };

  prev.events = prev.events ?? {};
  prev.events.waveCountdown = TUNING.waveCountdown;
  prev.events.betweenWavePause = prev.events.betweenWavePause ?? 1.4;
  prev.events.scoring = {
    perKill: TUNING.scorePerKill,
    perSecondNear: TUNING.scorePerSecondNear,
    waveClearBonus: prev.events.scoring?.waveClearBonus ?? 40,
  };

  return prev;
}

export function applyEnvironmentToScene(scene, arenaRefs, env) {
  const sky = hexToNum(env.sky);
  const ground = hexToNum(env.ground);
  COLORS.sky = sky;
  COLORS.ground = ground;
  scene.background = new THREE.Color(sky);
  if (scene.fog) {
    scene.fog.color.setHex(sky);
    scene.fog.near = env.fogNear;
    scene.fog.far = env.fogFar;
  }
  arenaRefs.ground?.material.color.setHex(ground);
}
