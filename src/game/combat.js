import { TUNING } from './config.js';

export function createCombat(player, swarm) {
  let shake = 0;

  function applyHits(hits, damage) {
    let kills = 0;
    for (const h of hits) {
      if (swarm.damage(h.i, damage)) kills += 1;
    }
    if (hits.length) shake = Math.min(0.4, shake + 0.05 + hits.length * 0.012);
    return kills;
  }

  function resolveHit(spec) {
    if (spec.kind === 'radius') {
      const hits = swarm.queryRadius(player.position, spec.range);
      return applyHits(hits, spec.damage);
    }
    const fwd = player.facingDir();
    const hits = swarm.queryHits(player.position, fwd, spec.range, spec.arc ?? -0.05);
    return applyHits(hits, spec.damage);
  }

  function light() {
    player.tryLight();
  }

  function heavy() {
    player.tryHeavy();
    return 0;
  }

  function spin() {
    player.trySpin();
    return 0;
  }

  function slam() {
    player.trySlam();
    return 0;
  }

  function update(dt) {
    shake = Math.max(0, shake - dt * 1.8);
    let kills = 0;
    const pulses = player.consumeHits();
    for (const pulse of pulses) {
      kills += resolveHit(pulse);
      if (pulse.kind === 'radius' && pulse.damage >= TUNING.slamDamage * 0.9) {
        shake = Math.min(0.55, shake + 0.22);
      }
    }
    return kills;
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
