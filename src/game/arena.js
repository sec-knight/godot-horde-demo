import * as THREE from 'three';
import { COLORS, TUNING } from './config.js';
import { getObstacles, resolveObstacleCollisions } from './obstacles.js';
import { applyEnvironmentToScene } from '../bundle/apply.js';

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

  const berm = new THREE.Mesh(
    new THREE.RingGeometry(TUNING.arenaRadius - 0.9, TUNING.arenaRadius + 1.4, 64),
    new THREE.MeshLambertMaterial({ color: COLORS.berm, side: THREE.DoubleSide }),
  );
  berm.rotation.x = -Math.PI / 2;
  berm.position.y = 0.02;
  group.add(berm);

  const wallMat = new THREE.MeshLambertMaterial({ color: COLORS.bermAccent });
  const walls = [];
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
    walls.push(wall);
  }

  const obstacleGroup = new THREE.Group();
  obstacleGroup.name = 'Obstacles';
  group.add(obstacleGroup);

  function rebuildObstacleMeshes() {
    while (obstacleGroup.children.length) {
      const ch = obstacleGroup.children[0];
      ch.geometry?.dispose();
      obstacleGroup.remove(ch);
    }
    for (const obs of getObstacles()) {
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(obs.visualRadius ?? obs.radius + 0.8, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
        new THREE.MeshLambertMaterial({ color: 0xb8b8b8 }),
      );
      dome.position.set(obs.x, 0, obs.z);
      obstacleGroup.add(dome);
    }
  }
  rebuildObstacleMeshes();

  const gateGroup = new THREE.Group();
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

  const portalGroup = new THREE.Group();
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

  const hemi = new THREE.HemisphereLight(0xd8e8ff, 0x3a4a28, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff2d8, 0.9);
  sun.position.set(12, 22, 8);
  scene.add(sun);
  scene.background = new THREE.Color(COLORS.sky);
  scene.fog = new THREE.Fog(COLORS.sky, 42, 70);

  function repositionWalls(R) {
    for (let i = 0; i < walls.length; i++) {
      const ang = (i / walls.length) * Math.PI * 2 + 0.2;
      walls[i].position.set(Math.cos(ang) * (R + 0.2), 0.8, Math.sin(ang) * (R + 0.2));
      walls[i].lookAt(0, 0.8, 0);
    }
  }

  function applyWorld(world) {
    const R = world.arenaRadius;
    TUNING.arenaRadius = R;
    TUNING.gateSize = world.gate.size;

    ground.geometry.dispose();
    ground.geometry = new THREE.CircleGeometry(R, 64);
    berm.geometry.dispose();
    berm.geometry = new THREE.RingGeometry(R - 0.9, R + 1.4, 64);
    repositionWalls(R);

    gateGroup.position.set(world.gate.x, 0, world.gate.z);
    portalGroup.position.set(world.portal.x, 0, world.portal.z);

    const gs = world.gate.size;
    gateMesh.geometry.dispose();
    gateMesh.geometry = new THREE.BoxGeometry(gs, gs, gs);
    gateMesh.position.y = 0.45 + gs / 2;

    rebuildObstacleMeshes();
    applyEnvironmentToScene(scene, { ground }, world.environment);
  }

  function setSiegeVisible(v) {
    gateGroup.visible = v;
    portalGroup.visible = v;
  }

  return {
    group,
    gateGroup,
    gateMesh,
    portalGroup,
    ground,
    get portalPosition() {
      return portalGroup.position;
    },
    get gatePosition() {
      return gateGroup.position;
    },
    applyWorld,
    setSiegeVisible,
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
