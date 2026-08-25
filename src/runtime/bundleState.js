import { loadPreset } from '../bundle/load.js';

/** Active level bundle + derived run config (events/scoring not all in TUNING). */
let activeBundle = loadPreset('default');

export function getBundle() {
  return activeBundle;
}

export function setBundle(bundle) {
  activeBundle = bundle;
}

export function getEvents() {
  return activeBundle.events ?? {};
}

export function getScoring() {
  return activeBundle.events?.scoring ?? {
    perKill: 12,
    perSecondNear: 6,
    waveClearBonus: 40,
  };
}
