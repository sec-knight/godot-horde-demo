import { getBundle } from './bundleState.js';
import { mergeThingCatalog } from '../studio/starterGear.js';

const DRAFT_KEY = 'horde-studio-draft';

/** Catalog available for Character Setup / player equip — starters + active bundle + workshop draft. */
export function getPlayCatalog() {
  let draftCatalog = [];
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (raw) {
      const draft = JSON.parse(raw);
      draftCatalog = draft?.things?.catalog ?? [];
    }
  } catch {
    /* ignore */
  }
  const live = getBundle().things?.catalog ?? [];
  // Draft last so workshop-authored gear wins / appears
  return mergeThingCatalog([...live, ...draftCatalog]);
}
