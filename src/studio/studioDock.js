import { getBundle, setBundle } from '../runtime/bundleState.js';
import { validateBundle, bundleToJson } from '../bundle/load.js';
import { defaultPart, newThingDraft } from './thingMesh.js';

const DRAFT_KEY = 'horde-studio-draft';

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

function numInput(value, step = 0.05) {
  const input = el('input');
  input.type = 'number';
  input.step = String(step);
  input.value = String(value ?? 0);
  return input;
}

/**
 * Domain-aware authoring dock for the prototyping level.
 * Things: assemble box/sphere/cylinder parts and save to catalog.
 * Actors / Events / Worlds: inspect + light edit of sample authored data.
 */
export function createStudioDock(ctx) {
  const root = el('aside', 'studio-dock hidden');
  const header = el('div', 'studio-dock-header');
  const title = el('strong', '', 'Domain Workshop');
  const domainLabel = el('span', 'studio-domain-pill', 'plaza');
  header.append(title, domainLabel);

  const body = el('div', 'studio-dock-body');
  const footer = el('div', 'studio-dock-footer');
  const saveBtn = el('button', 'btn primary', 'Save draft');
  const exportBtn = el('button', 'btn', 'Export bundle');
  const leaveBtn = el('button', 'btn', 'Leave studio');
  footer.append(saveBtn, exportBtn, leaveBtn);

  root.append(header, body, footer);
  document.getElementById('app')?.append(root);

  let selectedThingId = null;
  let selectedPartId = null;
  let visible = false;

  function catalog() {
    return getBundle().things?.catalog ?? [];
  }

  function patchCatalog(mutator) {
    const b = structuredClone(getBundle());
    b.things = b.things ?? {};
    b.things.catalog = b.things.catalog ?? [];
    mutator(b.things.catalog);
    setBundle(validateBundle(b));
    ctx.onCatalogChange?.(getBundle());
    render();
  }

  function selectedThing() {
    return catalog().find((t) => t.id === selectedThingId) ?? catalog()[0] ?? null;
  }

  function selectedPart(thing) {
    if (!thing) return null;
    return thing.parts?.find((p) => p.id === selectedPartId) ?? thing.parts?.[0] ?? null;
  }

  function renderThings() {
    body.replaceChildren();
    body.append(el('p', 'admin-hint', 'Assemble from box / sphere / cylinder. Save drafts locally, export JSON into a bundle.'));

    const list = el('div', 'studio-list');
    for (const thing of catalog()) {
      const btn = el('button', 'studio-list-item', thing.name);
      if (thing.id === (selectedThingId ?? catalog()[0]?.id)) btn.classList.add('active');
      btn.type = 'button';
      btn.addEventListener('click', () => {
        selectedThingId = thing.id;
        selectedPartId = thing.parts?.[0]?.id ?? null;
        render();
      });
      list.append(btn);
    }
    body.append(list);

    const row = el('div', 'studio-btn-row');
    const addThing = el('button', 'btn', '+ New thing');
    addThing.type = 'button';
    addThing.addEventListener('click', () => {
      const draft = newThingDraft('New Thing');
      patchCatalog((cat) => {
        cat.push(draft);
        selectedThingId = draft.id;
        selectedPartId = draft.parts[0].id;
      });
    });
    row.append(addThing);
    body.append(row);

    const thing = selectedThing();
    if (!thing) return;

    const nameIn = el('input');
    nameIn.value = thing.name;
    nameIn.addEventListener('change', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (t) t.name = nameIn.value;
      });
    });
    body.append(field('Name', nameIn));

    const kindIn = el('select');
    for (const k of ['equip', 'prop']) {
      const opt = el('option');
      opt.value = k;
      opt.textContent = k;
      if (k === thing.kind) opt.selected = true;
      kindIn.append(opt);
    }
    kindIn.addEventListener('change', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (t) t.kind = kindIn.value;
      });
    });
    body.append(field('Kind', kindIn));

    const slotIn = el('select');
    for (const s of ['head', 'hand', 'world']) {
      const opt = el('option');
      opt.value = s;
      opt.textContent = s;
      if (s === thing.slot) opt.selected = true;
      slotIn.append(opt);
    }
    slotIn.addEventListener('change', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (t) t.slot = slotIn.value;
      });
    });
    body.append(field('Slot', slotIn));

    body.append(el('p', 'admin-hint', 'Parts'));
    const partRow = el('div', 'studio-btn-row');
    for (const prim of ['box', 'sphere', 'cylinder']) {
      const btn = el('button', 'btn', `+ ${prim}`);
      btn.type = 'button';
      btn.addEventListener('click', () => {
        const part = defaultPart(prim);
        patchCatalog((cat) => {
          const t = cat.find((x) => x.id === thing.id);
          if (!t) return;
          t.parts = t.parts ?? [];
          t.parts.push(part);
          selectedPartId = part.id;
        });
      });
      partRow.append(btn);
    }
    body.append(partRow);

    const partList = el('div', 'studio-list');
    for (const part of thing.parts ?? []) {
      const btn = el('button', 'studio-list-item', `${part.primitive} · ${part.id}`);
      if (part.id === (selectedPart()?.id)) btn.classList.add('active');
      btn.type = 'button';
      btn.addEventListener('click', () => {
        selectedPartId = part.id;
        render();
      });
      partList.append(btn);
    }
    body.append(partList);

    const part = selectedPart(thing);
    if (!part) return;

    const bindPart = (key, input, step = 0.05) => {
      input.addEventListener('change', () => {
        const v = key === 'color' ? input.value : Number(input.value);
        patchCatalog((cat) => {
          const t = cat.find((x) => x.id === thing.id);
          const p = t?.parts?.find((x) => x.id === part.id);
          if (p) p[key] = v;
        });
      });
      return input;
    };

    body.append(el('p', 'admin-hint', `Gizmo · ${part.id}`));
    body.append(field('X', bindPart('x', numInput(part.x))));
    body.append(field('Y', bindPart('y', numInput(part.y))));
    body.append(field('Z', bindPart('z', numInput(part.z))));
    body.append(field('Scale X', bindPart('sx', numInput(part.sx))));
    body.append(field('Scale Y', bindPart('sy', numInput(part.sy))));
    body.append(field('Scale Z', bindPart('sz', numInput(part.sz))));

    const color = el('input');
    color.type = 'color';
    color.value = (part.color ?? '#cccccc').startsWith('#') ? part.color : `#${part.color}`;
    bindPart('color', color);
    body.append(field('Color', color));

    const nudge = el('div', 'studio-btn-row');
    const axes = [
      ['−X', 'x', -0.1],
      ['+X', 'x', 0.1],
      ['−Y', 'y', -0.1],
      ['+Y', 'y', 0.1],
      ['−Z', 'z', -0.1],
      ['+Z', 'z', 0.1],
    ];
    for (const [label, key, delta] of axes) {
      const b = el('button', 'btn studio-nudge', label);
      b.type = 'button';
      b.addEventListener('click', () => {
        patchCatalog((cat) => {
          const t = cat.find((x) => x.id === thing.id);
          const p = t?.parts?.find((x) => x.id === part.id);
          if (p) p[key] = Number((p[key] + delta).toFixed(3));
        });
      });
      nudge.append(b);
    }
    body.append(nudge);

    const del = el('button', 'btn', 'Delete part');
    del.type = 'button';
    del.addEventListener('click', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (!t) return;
        t.parts = (t.parts ?? []).filter((p) => p.id !== part.id);
        selectedPartId = t.parts[0]?.id ?? null;
      });
    });
    body.append(del);
  }

  function renderActors() {
    body.replaceChildren();
    body.append(
      el(
        'p',
        'admin-hint',
        'Actors wear Things you authored. Example: Enemy Captain equips hat + sword and refills up to 100 undead soldiers.',
      ),
    );
    const actors = getBundle().actors?.catalog ?? [];
    for (const actor of actors) {
      const card = el('div', 'studio-card');
      card.append(el('strong', '', actor.name));
      card.append(
        el(
          'p',
          '',
          `role ${actor.role} · hp ${actor.hp} · things: ${(actor.thingIds ?? []).join(', ') || '—'}`,
        ),
      );
      if (actor.summons) {
        card.append(
          el(
            'p',
            'admin-hint',
            `summons ${actor.summons.actorId} · maxAlive ${actor.summons.maxAlive} · refill ${actor.summons.refill}`,
          ),
        );
      }
      body.append(card);
    }
  }

  function renderEvents() {
    body.replaceChildren();
    body.append(
      el(
        'p',
        'admin-hint',
        'Event scripts chain world triggers. Sample: near chest → spawn captain → summon loop while alive → unlock chest on death.',
      ),
    );
    const scripts = getBundle().events?.scripts ?? [];
    for (const script of scripts) {
      const card = el('div', 'studio-card');
      card.append(el('strong', '', script.name ?? script.id));
      if (script.description) card.append(el('p', '', script.description));
      const ol = el('ol', 'studio-steps');
      for (const step of script.steps ?? []) {
        const li = el('li', '', step.id);
        const detail = el('code', '', JSON.stringify(step.when ?? step.while ?? {}) + ' → ' + JSON.stringify(step.then ?? {}));
        li.append(el('br'), detail);
        ol.append(li);
      }
      card.append(ol);
      body.append(card);
    }
  }

  function renderWorlds() {
    body.replaceChildren();
    body.append(
      el(
        'p',
        'admin-hint',
        'Worlds pad reviews layout presets. Play Arena still uses combat bundles; this pad is for comparing authored worlds.',
      ),
    );
    const zones = getBundle().world?.zones ?? [];
    for (const z of zones) {
      const card = el('div', 'studio-card');
      card.append(el('strong', '', `${z.label} (${z.domain})`));
      card.append(el('p', '', `pad at (${z.x}, ${z.z}) · ${z.width}×${z.depth}`));
      body.append(card);
    }
    const card = el('div', 'studio-card');
    card.append(el('strong', '', 'Active foundation'));
    card.append(el('p', '', `${getBundle().foundation.name} · id ${getBundle().foundation.id}`));
    body.append(card);
  }

  function renderPlaza() {
    body.replaceChildren();
    body.append(
      el(
        'p',
        'admin-hint',
        'Walk onto a domain pad. Things = craft props & gear. Actors = assemble enemies from things. Events = chain triggers. Worlds = review layouts.',
      ),
    );
    const flow = el('ol', 'studio-steps');
    flow.append(el('li', '', 'Author a hat / sword on the Things pad'));
    flow.append(el('li', '', 'Build an Enemy Captain on Actors that equips them'));
    flow.append(el('li', '', 'Plan the chest → captain → undead refill → loot chain on Events'));
    flow.append(el('li', '', 'Review the workshop layout on Worlds'));
    body.append(flow);
  }

  function render() {
    const domain = ctx.getActiveDomain?.() ?? null;
    domainLabel.textContent = domain ?? 'plaza';
    domainLabel.dataset.domain = domain ?? 'plaza';
    if (domain === 'things') renderThings();
    else if (domain === 'actors') renderActors();
    else if (domain === 'events') renderEvents();
    else if (domain === 'world') renderWorlds();
    else renderPlaza();
  }

  saveBtn.addEventListener('click', () => {
    localStorage.setItem(DRAFT_KEY, bundleToJson(getBundle()));
    saveBtn.textContent = 'Saved ✓';
    setTimeout(() => {
      saveBtn.textContent = 'Save draft';
    }, 1200);
  });

  exportBtn.addEventListener('click', () => {
    const json = bundleToJson(getBundle());
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    a.download = `${getBundle().foundation.id}.bundle.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  leaveBtn.addEventListener('click', () => ctx.onLeave?.());

  return {
    root,
    render,
    setVisible(v) {
      visible = v;
      root.classList.toggle('hidden', !v);
      if (v) render();
    },
    isVisible: () => visible,
    loadDraft() {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    },
  };
}

export { DRAFT_KEY };
