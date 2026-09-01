/** Shared starter gear — available in Play Arena and Domain Workshop. */

export const STARTER_THINGS = [
  {
    id: 'weapon-sword',
    name: 'Sword',
    kind: 'equip',
    slot: 'hand',
    style: 'sword',
    stats: { damage: 18, reach: 3.2, speed: 1.0 },
    parts: [
      {
        id: 'blade',
        primitive: 'box',
        x: 0,
        y: 0.55,
        z: 0,
        sx: 0.1,
        sy: 1.2,
        sz: 0.06,
        color: '#d8dde8',
      },
      {
        id: 'guard',
        primitive: 'box',
        x: 0,
        y: 0.05,
        z: 0,
        sx: 0.38,
        sy: 0.08,
        sz: 0.1,
        color: '#c9a46a',
      },
      {
        id: 'grip',
        primitive: 'cylinder',
        x: 0,
        y: -0.2,
        z: 0,
        sx: 0.07,
        sy: 0.32,
        sz: 0.07,
        color: '#4a3020',
      },
    ],
  },
  {
    id: 'weapon-spear',
    name: 'Spear',
    kind: 'equip',
    slot: 'hand',
    style: 'spear',
    stats: { damage: 14, reach: 4.4, speed: 1.05 },
    parts: [
      {
        id: 'shaft',
        primitive: 'cylinder',
        x: 0,
        y: 0.45,
        z: 0,
        sx: 0.06,
        sy: 1.6,
        sz: 0.06,
        color: '#6e4420',
      },
      {
        id: 'tip',
        primitive: 'box',
        x: 0,
        y: 1.35,
        z: 0,
        sx: 0.12,
        sy: 0.35,
        sz: 0.06,
        color: '#c0c8d4',
      },
      {
        id: 'butt',
        primitive: 'sphere',
        x: 0,
        y: -0.35,
        z: 0,
        sx: 0.1,
        sy: 0.1,
        sz: 0.1,
        color: '#3d3d3d',
      },
    ],
  },
  {
    id: 'weapon-hammer',
    name: 'Hammer',
    kind: 'equip',
    slot: 'hand',
    style: 'hammer',
    stats: { damage: 30, reach: 2.5, speed: 0.72 },
    parts: [
      {
        id: 'handle',
        primitive: 'cylinder',
        x: 0,
        y: 0.2,
        z: 0,
        sx: 0.08,
        sy: 0.9,
        sz: 0.08,
        color: '#5a3a22',
      },
      {
        id: 'head',
        primitive: 'box',
        x: 0,
        y: 0.75,
        z: 0,
        sx: 0.55,
        sy: 0.35,
        sz: 0.35,
        color: '#7a808c',
      },
      {
        id: 'pommel',
        primitive: 'sphere',
        x: 0,
        y: -0.28,
        z: 0,
        sx: 0.12,
        sy: 0.12,
        sz: 0.12,
        color: '#3d3d3d',
      },
    ],
  },
  {
    id: 'hat-cap',
    name: 'Soft Cap',
    kind: 'equip',
    slot: 'head',
    style: 'hat',
    parts: [
      {
        id: 'crown',
        primitive: 'sphere',
        x: 0,
        y: 0.12,
        z: 0,
        sx: 0.42,
        sy: 0.28,
        sz: 0.42,
        color: '#3a6ea5',
      },
      {
        id: 'brim',
        primitive: 'cylinder',
        x: 0,
        y: 0.02,
        z: 0.08,
        sx: 0.48,
        sy: 0.04,
        sz: 0.48,
        color: '#2a5078',
      },
    ],
  },
  {
    id: 'hat-bucket',
    name: 'Bucket Helm',
    kind: 'equip',
    slot: 'head',
    style: 'hat',
    parts: [
      {
        id: 'dome',
        primitive: 'cylinder',
        x: 0,
        y: 0.22,
        z: 0,
        sx: 0.48,
        sy: 0.4,
        sz: 0.48,
        color: '#8a909c',
      },
      {
        id: 'rim',
        primitive: 'cylinder',
        x: 0,
        y: 0.02,
        z: 0,
        sx: 0.55,
        sy: 0.06,
        sz: 0.55,
        color: '#6a707c',
      },
      {
        id: 'slot',
        primitive: 'box',
        x: 0,
        y: 0.18,
        z: 0.24,
        sx: 0.28,
        sy: 0.06,
        sz: 0.04,
        color: '#1a1a1a',
      },
    ],
  },
  {
    id: 'hat-none',
    name: 'No Hat',
    kind: 'equip',
    slot: 'head',
    style: 'hat',
    parts: [],
  },
];

export const PLAYER_COLOR_PRESETS = [
  { id: 'sky', name: 'Sky', hex: '#8fb4d4' },
  { id: 'moss', name: 'Moss', hex: '#6bbf7a' },
  { id: 'ember', name: 'Ember', hex: '#e08a2e' },
  { id: 'rose', name: 'Rose', hex: '#c53d4a' },
  { id: 'gold', name: 'Gold', hex: '#c9a46a' },
  { id: 'slate', name: 'Slate', hex: '#6a7380' },
  { id: 'violet', name: 'Violet', hex: '#7a6bb0' },
  { id: 'snow', name: 'Snow', hex: '#e8ecf2' },
];

export const EQUIP_SLOTS = [
  { id: 'head', label: 'Hat', thingSlot: 'head' },
  { id: 'hand', label: 'Weapon', thingSlot: 'hand' },
];

/** Merge starter gear with a bundle catalog (bundle entries win on same id). */
export function mergeThingCatalog(catalog = []) {
  const byId = new Map();
  for (const t of STARTER_THINGS) byId.set(t.id, structuredClone(t));
  for (const t of catalog) {
    if (!t?.id) continue;
    const prev = byId.get(t.id);
    const merged = prev ? { ...prev, ...t, parts: t.parts ?? prev.parts } : t;
    if (merged.slot === 'hand' && !merged.stats) {
      merged.stats = defaultWeaponStatsForStyle(merged.style);
    }
    byId.set(t.id, merged);
  }
  return [...byId.values()];
}

function defaultWeaponStatsForStyle(style) {
  if (style === 'spear') return { damage: 14, reach: 4.4, speed: 1.05 };
  if (style === 'hammer') return { damage: 30, reach: 2.5, speed: 0.72 };
  return { damage: 18, reach: 3.2, speed: 1.0 };
}

export function thingsForSlot(catalog, slot) {
  return (catalog ?? []).filter(
    (t) => t.kind === 'equip' && t.slot === slot && t.id !== 'hat-none',
  );
}

/** Include empty option for optional slots like head. */
export function thingsForSlotWithNone(catalog, slot) {
  const items = thingsForSlot(catalog, slot);
  if (slot === 'head') {
    return [{ id: null, name: 'No Hat', slot: 'head', parts: [] }, ...items];
  }
  return items;
}
