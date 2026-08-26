import * as THREE from 'three';
import { buildThingGroup } from '../studio/thingMesh.js';

const ZONE_COLORS = {
  things: 0xc9a46a,
  actors: 0x5ba8d8,
  events: 0xe08a2e,
  world: 0x6bbf7a,
};

function makeLabelSprite(text, color = '#f2f4f8') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(10, 14, 22, 0.55)';
  ctx.fillRect(16, 24, 480, 80);
  ctx.font = 'bold 48px Segoe UI, Trebuchet MS, sans-serif';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 64);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(6, 1.5, 1);
  return sprite;
}

function disposeObject(obj) {
  obj.traverse((n) => {
    n.geometry?.dispose?.();
    if (n.material) {
      if (Array.isArray(n.material)) n.material.forEach((m) => m.dispose?.());
      else n.material.dispose?.();
    }
    if (n.material?.map) n.material.map.dispose?.();
  });
}

/**
 * Spatial workshop: four domain pads + previews for authored catalogs.
 * Lives as a sibling group under the scene (not inside arena group).
 */
export function createStudioWorkshop(scene) {
  const root = new THREE.Group();
  root.name = 'StudioWorkshop';
  root.visible = false;
  scene.add(root);

  const pads = new THREE.Group();
  pads.name = 'Pads';
  root.add(pads);

  const previews = new THREE.Group();
  previews.name = 'Previews';
  root.add(previews);

  let zones = [];
  let activeDomain = null;

  function clearGroup(g) {
    while (g.children.length) {
      const ch = g.children[0];
      disposeObject(ch);
      g.remove(ch);
    }
  }

  function rebuildPads(zoneList = []) {
    clearGroup(pads);
    zones = zoneList.slice();
    for (const z of zones) {
      const color = ZONE_COLORS[z.domain] ?? 0x888888;
      const pad = new THREE.Group();
      pad.name = z.id;
      pad.position.set(z.x, 0, z.z);

      const floor = new THREE.Mesh(
        new THREE.BoxGeometry(z.width, 0.08, z.depth),
        new THREE.MeshLambertMaterial({ color, transparent: true, opacity: 0.55 }),
      );
      floor.position.y = 0.04;
      pad.add(floor);

      const rim = new THREE.Mesh(
        new THREE.BoxGeometry(z.width + 0.3, 0.12, z.depth + 0.3),
        new THREE.MeshLambertMaterial({ color: 0x1a2030, transparent: true, opacity: 0.35 }),
      );
      rim.position.y = 0.02;
      pad.add(rim);

      const label = makeLabelSprite(z.label ?? z.domain.toUpperCase(), '#f2f4f8');
      label.position.set(0, 2.4, -z.depth * 0.42);
      pad.add(label);

      // Craft table / stage marker in pad center
      const stage = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.6, 0.18, 24),
        new THREE.MeshLambertMaterial({ color: 0x2a3144 }),
      );
      stage.position.y = 0.12;
      pad.add(stage);

      pads.add(pad);
    }
  }

  function zoneByDomain(domain) {
    return zones.find((z) => z.domain === domain);
  }

  function rebuildPreviews(bundle) {
    clearGroup(previews);
    if (!bundle) return;

    const things = bundle.things?.catalog ?? [];
    const actors = bundle.actors?.catalog ?? [];
    const scripts = bundle.events?.scripts ?? [];
    const thingsZone = zoneByDomain('things');
    const actorsZone = zoneByDomain('actors');
    const eventsZone = zoneByDomain('events');
    const worldsZone = zoneByDomain('world');

    // Things pad: lay out catalog items on the craft table
    if (thingsZone) {
      things.forEach((thing, i) => {
        const g = buildThingGroup(thing);
        const col = i % 3;
        const row = Math.floor(i / 3);
        g.position.set(
          thingsZone.x + (col - 1) * 2.4,
          0.35,
          thingsZone.z + row * 2.2 - 1.5,
        );
        previews.add(g);
      });
    }

    // Actors pad: block mannequins with equipped things
    if (actorsZone) {
      actors.forEach((actor, i) => {
        const mannequin = new THREE.Group();
        mannequin.name = actor.id;
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(actor.size ?? 1.1, (actor.size ?? 1.1) * 1.4, actor.size ?? 1.1),
          new THREE.MeshLambertMaterial({ color: new THREE.Color(actor.color ?? '#888888') }),
        );
        body.position.y = ((actor.size ?? 1.1) * 1.4) / 2;
        mannequin.add(body);

        const equipped = (actor.thingIds ?? [])
          .map((id) => things.find((t) => t.id === id))
          .filter(Boolean);
        for (const thing of equipped) {
          const tg = buildThingGroup(thing);
          if (thing.slot === 'head') tg.position.set(0, (actor.size ?? 1.1) * 1.45, 0);
          else if (thing.slot === 'hand') tg.position.set(0.7, (actor.size ?? 1.1) * 0.7, 0.2);
          else tg.position.set(0, 0.2, 0.9);
          mannequin.add(tg);
        }

        if (actor.summons) {
          const badge = makeLabelSprite(
            `summons ≤${actor.summons.maxAlive}`,
            '#f0c14a',
          );
          badge.scale.set(4, 1, 1);
          badge.position.set(0, (actor.size ?? 1.1) * 2.1, 0);
          mannequin.add(badge);
        }

        mannequin.position.set(
          actorsZone.x + (i - (actors.length - 1) / 2) * 3.2,
          0.2,
          actorsZone.z,
        );
        previews.add(mannequin);
      });
    }

    // Events pad: script step cards as stacked blocks
    if (eventsZone) {
      scripts.forEach((script, si) => {
        const card = new THREE.Group();
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(3.2, 0.2, 2.2),
          new THREE.MeshLambertMaterial({ color: 0x3a2a18 }),
        );
        base.position.y = 0.2;
        card.add(base);
        const title = makeLabelSprite(script.name ?? script.id, '#f0c14a');
        title.scale.set(5, 1.2, 1);
        title.position.set(0, 1.6, 0);
        card.add(title);

        (script.steps ?? []).forEach((step, i) => {
          const block = new THREE.Mesh(
            new THREE.BoxGeometry(2.6, 0.35, 0.5),
            new THREE.MeshLambertMaterial({
              color: new THREE.Color().setHSL(0.08 + i * 0.08, 0.65, 0.45),
            }),
          );
          block.position.set(0, 0.55 + i * 0.45, 0);
          card.add(block);
        });

        card.position.set(
          eventsZone.x + (si - (scripts.length - 1) / 2) * 4,
          0.15,
          eventsZone.z,
        );
        previews.add(card);
      });
    }

    // Worlds pad: mini arena rings for presets (visual review)
    if (worldsZone) {
      const mini = [
        { label: 'default', r: 1.8, c: 0x4f8a3c },
        { label: 'pressure', r: 2.2, c: 0x8a5a3c },
        { label: 'studio', r: 2.0, c: 0x5a6b52 },
      ];
      mini.forEach((m, i) => {
        const g = new THREE.Group();
        const disk = new THREE.Mesh(
          new THREE.CircleGeometry(m.r, 32),
          new THREE.MeshLambertMaterial({ color: m.c, side: THREE.DoubleSide }),
        );
        disk.rotation.x = -Math.PI / 2;
        disk.position.y = 0.12;
        g.add(disk);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(m.r, 0.08, 8, 32),
          new THREE.MeshBasicMaterial({ color: 0xf2f4f8 }),
        );
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.14;
        g.add(ring);
        const lab = makeLabelSprite(m.label, '#f2f4f8');
        lab.scale.set(3.5, 0.9, 1);
        lab.position.set(0, 1.2, 0);
        g.add(lab);
        g.position.set(worldsZone.x + (i - 1) * 4.5, 0, worldsZone.z);
        previews.add(g);
      });
    }
  }

  function applyBundle(bundle) {
    rebuildPads(bundle?.world?.zones ?? []);
    rebuildPreviews(bundle);
  }

  function setVisible(v) {
    root.visible = v;
  }

  function domainAt(x, z) {
    for (const zone of zones) {
      const hw = zone.width / 2;
      const hd = zone.depth / 2;
      if (x >= zone.x - hw && x <= zone.x + hw && z >= zone.z - hd && z <= zone.z + hd) {
        return zone.domain;
      }
    }
    return null;
  }

  function updateFromPlayer(x, z) {
    const d = domainAt(x, z);
    if (d !== activeDomain) {
      activeDomain = d;
      return d;
    }
    return activeDomain;
  }

  return {
    root,
    applyBundle,
    setVisible,
    domainAt,
    updateFromPlayer,
    getActiveDomain: () => activeDomain,
    rebuildPreviews,
  };
}
