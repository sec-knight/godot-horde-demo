import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';
import { ARENA_OBSTACLES, resolveObstacleCollisions } from './obstacles.js';

export function createArena(scene) {
  const group = new THREE.Group();
  group.name = 'Arena';
  scene.add(group);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(TUNING.arenaRadius, 64),
    new THREE.MeshLambertMaterial({ color: COLORS.ground }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = false;
  group.add(ground);

  // Dark perimeter ring / berm
  const berm = new THREE.Mesh(
    new THREE.RingGeometry(TUNING.arenaRadius - 0.9, TUNING.arenaRadius + 1.4, 64),
    new THREE.MeshLambertMaterial({ color: COLORS.berm, side: THREE.DoubleSide }),
  );
  berm.rotation.x = -Math.PI / 2;
  berm.position.y = 0.02;
  group.add(berm);

  // Side field berms (blocky walls like the Godot demo)
  const wallMat = new THREE.MeshLambertMaterial({ color: COLORS.bermAccent });
  for (let i = 0; i < 10; i++) {
    const ang = (i / 10) * Math.PI * 2 + 0.2;
    const wall = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.6, 1.1), wallMat);
    wall.position.set(
      Math.cos(ang) * (TUNING.arenaRadius + 0.2),
      0.8,
      Math.sin(ang) * (TUNING.arenaRadius + 0.2),
    );
    wall.lookAt(0, 0.8, 0);
    group.add(wall);
  }

  // Large soft dome / berm — solid obstacle (see obstacles.js)
  const westBerm = ARENA_OBSTACLES[0];
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(westBerm.radius + 0.8, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
    new THREE.MeshLambertMaterial({ color: 0xb8b8b8 }),
  );
  dome.position.set(westBerm.x, 0, westBerm.z);
  group.add(dome);

  // Siege gate — bright red cube on a dark pedestal, near -Z
  const gateGroup = new THREE.Group();
  gateGroup.position.set(0, 0, -TUNING.arenaRadius + 4.5);
  group.add(gateGroup);

  const pedestal = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.45, 3.2),
    new THREE.MeshLambertMaterial({ color: COLORS.gateBase }),
  );
  pedestal.position.y = 0.225;
  gateGroup.add(pedestal);

  const gateMesh = new THREE.Mesh(
    new THREE.BoxGeometry(TUNING.gateSize, TUNING.gateSize, TUNING.gateSize),
    new THREE.MeshLambertMaterial({ color: COLORS.gate, emissive: 0x000000, emissiveIntensity: 0 }),
  );
  gateMesh.position.y = 0.45 + TUNING.gateSize / 2;
  gateGroup.add(gateMesh);

  // Far portal — purple glowing cube where the horde pours from
  const portalGroup = new THREE.Group();
  portalGroup.position.set(0, 0, TUNING.arenaRadius - 3.5);
  group.add(portalGroup);

  const portal = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 2.8, 0.6),
    new THREE.MeshLambertMaterial({
      color: COLORS.portal,
      emissive: COLORS.portalGlow,
      emissiveIntensity: 0.45,
    }),
  );
  portal.position.y = 1.5;
  portalGroup.add(portal);

  const portalRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.12, 8, 24),
    new THREE.MeshBasicMaterial({ color: COLORS.portalGlow }),
  );
  portalRing.position.y = 1.5;
  portalGroup.add(portalRing);

  // Soft fill lights
  const hemi = new THREE.HemisphereLight(0xd8e8ff, 0x3a4a28, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff2d8, 0.9);
  sun.position.set(12, 22, 8);
  scene.add(sun);
  scene.background = new THREE.Color(COLORS.sky);
  scene.fog = new THREE.Fog(COLORS.sky, 42, 70);

  return {
    group,
    gateGroup,
    gateMesh,
    portalGroup,
    portalPosition: portalGroup.position.clone(),
    gatePosition: gateGroup.position.clone(),
    clampToArena(pos, radius = TUNING.playerRadius) {
      const lim = TUNING.arenaRadius - radius - 0.4;
      const d = Math.hypot(pos.x, pos.z);
      if (d > lim) {
        const s = lim / d;
        pos.x *= s;
        pos.z *= s;
      }
      resolveObstacleCollisions(pos, radius);
    },
  };
}
