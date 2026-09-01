import { TUNING } from './config.js';

export function createCombat(player, swarm, audio) {
  let shake = 0;

  function applyHits(hits, damage) {
    let kills = 0;
    const px = player.position.x;
    const pz = player.position.z;
    for (const h of hits) {
      if (swarm.damage(h.i, damage, px, pz)) kills += 1;
    }
    if (hits.length) {
      shake = Math.min(0.4, shake + 0.05 + hits.length * 0.012);
      audio?.hit();
      player.state.hitStop = Math.max(player.state.hitStop, TUNING.hitStop);
    }
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
    if (player.tryLight()) audio?.slash();
  }

  function heavy() {
    if (player.tryHeavy()) audio?.slash();
  }

  function push() {
    if (player.tryPush()) audio?.push();
  }

  function spin() {
    if (player.trySpin()) audio?.spin();
  }

  function slam() {
    if (player.trySlam()) audio?.slam();
  }

  function update(dt) {
    shake = Math.max(0, shake - dt * 1.8);
    let kills = 0;
    const pulses = player.consumeHits();
    for (const pulse of pulses) {
      kills += resolveHit(pulse);
      if (pulse.kind === 'radius' && pulse.damage >= TUNING.slamDamage * 0.9) {
        shake = Math.min(0.55, shake + 0.22);
        audio?.slam();
      }
    }
    return kills;
  }

  return {
    light,
    heavy,
    push,
    spin,
    slam,
    update,
    get shake() {
      return shake;
    },
    addShake(n) {
      shake = Math.min(0.6, shake + n);
    },
  };
}
