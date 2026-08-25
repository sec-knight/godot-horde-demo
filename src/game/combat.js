import { TUNING } from './config.js';

export function createCombat(player, swarm) {
  let shake = 0;

  function applyHits(hits, damage) {
    let kills = 0;
    for (const h of hits) {
      if (swarm.damage(h.i, damage)) kills += 1;
    }
    if (hits.length) shake = Math.min(0.35, shake + 0.06 + hits.length * 0.01);
    return kills;
  }

  function light() {
    if (!player.tryAttack('light')) return 0;
    const origin = player.hitOrigin();
    const fwd = player.facingDir();
    const hits = swarm.queryHits(origin, fwd, TUNING.lightRange, 0.2);
    return applyHits(hits, TUNING.lightDamage);
  }

  function heavy() {
    if (!player.tryAttack('heavy')) return 0;
    const origin = player.hitOrigin();
    const fwd = player.facingDir();
    const hits = swarm.queryHits(origin, fwd, TUNING.heavyRange, 0.05);
    // Heavy also shoves slightly via damage weight
    return applyHits(hits, TUNING.heavyDamage);
  }

  function spin() {
    if (!player.tryAttack('spin')) return 0;
    const hits = swarm.queryRadius(player.position, TUNING.spinRange);
    return applyHits(hits, TUNING.spinDamage);
  }

  function slam() {
    if (!player.tryAttack('slam')) return 0;
    const hits = swarm.queryRadius(player.position, TUNING.slamRange);
    shake = Math.min(0.5, shake + 0.18);
    return applyHits(hits, TUNING.slamDamage);
  }

  function update(dt) {
    shake = Math.max(0, shake - dt * 1.8);
  }

  return {
    light,
    heavy,
    spin,
    slam,
    update,
    get shake() {
      return shake;
    },
  };
}
