# Horde Defense — Bundle Schema v1

**Purpose:** Single portable document that describes a playable arena level.  
**Authority:** This file + `bundles/*.bundle.json` examples.  
**Rule:** Authoring output is runtime input — the game loads this JSON directly; there is no parallel editor model.

Bundles are organized by the same five domains used in Spheres of Influence (adapted for this arcade scope):

| Domain | Owns |
|--------|------|
| **foundation** | Identity, schema version, metadata |
| **world** | Spatial layout — arena, gate, portal, obstacles |
| **things** | Stat profiles — weapons, gate, enemy cube |
| **actors** | Simulation behavior — movement, corpses, camera, horde caps |
| **events** | Run orchestration — waves, pacing, scoring |

---

## File format

- **Extension:** `.bundle.json`
- **Encoding:** UTF-8
- **Root:** single object with required `schemaVersion` and `foundation`
- **Partial bundles:** allowed — omitted sections fall back to `bundles/default.bundle.json`

---

## Root shape

```jsonc
{
  "schemaVersion": 1,
  "foundation": { /* required */ },
  "world": { /* optional */ },
  "things": { /* optional */ },
  "actors": { /* optional */ },
  "events": { /* optional */ }
}
```

---

## foundation

```jsonc
{
  "id": "pressure-test",           // stable slug, [a-z0-9-]
  "name": "Pressure Test",
  "author": "mark",
  "description": "Quadratic horde ramp, west berm.",
  "tags": ["stress", "berm"],
  "createdAt": "2026-08-25T00:00:00Z",  // optional ISO-8601
  "parentId": "default"             // optional; preset this derives from
}
```

### Validation

| Field | Rule |
|-------|------|
| `id` | Required. Regex `^[a-z][a-z0-9-]{0,63}$` |
| `name` | Required. 1–80 chars |
| `author` | Optional string |
| `tags` | Optional string array |

---

## world

Everything placed in the XZ arena plane. Y is implicit (ground at 0).

```jsonc
{
  "arenaRadius": 28,
  "playerSpawn": { "x": 0, "z": -4 },
  "gate": {
    "x": 0,
    "z": -23.5,
    "size": 2.4
  },
  "portal": {
    "x": 0,
    "z": 24.5
  },
  "obstacles": [
    {
      "id": "westBerm",
      "kind": "berm",              // berm | pillar (v1: berm only)
      "x": -18,
      "z": -6,
      "radius": 9.2,
      "visualRadius": 10           // optional; mesh = radius + padding
    }
  ],
  "environment": {
    "sky": "#a9c4d8",
    "ground": "#4f8a3c",
    "fogNear": 42,
    "fogFar": 70
  }
}
```

### Defaults (when omitted)

Derived from arena radius `R`:

| Field | Default |
|-------|---------|
| `gate.z` | `-R + 4.5` |
| `portal.z` | `R - 3.5` |
| `gate.x`, `portal.x` | `0` |
| `playerSpawn` | `{ x: 0, z: -4 }` |

### Validation

| Field | Rule |
|-------|------|
| `arenaRadius` | 12–40 |
| `gate.size` | 1.0–6.0 |
| `obstacles[].id` | Unique within bundle |
| `obstacles[].radius` | 0.5–18 |
| Positions | Must lie inside arena: `hypot(x,z) < arenaRadius - 2` |
| Gate vs portal | `gate.z < playerSpawn.z < portal.z` recommended |

### Runtime apply

1. Resize ground ring + clamp bounds
2. Reposition gate / portal groups
3. Replace obstacle list + rebuild berm meshes
4. Re-clamp player and horde against new layout

---

## things

Numeric **content profiles** — not behavior algorithms.

```jsonc
{
  "player": {
    "hp": 100,
    "radius": 0.55,
    "speed": 8.5
  },
  "gate": {
    "hp": 500
  },
  "enemy": {
    "hp": 20,
    "size": 1.1,
    "speed": 2.6,
    "contactDamage": 9,
    "gateDamage": 1.2,
    "knockback": 2.8
  },
  "weapons": {
    "light": {
      "damage": 18,
      "range": 3.2,
      "cooldown": 0.08
    },
    "comboFinisher": {
      "damage": 28
    },
    "heavy": {
      "damage": 42,
      "range": 3.4,
      "cooldown": 0.48
    },
    "push": {
      "damage": 26,
      "range": 3.0,
      "cooldown": 0.35
    },
    "spin": {
      "damage": 14,
      "range": 3.4,
      "revolutions": 3,
      "cooldown": 2.6
    },
    "slam": {
      "damage": 55,
      "range": 4.2,
      "cooldown": 3.2
    }
  },
  "shield": {
    "blockDamageMul": 0.28
  }
}
```

All fields optional — merge over engine defaults in `config.js`.

### Validation (selected)

| Field | Min | Max |
|-------|-----|-----|
| `player.hp` | 1 | 9999 |
| `enemy.hp` | 1 | 9999 |
| `weapons.*.damage` | 0 | 999 |
| `weapons.*.range` | 0.5 | 12 |
| `weapons.*.cooldown` | 0 | 30 |

---

## actors

Simulation parameters for entities that move and act.

```jsonc
{
  "player": {
    "knockback": 4.5,
    "hitStop": 0.06,
    "dodgeCooldown": 0.85,
    "dodgeDuration": 0.28,
    "iFrameDuration": 0.35,
    "jumpVelocity": 7.2,
    "gravity": 22,
    "mouseSensitivity": 0.0022
  },
  "camera": {
    "distance": 3.2,
    "height": 1.55,
    "lookHeight": 1.05
  },
  "horde": {
    "maxEnemies": 300,
    "contactCooldown": 0.8,
    "gateContactCooldown": 1.2,
    "attackRange": 1.55,
    "telegraph": 0.48,
    "bonk": 0.22,
    "recover": 0.4
  },
  "corpse": {
    "lifetime": 2.8,
    "bounce": 0.42
  }
}
```

