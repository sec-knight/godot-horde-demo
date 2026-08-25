import { formatTime } from './config.js';

export function createHUD() {
  const els = {
    hud: document.getElementById('hud'),
    menu: document.getElementById('menu'),
    gameover: document.getElementById('gameover'),
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

  function showMenu() {
    els.menu.classList.remove('hidden');
    els.gameover.classList.add('hidden');
    els.hud.classList.add('hidden');
  }

  function showHud() {
    els.menu.classList.add('hidden');
    els.gameover.classList.add('hidden');
    els.hud.classList.remove('hidden');
  }

  function showGameOver({ reason, score, kills, waves, time, best }) {
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
    showGameOver,
    update,
    showCallout,
    hideCallout,
    setHintVisible,
    els,
  };
}
