import { getBundle, setBundle } from '../runtime/bundleState.js';
import { validateBundle, bundleToJson } from '../bundle/load.js';
import {
  defaultPart,
  newThingDraft,
  newActorDraft,
  actorSlotsFromThingIds,
  thingIdsFromSlots,
} from './thingMesh.js';
import { thingsForSlotWithNone, thingsForSlot } from './starterGear.js';
import { defaultWeaponStats, normalizeWeaponStats, formatWeaponStats } from '../runtime/weaponStats.js';

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

function selectInput(options, value) {
  const sel = el('select');
  for (const opt of options) {
    const o = el('option');
    o.value = opt.value;
    o.textContent = opt.label;
    if (String(opt.value) === String(value ?? '')) o.selected = true;
    sel.append(o);
  }
  return sel;
}

/**
 * Domain-aware authoring dock for the prototyping level.
 * Things: assemble box/sphere/cylinder parts and save to catalog.
 * Actors: equip Things into head/hand slots (mirrors player loadout).
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
  let selectedActorId = null;
  let visible = false;

  function catalog() {
    return getBundle().things?.catalog ?? [];
  }

  function actorsList() {
    return getBundle().actors?.catalog ?? [];
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

  function patchActors(mutator) {
    const b = structuredClone(getBundle());
    b.actors = b.actors ?? {};
    b.actors.catalog = b.actors.catalog ?? [];
    mutator(b.actors.catalog);
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

  function selectedActor() {
    return actorsList().find((a) => a.id === selectedActorId) ?? actorsList()[0] ?? null;
  }

  function renderThings() {
    body.replaceChildren();
    body.append(
      el(
        'p',
        'admin-hint',
        'Author gear for player & actor slots. Hand items show up as weapons; head items as hats in Character Setup.',
      ),
    );

    const list = el('div', 'studio-list');
    for (const thing of catalog()) {
      const btn = el('button', 'studio-list-item', `${thing.name} · ${thing.slot}`);
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

    const kindIn = selectInput(
      [
        { value: 'equip', label: 'equip (wearable)' },
        { value: 'prop', label: 'prop (world)' },
      ],
      thing.kind,
    );
    kindIn.addEventListener('change', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (t) t.kind = kindIn.value;
      });
    });
    body.append(field('Kind', kindIn));

    const slotIn = selectInput(
      [
        { value: 'head', label: 'head (hat slot)' },
        { value: 'hand', label: 'hand (weapon slot)' },
        { value: 'world', label: 'world (prop)' },
      ],
      thing.slot,
    );
    slotIn.addEventListener('change', () => {
      patchCatalog((cat) => {
        const t = cat.find((x) => x.id === thing.id);
        if (t) {
          t.slot = slotIn.value;
          if (slotIn.value === 'head') t.style = 'hat';
          if (slotIn.value === 'hand' && !['sword', 'spear', 'hammer'].includes(t.style)) {
            t.style = 'sword';
          }
        }
      });
    });
    body.append(field('Equip slot', slotIn));

    if (thing.slot === 'hand') {
      const styleIn = selectInput(
        [
          { value: 'sword', label: 'sword' },
          { value: 'spear', label: 'spear' },
          { value: 'hammer', label: 'hammer' },
        ],
        thing.style ?? 'sword',
      );
      styleIn.addEventListener('change', () => {
        patchCatalog((cat) => {
          const t = cat.find((x) => x.id === thing.id);
          if (t) {
            t.style = styleIn.value;
            if (!t.stats) t.stats = defaultWeaponStats(styleIn.value);
          }
        });
      });
      body.append(field('Weapon style', styleIn));

      const stats = normalizeWeaponStats(thing.stats ?? defaultWeaponStats(thing.style ?? 'sword'));
      body.append(el('p', 'admin-hint', `Combat · ${formatWeaponStats(stats)}`));

      const bindStat = (key, input, step) => {
        input.step = String(step);
        input.addEventListener('change', () => {
          patchCatalog((cat) => {
            const t = cat.find((x) => x.id === thing.id);
            if (!t) return;
            t.stats = normalizeWeaponStats({ ...(t.stats ?? {}), [key]: Number(input.value) });
          });
        });
        return input;
      };

      body.append(field('Damage', bindStat('damage', numInput(stats.damage, 1), 1)));
      body.append(field('Reach', bindStat('reach', numInput(stats.reach, 0.1), 0.1)));
      body.append(field('Speed', bindStat('speed', numInput(stats.speed, 0.05), 0.05)));
      body.append(
        el(
          'p',
          'admin-hint',
          'Damage → hit power. Reach → attack range. Speed → swing rate (1.0 = baseline sword).',
        ),
      );
    }

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
      if (part.id === selectedPart()?.id) btn.classList.add('active');
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

    const bindPart = (key, input) => {
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
        'Equip Things into the same head / hand slots the player uses. Mannequin updates live on the Actors pad.',
      ),
    );

    const list = el('div', 'studio-list');
    for (const actor of actorsList()) {
      const btn = el('button', 'studio-list-item', `${actor.name} · ${actor.role}`);
      if (actor.id === (selectedActorId ?? actorsList()[0]?.id)) btn.classList.add('active');
      btn.type = 'button';
      btn.addEventListener('click', () => {
        selectedActorId = actor.id;
        render();
      });
      list.append(btn);
    }
    body.append(list);

    const addRow = el('div', 'studio-btn-row');
    const addActor = el('button', 'btn', '+ New actor');
    addActor.type = 'button';
    addActor.addEventListener('click', () => {
      const draft = newActorDraft('New Actor');
      patchActors((cat) => {
        cat.push(draft);
        selectedActorId = draft.id;
      });
    });
    addRow.append(addActor);
    body.append(addRow);

    const actor = selectedActor();
    if (!actor) return;

    const nameIn = el('input');
    nameIn.value = actor.name;
    nameIn.addEventListener('change', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (a) a.name = nameIn.value;
      });
    });
    body.append(field('Name', nameIn));

    const roleIn = selectInput(
      [
        { value: 'minion', label: 'minion' },
        { value: 'elite', label: 'elite' },
        { value: 'boss', label: 'boss' },
      ],
      actor.role ?? 'minion',
    );
    roleIn.addEventListener('change', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (a) a.role = roleIn.value;
      });
    });
    body.append(field('Role', roleIn));

    const hpIn = numInput(actor.hp ?? 30, 1);
    hpIn.addEventListener('change', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (a) a.hp = Number(hpIn.value);
      });
    });
    body.append(field('HP', hpIn));

    const color = el('input');
    color.type = 'color';
    color.value = (actor.color ?? '#6a7380').startsWith('#') ? actor.color : `#${actor.color}`;
    color.addEventListener('input', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (a) a.color = color.value;
      });
    });
    body.append(field('Body color', color));

    const slots = actorSlotsFromThingIds(actor, catalog());
    body.append(el('p', 'admin-hint', 'Equipment slots'));

    const hatOpts = thingsForSlotWithNone(catalog(), 'head').map((t) => ({
      value: t.id ?? '',
      label: t.name,
    }));
    const hatIn = selectInput(hatOpts, slots.head ?? '');
    hatIn.addEventListener('change', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (!a) return;
        const next = { ...actorSlotsFromThingIds(a, catalog()), head: hatIn.value || null };
        a.slots = next;
        a.thingIds = thingIdsFromSlots(next);
      });
    });
    body.append(field('Hat slot', hatIn));

    const handOpts = [
      { value: '', label: '— none —' },
      ...thingsForSlot(catalog(), 'hand').map((t) => ({ value: t.id, label: t.name })),
    ];
    const handIn = selectInput(handOpts, slots.hand ?? '');
    handIn.addEventListener('change', () => {
      patchActors((cat) => {
        const a = cat.find((x) => x.id === actor.id);
        if (!a) return;
        const next = { ...actorSlotsFromThingIds(a, catalog()), hand: handIn.value || null };
        a.slots = next;
        a.thingIds = thingIdsFromSlots(next);
      });
    });
    body.append(field('Weapon slot', handIn));

    if (actor.summons) {
      body.append(
        el(
          'p',
          'admin-hint',
          `Summons: ${actor.summons.actorId} · max ${actor.summons.maxAlive} · refill ${actor.summons.refill}`,
        ),
      );
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
        const detail = el(
          'code',
          '',
          `${JSON.stringify(step.when ?? step.while ?? {})} → ${JSON.stringify(step.then ?? {})}`,
        );
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
    flow.append(el('li', '', 'Equip an Actor (or the player via Character Setup) with those Things'));
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