---

## events

Orchestration — when waves happen and how the run scores.

```jsonc
{
  "waveCountdown": 3,
  "betweenWavePause": 1.4,
  "waveCount": {
    "kind": "quadratic",
    "base": 4,
    "quadratic": 3.2,
    "linear": 5,
    "cap": 300
  },
  "scoring": {
    "perKill": 12,
    "perSecondNear": 6,
    "waveClearBonus": 40
  },
  "spawn": {
    "ringBaseRadius": 2.2,
    "ringSpacing": 1.7,
    "ringGrowth": 4
  }
}
```

### waveCount kinds (v1)

| kind | Formula |
|------|---------|
| `quadratic` | `min(cap, floor(base + wave² × quadratic + wave × linear))` |
| `linear` | `min(cap, floor(base + wave × linear))` |
| `fixed` | `{ "kind": "fixed", "count": 24 }` every wave |
| `table` | `{ "kind": "table", "counts": [12, 26, 47, 80] }` — wave N uses `counts[N-1]` or last entry |

---

## Load contract

```
loadBundle(json):
  1. Parse + validate schemaVersion === 1
  2. Deep-merge onto bundles/default.bundle.json
  3. Validate merged result (clamp + warn)
  4. applyToRuntime(store):
       world  → arena + obstacles rebuild
       things → patch TUNING combat/gate/enemy fields
       actors → patch TUNING movement/horde/corpse/camera
       events → patch wave controller + scoring
  5. If mid-run: optional soft-reset (clear horde, reset gate HP)
```

### Merge rules

- Objects: deep merge
- Arrays (`obstacles`, `tags`): **replace** entirely when present in overlay bundle
- Unknown keys: ignored with console warning (forward compatible)

---

## Complexity test

Add a new top-level domain section only when the bundle needs a new class of truth.  
Add fields inside existing domains when the change is content or tuning.

| Change | Belongs in |
|--------|------------|
| Move gate 5m left | `world.gate.x` |
| Enemy HP 20 → 35 | `things.enemy.hp` |
| Corpse bounce tuning | `actors.corpse` |
| Sharper wave ramp | `events.waveCount` |
| New quest dialogue system | **Not v1** — new product surface |

---

## Planned consumers

| Consumer | Reads bundle via |
|----------|------------------|
| In-game Admin Studio | Live edit → export `.bundle.json` |
| Domain Workshop (studio preset) | Spatial pads + catalogs; Save draft / Export |
| Game boot | `?bundle=pressure-test` or localStorage active preset |
| Future dev studio repo | Read/write `bundles/*.bundle.json` in git |
| Future UGC | Upload bundle; server validates schema |

---

## Studio authoring (additive v1 fields)

Used by the **Domain Workshop** prototyping level (`bundles/studio.bundle.json`). Combat arenas may omit these.

### `world.zones[]`

Floor pads that map to domains:

```jsonc
{
  "id": "pad-things",
  "domain": "things",       // things | actors | events | world
  "label": "THINGS",
  "x": -14, "z": -12,
  "width": 16, "depth": 14,
  "color": "#c9a46a"
}
```

### `things.catalog[]`

Programmer-art assemblies from box / sphere / cylinder parts:

```jsonc
{
  "id": "sword-captain",
  "name": "Captain Sword",
  "kind": "equip",          // equip | prop
  "slot": "hand",           // head | hand | world
  "parts": [
    {
      "id": "blade",
      "primitive": "box",   // box | sphere | cylinder
      "x": 0, "y": 0.55, "z": 0,
      "sx": 0.08, "sy": 0.9, "sz": 0.16,
      "color": "#d8dde8"
    }
  ]
}
```

### `actors.catalog[]`

Actors reference Things by id and may declare summons:

```jsonc
{
  "id": "enemy-captain",
  "name": "Enemy Captain",
  "role": "elite",
  "hp": 140,
  "thingIds": ["hat-captain", "sword-captain"],
  "summons": { "actorId": "undead-soldier", "maxAlive": 100, "refill": true }
}
```

### `events.scripts[]`

Authored trigger chains (data-first; workshop displays them; runtime playthrough is iterative):

```jsonc
{
  "id": "chest-captain-gauntlet",
  "name": "Chest Captain Gauntlet",
  "steps": [
    { "when": { "nearThing": "chest-oak", "radius": 4 }, "then": { "spawnActor": "enemy-captain" } },
    { "while": { "actorAlive": "enemy-captain" }, "then": { "summonLoop": { "actorId": "undead-soldier", "maxAlive": 100, "refill": true } } },
    { "when": { "actorDead": "enemy-captain" }, "then": { "unlockThing": "chest-oak" } }
  ]
}
```

**Authoring loop:** craft Things → compose Actors that wear them → plan Events that spawn/summon/unlock → review Worlds pads.

---

## Versioning

- `schemaVersion: 1` — initial domains + fields in this doc (+ studio catalogs/zones/scripts)
- Future v2 may add: rectangular obstacles, live event script runner, multi-portal, richer gizmos

Migrators: `migrateV1toV2(bundle)` before apply.

---

## Related files

| Path | Role |
|------|------|
| `bundles/default.bundle.json` | Canonical full default (matches shipped game) |
| `bundles/pressure-test.bundle.json` | Example stress preset |
| `bundles/studio.bundle.json` | Domain Workshop prototyping level |
| `src/game/config.js` | Engine defaults until RuntimeStore lands |
| `src/game/studioWorkshop.js` | Spatial pads + catalog previews |
| `src/studio/studioDock.js` | Authoring dock (Things gizmos, catalogs) |
