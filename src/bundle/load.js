import { BUNDLE_PRESETS, DEFAULT_PRESET_ID } from './catalog.js';

import { mergeThingCatalog } from '../studio/starterGear.js';

function deepMerge(base, overlay) {
  if (overlay === null || overlay === undefined) return base;
  if (Array.isArray(overlay)) return overlay.slice();
  if (typeof overlay !== 'object') return overlay;
  const out = { ...base };
  for (const key of Object.keys(overlay)) {
    const bv = base?.[key];
    const ov = overlay[key];
    if (ov !== null && typeof ov === 'object' && !Array.isArray(ov) && typeof bv === 'object' && bv && !Array.isArray(bv)) {
      out[key] = deepMerge(bv, ov);
    } else {
      out[key] = ov;
    }
  }
  return out;
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function resolveWorld(world, arenaRadius) {
  const R = arenaRadius ?? world.arenaRadius ?? 28;
  return {
    arenaRadius: R,
    playerSpawn: world.playerSpawn ?? { x: 0, z: -4 },
    gate: {
      x: world.gate?.x ?? 0,
      z: world.gate?.z ?? -R + 4.5,
      size: world.gate?.size ?? 2.4,
    },
    portal: {
      x: world.portal?.x ?? 0,
      z: world.portal?.z ?? R - 3.5,
    },
    obstacles: (world.obstacles ?? []).map((o) => ({
      id: o.id,
      kind: o.kind ?? 'berm',
      x: o.x,
      z: o.z,
      radius: o.radius,
      visualRadius: o.visualRadius ?? o.radius + 0.8,
    })),
    environment: {
      sky: world.environment?.sky ?? '#a9c4d8',
      ground: world.environment?.ground ?? '#4f8a3c',
      fogNear: world.environment?.fogNear ?? 42,
      fogFar: world.environment?.fogFar ?? 70,
    },
    zones: (world.zones ?? []).map((z) => ({
      id: z.id,
      domain: z.domain,
      label: z.label ?? String(z.domain ?? 'zone').toUpperCase(),
      x: z.x ?? 0,
      z: z.z ?? 0,
      width: z.width ?? 12,
      depth: z.depth ?? 12,
      color: z.color,
    })),
  };
}

export function loadPreset(presetId = DEFAULT_PRESET_ID) {
  const overlay = BUNDLE_PRESETS[presetId];
  if (!overlay) throw new Error(`Unknown preset: ${presetId}`);
  return loadBundle(overlay, DEFAULT_PRESET_ID);
}

export function loadBundle(partial, basePresetId = DEFAULT_PRESET_ID) {
  const base = structuredClone(BUNDLE_PRESETS[basePresetId] ?? BUNDLE_PRESETS[DEFAULT_PRESET_ID]);
  const merged = deepMerge(base, partial);
  if (merged.schemaVersion !== 1) {
    throw new Error(`Unsupported schemaVersion: ${merged.schemaVersion}`);
  }
  return validateBundle(merged);
}

export function validateBundle(bundle) {
  const b = structuredClone(bundle);
  b.world = resolveWorld(b.world ?? {}, b.world?.arenaRadius);

  b.world.arenaRadius = clamp(b.world.arenaRadius, 12, 40);
  b.world.gate.size = clamp(b.world.gate.size, 1, 6);

  for (const obs of b.world.obstacles) {
    obs.radius = clamp(obs.radius, 0.5, 18);
    obs.visualRadius = clamp(obs.visualRadius ?? obs.radius + 0.8, obs.radius, 20);
  }

  if (!b.foundation?.id) b.foundation = { ...b.foundation, id: 'custom', name: 'Custom' };
  if (!b.foundation?.name) b.foundation.name = b.foundation.id;

  // Authoring catalogs (studio) — merge starter gear so Play Arena always has weapons/hats
  b.things = b.things ?? {};
  b.things.catalog = mergeThingCatalog(Array.isArray(b.things.catalog) ? b.things.catalog : []);
  b.actors = b.actors ?? {};
  b.actors.catalog = Array.isArray(b.actors.catalog) ? b.actors.catalog : [];
  b.events = b.events ?? {};
  b.events.scripts = Array.isArray(b.events.scripts) ? b.events.scripts : [];

  return b;
}

export function bundleToJson(bundle) {
  return JSON.stringify(bundle, null, 2);
}
