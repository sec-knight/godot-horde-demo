/** Shared palette + tuning knobs for the Horde Defense feel. */

export const COLORS = {
  sky: 0xa9c4d8,
  ground: 0x4f8a3c,
  berm: 0x3a3838,
  bermAccent: 0x5a5550,
  gate: 0xdc3545,
  gateBase: 0x2a2a2e,
  portal: 0x6b2a8a,
  portalGlow: 0xb45cff,
  player: 0x8fb4d4,
  shield: 0x4a4a4a,
  swordBlade: 0xd8d8d8,
  swordGuard: 0x3d3d3d,
  enemy: 0x9a2233,
  enemyHit: 0xff8a8a,
  slash: 0xffe6a0,
  impact: 0xffcc66,
};

export const TUNING = {
  arenaRadius: 28,
  playerRadius: 0.55,
  playerSpeed: 8.5,
  playerHp: 100,
  gateHp: 500,
  gateSize: 2.4,
  enemySize: 1.1,
  enemySpeed: 2.6,
  enemyHp: 20,
  enemyContactDamage: 9,
  enemyGateDamage: 1.2,
  enemyContactCooldown: 0.8,
  enemyGateCooldown: 1.2,
  enemyAttackRange: 1.55,
  enemyTelegraph: 0.38,
  enemyBonk: 0.2,
  enemyRecover: 0.45,
  maxEnemies: 300,
  waveCountdown: 3,
  cameraDistance: 3.2,
  cameraHeight: 1.55,
  cameraLookHeight: 1.05,
  mouseSensitivity: 0.0022,

  // Light = 3-hit combo: left slash, right slash, small spin
  lightDamage: 18,
  combo3Damage: 28,
  comboWindow: 0.6,
  comboStepDur: [0.3, 0.3, 0.42],
  lightRange: 3.2,
  lightCooldown: 0.08, // per-press gate; combo window is the real limiter

  heavyDamage: 42,
  heavyRange: 3.4,
  heavyCooldown: 0.48,
  heavyDur: 0.36,

  spinDamage: 14, // per revolution
  spinRevolutions: 3,
  spinRange: 3.4,
  spinCooldown: 2.6,
  spinDur: 1.15,

  slamDamage: 55,
  slamRange: 4.2,
  slamCooldown: 3.2,
  slamWindup: 0.42,
  slamSlam: 0.18,
  slamRecover: 0.22,

  dodgeCooldown: 0.85,
  dodgeDuration: 0.28,
  dodgeSpeedMul: 2.6,
  iFrameDuration: 0.35,
  jumpVelocity: 7.2,
  gravity: 22,
  scorePerKill: 12,
  scorePerSecondNear: 6,
};

export function waveEnemyCount(wave) {
  // Wave 1 starts at 12 (matching the live demo), then ramps.
  return Math.min(TUNING.maxEnemies, 8 + wave * 4);
}

export function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
}
