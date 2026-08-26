import * as THREE from 'three';

const GEO = {
  box: () => new THREE.BoxGeometry(1, 1, 1),
  sphere: () => new THREE.SphereGeometry(0.5, 16, 12),
  cylinder: () => new THREE.CylinderGeometry(0.5, 0.5, 1, 16),
};

export function createPartMesh(part) {
  const kind = part.primitive ?? 'box';
  const geo = (GEO[kind] ?? GEO.box)();
  const mat = new THREE.MeshLambertMaterial({
    color: new THREE.Color(part.color ?? '#cccccc'),
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = part.id ?? kind;
  mesh.position.set(part.x ?? 0, part.y ?? 0, part.z ?? 0);
  mesh.scale.set(part.sx ?? 1, part.sy ?? 1, part.sz ?? 1);
  mesh.userData.partId = part.id;
  return mesh;
}

/** Build a Thing assembly from catalog parts (programmer-art primitives). */
export function buildThingGroup(thing) {
  const root = new THREE.Group();
  root.name = thing.id ?? 'thing';
  root.userData.thingId = thing.id;
  for (const part of thing.parts ?? []) {
    root.add(createPartMesh(part));
  }
  return root;
}

export function defaultPart(primitive = 'box') {
  const base = {
    id: `${primitive}-${Math.random().toString(36).slice(2, 7)}`,
    primitive,
    x: 0,
    y: 0.5,
    z: 0,
    sx: 0.5,
    sy: 0.5,
    sz: 0.5,
    color: '#c9a46a',
  };
  if (primitive === 'sphere') {
    base.sx = base.sy = base.sz = 0.4;
    base.y = 0.4;
  }
  if (primitive === 'cylinder') {
    base.sx = base.sz = 0.35;
    base.sy = 0.6;
    base.y = 0.3;
  }
  return base;
}

export function newThingDraft(name = 'New Thing') {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || 'thing';
  return {
    id: `${slug}-${Math.random().toString(36).slice(2, 5)}`,
    name,
    kind: 'equip',
    slot: 'hand',
    style: 'sword',
    parts: [defaultPart('box')],
  };
}

export function newActorDraft(name = 'New Actor') {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || 'actor';
  return {
    id: `${slug}-${Math.random().toString(36).slice(2, 5)}`,
    name,
    role: 'minion',
    hp: 30,
    speed: 2.4,
    size: 1.1,
    color: '#6a7380',
    slots: { head: null, hand: null },
    thingIds: [],
  };
}

/** Normalize actor.thingIds ↔ slots for equip UI. */
export function actorSlotsFromThingIds(actor, catalog = []) {
  const slots = { head: null, hand: null, ...(actor.slots ?? {}) };
  for (const id of actor.thingIds ?? []) {
    const t = catalog.find((x) => x.id === id);
    if (!t) continue;
    if (t.slot === 'head') slots.head = id;
    if (t.slot === 'hand') slots.hand = id;
  }
  return slots;
}

export function thingIdsFromSlots(slots = {}) {
  return [slots.head, slots.hand].filter(Boolean);
}
