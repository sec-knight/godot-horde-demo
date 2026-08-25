export function waveCountFromBundle(wave, waveCountCfg, maxEnemies) {
  const cfg = waveCountCfg ?? { kind: 'quadratic', base: 4, quadratic: 3.2, linear: 5, cap: 300 };
  const cap = cfg.cap ?? maxEnemies ?? 300;

  if (cfg.kind === 'fixed') return Math.min(cap, Math.floor(cfg.count ?? 12));
  if (cfg.kind === 'linear') {
    return Math.min(cap, Math.floor((cfg.base ?? 0) + wave * (cfg.linear ?? 4)));
  }
  if (cfg.kind === 'table') {
    const counts = cfg.counts ?? [12];
    const idx = Math.min(Math.max(0, wave - 1), counts.length - 1);
    return Math.min(cap, Math.floor(counts[idx]));
  }
  // quadratic (default)
  const count = (cfg.base ?? 0) + wave * wave * (cfg.quadratic ?? 3.2) + wave * (cfg.linear ?? 5);
  return Math.min(cap, Math.floor(count));
}
