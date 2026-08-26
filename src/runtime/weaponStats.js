import { TUNING } from '../game/config.js';

/** Baseline ratios from shipped sword feel (config.js defaults). */
const BASE = {
  damage: 18,
  reach: 3.2,
  speed: 1,
  lightCooldown: 0.08,
  comboStepDur: [0.3, 0.3, 0.42],
  heavyDamageMul: 42 / 18,
  combo3Mul: 28 / 18,
  pushMul: 26 / 18,
  spinMul: 14 / 18,
  slamMul: 55 / 18,
  heavyRangeMul: 3.4 / 3.2,
  pushRangeMul: 3.0 / 3.2,
  spinRangeMul: 3.4 / 3.2,
  slamRangeMul: 4.2 / 3.2,
  heavyCooldown: 0.48,
  heavyDur: 0.36,
  pushCooldown: 0.35,
  pushDur: 0.28,
  spinCooldown: 2.6,
  spinDur: 1.15,
  slamCooldown: 3.2,
  slamWindup: 0.42,
  slamSlam: 0.18,
  slamRecover: 0.22,
};

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, Number(n) || min));
}

export function normalizeWeaponStats(stats) {
  return {
    damage: clamp(stats?.damage ?? BASE.damage, 1, 200),
    reach: clamp(stats?.reach ?? BASE.reach, 0.5, 12),
    speed: clamp(stats?.speed ?? BASE.speed, 0.35, 2.5),
  };
}

export function defaultWeaponStats(style = 'sword') {
  if (style === 'spear') return { damage: 14, reach: 4.4, speed: 1.05 };
  if (style === 'hammer') return { damage: 30, reach: 2.5, speed: 0.72 };
  return { damage: 18, reach: 3.2, speed: 1.0 };
}

export function weaponStatsFromThing(thing) {
  if (!thing || thing.slot !== 'hand') return normalizeWeaponStats(defaultWeaponStats('sword'));
  return normalizeWeaponStats(thing.stats ?? defaultWeaponStats(thing.style ?? 'sword'));
}

/**
 * Patch combat TUNING from a weapon Thing's damage / reach / speed.
 * speed > 1 → faster swings (shorter anims & cooldowns).
 */
export function applyWeaponStatsToTuning(stats) {
  const s = normalizeWeaponStats(stats);
  const inv = 1 / s.speed;

  Object.assign(TUNING, {
    lightDamage: s.damage,
    combo3Damage: s.damage * BASE.combo3Mul,
    lightRange: s.reach,
    lightCooldown: BASE.lightCooldown * inv,
    comboStepDur: BASE.comboStepDur.map((d) => d * inv),

    heavyDamage: s.damage * BASE.heavyDamageMul,
    heavyRange: s.reach * BASE.heavyRangeMul,
    heavyCooldown: BASE.heavyCooldown * inv,
    heavyDur: BASE.heavyDur * inv,

    pushDamage: s.damage * BASE.pushMul,
    pushRange: s.reach * BASE.pushRangeMul,
    pushCooldown: BASE.pushCooldown * inv,
    pushDur: BASE.pushDur * inv,

    spinDamage: s.damage * BASE.spinMul,
    spinRange: s.reach * BASE.spinRangeMul,
    spinCooldown: BASE.spinCooldown * inv,
    spinDur: BASE.spinDur * inv,

    slamDamage: s.damage * BASE.slamMul,
    slamRange: s.reach * BASE.slamRangeMul,
    slamCooldown: BASE.slamCooldown * inv,
    slamWindup: BASE.slamWindup * inv,
    slamSlam: BASE.slamSlam * inv,
    slamRecover: BASE.slamRecover * inv,
  });

  return s;
}

export function formatWeaponStats(stats) {
  const s = normalizeWeaponStats(stats);
  return `DMG ${Math.round(s.damage)} · REACH ${s.reach.toFixed(1)} · SPD ${s.speed.toFixed(2)}`;
}
