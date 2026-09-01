import { formatTime } from './config.js';

export function createHUD() {
  const els = {
    hud: document.getElementById('hud'),
    menu: document.getElementById('menu'),
    gameover: document.getElementById('gameover'),
    setup: document.getElementById('character-setup'),
    studio: document.getElementById('studio-hud'),
    studioDomain: document.getElementById('studio-domain'),
    gateText: document.getElementById('gate-text'),
    gateFill: document.getElementById('gate-fill'),
    hpText: document.getElementById('hp-text'),
    hpFill: document.getElementById('hp-fill'),
    score: document.getElementById('stat-score'),
    wave: document.getElementById('stat-wave'),
    kills: document.getElementById('stat-kills'),
    time: document.getElementById('stat-time'),
    alive: document.getElementById('stat-alive'),
    callout: document.getElementById('wave-callout'),
    waveTitle: document.getElementById('wave-title'),
    waveCount: document.getElementById('wave-count'),
    hint: document.getElementById('hint'),
    goTitle: document.getElementById('go-title'),
    goFlavor: document.getElementById('go-flavor'),
    goScore: document.getElementById('go-score'),
    goKills: document.getElementById('go-kills'),
    goWaves: document.getElementById('go-waves'),
    goTime: document.getElementById('go-time'),
    goBest: document.getElementById('go-best'),
  };

  function hideAllOverlays() {
    els.menu.classList.add('hidden');
    els.gameover.classList.add('hidden');
    els.hud.classList.add('hidden');
    els.studio?.classList.add('hidden');
    els.setup?.classList.add('hidden');
  }

  function showMenu() {
    hideAllOverlays();
    els.menu.classList.remove('hidden');
  }

  function showHud() {
    hideAllOverlays();
    els.hud.classList.remove('hidden');
  }

  function showSetup() {
    hideAllOverlays();
    els.setup?.classList.remove('hidden');
  }

  function showStudio() {
    hideAllOverlays();
    els.studio?.classList.remove('hidden');
  }

  function setStudioDomain(domain) {
    if (!els.studioDomain) return;
    const labels = {
      things: 'Things · craft props & gear',
      actors: 'Actors · assemble enemies',
      events: 'Events · chain triggers',
      world: 'Worlds · review layouts',
    };
    els.studioDomain.textContent = domain
      ? labels[domain] ?? domain
      : 'Plaza · walk onto a domain pad';
    els.studioDomain.dataset.domain = domain ?? 'plaza';
  }

  function showGameOver({ reason, score, kills, waves, time, best }) {
    hideAllOverlays();
    els.gameover.classList.remove('hidden');
    els.goTitle.textContent = 'Game Over';
    els.goFlavor.textContent =
      reason === 'gate' ? 'The gate was breached.' : 'You fell in battle.';
    els.goScore.textContent = String(Math.floor(score));
    els.goKills.textContent = String(kills);
    els.goWaves.textContent = String(waves);
    els.goTime.textContent = `${Math.floor(time)}s`;
    els.goBest.textContent = String(Math.floor(best));
  }

  function update(stats) {
    const gatePct = Math.max(0, stats.gateHp / stats.gateMax);
    const hpPct = Math.max(0, stats.hp / stats.hpMax);
    els.gateText.textContent = `${Math.ceil(stats.gateHp)} / ${stats.gateMax}`;
    els.hpText.textContent = `${Math.ceil(stats.hp)} / ${stats.hpMax}`;
    els.gateFill.style.transform = `scaleX(${gatePct})`;
    els.hpFill.style.transform = `scaleX(${hpPct})`;
    els.score.textContent = String(Math.floor(stats.score));
    els.wave.textContent = String(stats.wave);
    els.kills.textContent = String(stats.kills);
    els.time.textContent = formatTime(stats.time);
    els.alive.textContent = String(stats.alive);
  }

  function showCallout(wave, value) {
    els.callout.classList.remove('hidden');
    els.waveTitle.textContent = `WAVE ${wave}`;
    els.waveCount.textContent = String(value);
  }

  function hideCallout() {
    els.callout.classList.add('hidden');
  }

  function setHintVisible(v) {
    els.hint?.classList.toggle('hidden', !v);
  }

  return {
    showMenu,
    showHud,
    showSetup,
    showStudio,
    showGameOver,
    update,
    showCallout,
    hideCallout,
    setHintVisible,
    setStudioDomain,
    els,
  };
}
