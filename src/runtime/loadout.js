const LOADOUT_KEY = 'horde-player-loadout';

export const DEFAULT_LOADOUT = {
  color: '#8fb4d4',
  slots: {
    head: 'hat-cap',
    hand: 'weapon-sword',
  },
};

export function loadLoadout() {
  try {
    const raw = localStorage.getItem(LOADOUT_KEY);
    if (!raw) return structuredClone(DEFAULT_LOADOUT);
    const parsed = JSON.parse(raw);
    return {
      color: typeof parsed.color === 'string' ? parsed.color : DEFAULT_LOADOUT.color,
      slots: {
        head: parsed.slots?.head ?? DEFAULT_LOADOUT.slots.head,
        hand: parsed.slots?.hand ?? DEFAULT_LOADOUT.slots.hand,
      },
    };
  } catch {
    return structuredClone(DEFAULT_LOADOUT);
  }
}

export function saveLoadout(loadout) {
  localStorage.setItem(LOADOUT_KEY, JSON.stringify(loadout));
}

export function resolveThing(catalog, id) {
  if (!id) return null;
  return (catalog ?? []).find((t) => t.id === id) ?? null;
}
