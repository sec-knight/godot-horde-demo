import { loadLoadout, saveLoadout, DEFAULT_LOADOUT } from '../runtime/loadout.js';
import { PLAYER_COLOR_PRESETS, thingsForSlotWithNone, thingsForSlot } from '../studio/starterGear.js';

/**
 * Character setup overlay — pick color, hat, weapon from Things catalog.
 * Options include starter gear + anything authored in the Domain Workshop.
 */
export function createCharacterSetup({ onConfirm, onBack, onChange, getCatalog }) {
  const root = document.getElementById('character-setup');
  if (!root) {
    return {
      show() {},
      hide() {},
      getLoadout: () => loadLoadout(),
    };
  }

  const colorRow = root.querySelector('#setup-colors');
  const hatRow = root.querySelector('#setup-hats');
  const weaponRow = root.querySelector('#setup-weapons');
  const customColor = root.querySelector('#setup-color-custom');
  const summary = root.querySelector('#setup-summary');

  let loadout = loadLoadout();

  function catalog() {
    return getCatalog?.() ?? [];
  }

  function emit() {
    saveLoadout(loadout);
    onChange?.(loadout, catalog());
    renderSummary();
  }

  function renderSummary() {
    if (!summary) return;
    const cat = catalog();
    const hat = cat.find((t) => t.id === loadout.slots.head);
    const weapon = cat.find((t) => t.id === loadout.slots.hand);
    summary.textContent = `${weapon?.name ?? 'Sword'} · ${hat?.name ?? 'No Hat'} · ${loadout.color}`;
  }

  function optionBtn(label, active, onClick) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `setup-option${active ? ' active' : ''}`;
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
  }

  function render() {
    const cat = catalog();

    if (colorRow) {
      colorRow.replaceChildren();
      for (const preset of PLAYER_COLOR_PRESETS) {
        const btn = optionBtn(preset.name, loadout.color.toLowerCase() === preset.hex.toLowerCase(), () => {
          loadout.color = preset.hex;
          if (customColor) customColor.value = preset.hex;
          emit();
          render();
        });
        btn.style.setProperty('--swatch', preset.hex);
        btn.classList.add('setup-swatch');
        colorRow.append(btn);
      }
    }

    if (customColor) {
      customColor.value = loadout.color.startsWith('#') ? loadout.color : `#${loadout.color}`;
    }

    if (hatRow) {
      hatRow.replaceChildren();
      for (const item of thingsForSlotWithNone(cat, 'head')) {
        const id = item.id;
        const active = (loadout.slots.head ?? null) === id;
        hatRow.append(
          optionBtn(item.name, active, () => {
            loadout.slots.head = id;
            emit();
            render();
          }),
        );
      }
    }

    if (weaponRow) {
      weaponRow.replaceChildren();
      for (const item of thingsForSlot(cat, 'hand')) {
        const active = loadout.slots.hand === item.id;
        weaponRow.append(
          optionBtn(item.name, active, () => {
            loadout.slots.hand = item.id;
            emit();
            render();
          }),
        );
      }
    }

    renderSummary();
  }

  customColor?.addEventListener('input', () => {
    loadout.color = customColor.value;
    emit();
    render();
  });

  root.querySelector('#btn-enter-arena')?.addEventListener('click', () => {
    saveLoadout(loadout);
    onConfirm?.(loadout, catalog());
  });

  root.querySelector('#btn-setup-back')?.addEventListener('click', () => {
    saveLoadout(loadout);
    onBack?.();
  });

  return {
    show() {
      loadout = loadLoadout();
      root.classList.remove('hidden');
      render();
      emit();
    },
    hide() {
      root.classList.add('hidden');
    },
    getLoadout: () => structuredClone(loadout),
    refresh: render,
  };
}

export { DEFAULT_LOADOUT };
