import { BUNDLE_PRESETS } from '../bundle/catalog.js';
import { loadPreset, loadBundle, bundleToJson, validateBundle } from '../bundle/load.js';
import { applyBundle, captureBundleFromRuntime } from '../bundle/apply.js';
import { getBundle, setBundle } from '../runtime/bundleState.js';

function isAdminEnabled() {
  if (import.meta.env.DEV) return true;
  if (location.pathname.includes('/admin/')) return true;
  return new URLSearchParams(location.search).has('admin');
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function field(label, input) {
  const wrap = el('label', 'admin-field');
  wrap.append(el('span', 'admin-label', label), input);
  return wrap;
}

function numInput(value, step = 1, min, max) {
  const input = el('input');
  input.type = 'number';
  input.step = String(step);
  input.value = String(value);
  if (min !== undefined) input.min = String(min);
  if (max !== undefined) input.max = String(max);
  return input;
}

function colorInput(hex) {
  const input = el('input');
  input.type = 'color';
  input.value = hex.startsWith('#') ? hex : `#${hex}`;
  return input;
}

export function createAdminStudio(ctx) {
  if (!isAdminEnabled()) return { enabled: false };

  let open = false;
  let activeTab = 'foundation';
  const root = el('div', 'admin-studio hidden');
  root.innerHTML = '';

  const header = el('div', 'admin-header');
  const title = el('strong', '', 'Horde Admin Studio');
  const toggleBtn = el('button', 'admin-icon-btn', '×');
  header.append(title, toggleBtn);

  const tabs = el('div', 'admin-tabs');
  const tabNames = [
    ['foundation', 'Foundation'],
    ['world', 'World'],
    ['things', 'Things'],
    ['actors', 'Actors'],
    ['events', 'Events'],
  ];
  const tabButtons = {};
  for (const [id, label] of tabNames) {
    const btn = el('button', 'admin-tab', label);
    btn.type = 'button';
    btn.dataset.tab = id;
    tabButtons[id] = btn;
    tabs.append(btn);
  }

  const body = el('div', 'admin-body');
  const footer = el('div', 'admin-footer');
  const applyBtn = el('button', 'btn primary admin-apply', 'Apply to world');
  const exportBtn = el('button', 'btn admin-export', 'Export JSON');
  footer.append(applyBtn, exportBtn);

  root.append(header, tabs, body, footer);
  document.getElementById('app')?.append(root);

  function setTab(id) {
    activeTab = id;
    for (const [k, btn] of Object.entries(tabButtons)) {
      btn.classList.toggle('active', k === id);
    }
    renderBody();
  }

  function bindNum(input, onChange) {
    input.addEventListener('change', () => onChange(Number(input.value)));
  }

  function bindColor(input, onChange) {
    input.addEventListener('input', () => onChange(input.value));
  }

  function patch(path, value) {
    const b = structuredClone(getBundle());
    const keys = path.split('.');
    let cur = b;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (cur[k] === undefined) {
        cur[k] = /^\d+$/.test(keys[i + 1]) ? [] : {};
      }
      cur = cur[k];
    }
    cur[keys[keys.length - 1]] = value;
    setBundle(validateBundle(b));
  }

  function renderBody() {
    body.replaceChildren();
    const b = getBundle();

    if (activeTab === 'foundation') {
      const preset = el('select');
      for (const id of Object.keys(BUNDLE_PRESETS)) {
        const opt = el('option');
        opt.value = id;
        opt.textContent = id;
        if (id === b.foundation.id || b.foundation.parentId === id) opt.selected = true;
        preset.append(opt);
      }
      preset.addEventListener('change', () => {
        setBundle(loadPreset(preset.value));
        applyBundle(ctx, getBundle());
        ctx.onApply?.();
        renderBody();
      });
      body.append(field('Preset', preset));

      const idIn = el('input');
      idIn.value = b.foundation.id;
      idIn.addEventListener('change', () => patch('foundation.id', idIn.value));
      body.append(field('Level id', idIn));

      const nameIn = el('input');
      nameIn.value = b.foundation.name ?? '';
      nameIn.addEventListener('change', () => patch('foundation.name', nameIn.value));
      body.append(field('Name', nameIn));

      const importLab = el('label', 'admin-field');
      const importIn = el('input');
      importIn.type = 'file';
      importIn.accept = '.json,application/json';
      importIn.addEventListener('change', async () => {
        const file = importIn.files?.[0];
        if (!file) return;
        const text = await file.text();
        setBundle(loadBundle(JSON.parse(text)));
        renderBody();
      });
      importLab.append(el('span', 'admin-label', 'Import bundle'), importIn);
      body.append(importLab);
    }

    if (activeTab === 'world') {
      const w = b.world;
      const arenaIn = numInput(w.arenaRadius, 1, 12, 40);
      bindNum(arenaIn, (v) => patch('world.arenaRadius', v));
      body.append(field('Arena radius', arenaIn));

      const gx = numInput(w.gate.x, 0.5);
      const gz = numInput(w.gate.z, 0.5);
      bindNum(gx, (v) => patch('world.gate.x', v));
      bindNum(gz, (v) => patch('world.gate.z', v));
      body.append(field('Gate X', gx), field('Gate Z', gz));

      const px = numInput(w.portal.x, 0.5);
      const pz = numInput(w.portal.z, 0.5);
      bindNum(px, (v) => patch('world.portal.x', v));
      bindNum(pz, (v) => patch('world.portal.z', v));
      body.append(field('Portal X', px), field('Portal Z', pz));

      const obs = w.obstacles?.[0];
      if (obs) {
        const ox = numInput(obs.x, 0.5);
        const oz = numInput(obs.z, 0.5);
        const or = numInput(obs.radius, 0.1, 0.5, 18);
        bindNum(ox, (v) => patch('world.obstacles.0.x', v));
        bindNum(oz, (v) => patch('world.obstacles.0.z', v));
        bindNum(or, (v) => patch('world.obstacles.0.radius', v));
        body.append(el('p', 'admin-hint', 'West berm obstacle'));
        body.append(field('Berm X', ox), field('Berm Z', oz), field('Berm radius', or));
      }

      const env = w.environment ?? {};
      const sky = colorInput(env.sky ?? '#a9c4d8');
      const ground = colorInput(env.ground ?? '#4f8a3c');
      bindColor(sky, (v) => patch('world.environment.sky', v));
      bindColor(ground, (v) => patch('world.environment.ground', v));
      body.append(field('Sky', sky), field('Ground', ground));
    }

    if (activeTab === 'things') {
      const t = b.things ?? {};
      const add = (label, path, val, step = 1) => {
        const input = numInput(val, step);
        bindNum(input, (v) => patch(path, v));
        body.append(field(label, input));
      };
      add('Player HP', 'things.player.hp', t.player?.hp ?? 100);
      add('Gate HP', 'things.gate.hp', t.gate?.hp ?? 500);
      add('Enemy HP', 'things.enemy.hp', t.enemy?.hp ?? 20);
      add('Enemy speed', 'things.enemy.speed', t.enemy?.speed ?? 2.6, 0.1);
      add('Light damage', 'things.weapons.light.damage', t.weapons?.light?.damage ?? 18);
      add('Heavy damage', 'things.weapons.heavy.damage', t.weapons?.heavy?.damage ?? 42);
    }

    if (activeTab === 'actors') {
      const a = b.actors ?? {};
      const add = (label, path, val, step = 1) => {
        const input = numInput(val, step);
        bindNum(input, (v) => patch(path, v));
        body.append(field(label, input));
      };
      add('Max enemies', 'actors.horde.maxEnemies', a.horde?.maxEnemies ?? 300, 1);
      add('Corpse lifetime', 'actors.corpse.lifetime', a.corpse?.lifetime ?? 2.8, 0.1);
      add('Camera distance', 'actors.camera.distance', a.camera?.distance ?? 3.2, 0.1);
      add('Player speed', 'things.player.speed', b.things?.player?.speed ?? 8.5, 0.1);
    }

    if (activeTab === 'events') {
      const e = b.events ?? {};
      const add = (label, path, val, step = 1) => {
        const input = numInput(val, step);
        bindNum(input, (v) => patch(path, v));
        body.append(field(label, input));
      };
      add('Wave countdown', 'events.waveCountdown', e.waveCountdown ?? 3, 0.5);
      add('Between-wave pause', 'events.betweenWavePause', e.betweenWavePause ?? 1.4, 0.1);
      add('Wave base', 'events.waveCount.base', e.waveCount?.base ?? 4);
      add('Wave quadratic', 'events.waveCount.quadratic', e.waveCount?.quadratic ?? 3.2, 0.1);
      add('Wave linear', 'events.waveCount.linear', e.waveCount?.linear ?? 5, 0.1);
      add('Wave cap', 'events.waveCount.cap', e.waveCount?.cap ?? 300);
      add('Score per kill', 'events.scoring.perKill', e.scoring?.perKill ?? 12);

      const spawnBtn = el('button', 'btn', 'Spawn test wave (24)');
      spawnBtn.type = 'button';
      spawnBtn.addEventListener('click', () => ctx.waves.spawnTestWave(24));
      const clearBtn = el('button', 'btn', 'Clear horde');
      clearBtn.type = 'button';
      clearBtn.addEventListener('click', () => ctx.waves.clearHorde());
      body.append(spawnBtn, clearBtn);
    }
  }

  function setOpen(v) {
    open = v;
    root.classList.toggle('hidden', !open);
    if (open) {
      document.exitPointerLock?.();
      renderBody();
    }
  }

  for (const btn of Object.values(tabButtons)) {
    btn.addEventListener('click', () => setTab(btn.dataset.tab));
  }
  toggleBtn.addEventListener('click', () => setOpen(false));
  applyBtn.addEventListener('click', () => {
    applyBundle(ctx, getBundle());
    ctx.onApply?.();
  });
  exportBtn.addEventListener('click', () => {
    const json = bundleToJson(captureBundleFromRuntime(ctx));
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${getBundle().foundation.id}.bundle.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Backquote' && !e.target.closest('input, textarea, select')) {
      e.preventDefault();
      setOpen(!open);
    }
  });

  setTab('foundation');

  return {
    enabled: true,
    open: () => setOpen(true),
    close: () => setOpen(false),
  };
}
