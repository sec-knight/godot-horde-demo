/** Ground-level circular obstacles (XZ). Matches visible arena berms. */
export const ARENA_OBSTACLES = [
  { x: -18, z: -6, radius: 9.2, label: 'westBerm' },
];

export function resolveObstacleCollisions(pos, entityRadius = 0.55) {
  for (const obs of ARENA_OBSTACLES) {
    const dx = pos.x - obs.x;
    const dz = pos.z - obs.z;
    const dist = Math.hypot(dx, dz);
    const minDist = obs.radius + entityRadius;
    if (dist >= minDist) continue;
    if (dist > 0.0001) {
      const s = minDist / dist;
      pos.x = obs.x + dx * s;
      pos.z = obs.z + dz * s;
    } else {
      pos.x = obs.x + minDist;
      pos.z = obs.z;
    }
  }
}

/** Blend movement direction to flow around obstacles (simple steering, not full pathing). */
export function steerAroundObstacles(x, z, dirX, dirZ, entityRadius = 0.55) {
  let ox = dirX;
  let oz = dirZ;
  for (const obs of ARENA_OBSTACLES) {
    const dx = x - obs.x;
    const dz = z - obs.z;
    const dist = Math.hypot(dx, dz);
    const influence = obs.radius + entityRadius + 4.5;
    if (dist >= influence || dist < 0.01) continue;
    const t = 1 - dist / influence;
    const push = t * t * 2.4;
    ox += (dx / dist) * push;
    oz += (dz / dist) * push;
  }
  const len = Math.hypot(ox, oz) || 1;
  return { dirX: ox / len, dirZ: oz / len };
}
