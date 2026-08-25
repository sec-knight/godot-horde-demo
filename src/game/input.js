export function createInput(canvas) {
  const keys = new Set();
  const mouse = { dx: 0, dy: 0, buttons: 0 };
  const move = { x: 0, y: 0 };
  const actions = {
    light: false,
    heavy: false,
    block: false,
    dodge: false,
    spin: false,
    slam: false,
    jump: false,
  };
  const touchActive = matchMedia('(pointer: coarse)').matches;
  let pointerLocked = false;
  let lookDragging = false;
  let lastLookX = 0;
  let lastLookY = 0;

  function syncMoveFromKeys() {
    if (touchActive && (move.x !== 0 || move.y !== 0)) return;
    let x = 0;
    let y = 0;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) y -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) y += 1;
    const len = Math.hypot(x, y) || 1;
    move.x = x / len;
    move.y = y / len;
  }

  function onKeyDown(e) {
    keys.add(e.code);
    if (e.code === 'KeyR') actions.block = true;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') actions.dodge = true;
    if (e.code === 'KeyQ') actions.spin = true;
    if (e.code === 'KeyF') actions.slam = true;
    if (e.code === 'Space') {
      e.preventDefault();
      actions.jump = true;
    }
    syncMoveFromKeys();
  }

  function onKeyUp(e) {
    keys.delete(e.code);
    if (e.code === 'KeyR') actions.block = false;
    syncMoveFromKeys();
  }

  function onMouseDown(e) {
    mouse.buttons |= 1 << e.button;
    if (e.button === 0) {
      if (actions.block) actions.heavy = true; // push from block
      else actions.light = true;
    }
    if (e.button === 2) actions.heavy = true;
    if (!pointerLocked && !touchActive) {
      canvas.requestPointerLock?.();
    }
  }

  function onMouseUp(e) {
    mouse.buttons &= ~(1 << e.button);
  }

  function onMouseMove(e) {
    if (pointerLocked) {
      mouse.dx += e.movementX;
      mouse.dy += e.movementY;
    } else if (lookDragging) {
      mouse.dx += e.clientX - lastLookX;
      mouse.dy += e.clientY - lastLookY;
      lastLookX = e.clientX;
      lastLookY = e.clientY;
    }
  }

  function onPointerLockChange() {
    pointerLocked = document.pointerLockElement === canvas;
  }

  function onContextMenu(e) {
    e.preventDefault();
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('mousemove', onMouseMove);
  document.addEventListener('pointerlockchange', onPointerLockChange);
  canvas.addEventListener('contextmenu', onContextMenu);

  // Touch stick + action buttons
  const stick = document.getElementById('stick');
  const knob = document.getElementById('stick-knob');
  const touchLayer = document.getElementById('touch');
  if (touchActive && touchLayer) {
    touchLayer.classList.remove('hidden');
    let stickId = null;
    const radius = 46;

    stick?.addEventListener('pointerdown', (e) => {
      stickId = e.pointerId;
      stick.setPointerCapture(e.pointerId);
      updateStick(e);
    });
    stick?.addEventListener('pointermove', (e) => {
      if (e.pointerId === stickId) updateStick(e);
    });
    const endStick = (e) => {
      if (e.pointerId !== stickId) return;
      stickId = null;
      move.x = 0;
      move.y = 0;
      if (knob) {
        knob.style.transform = 'translate(0,0)';
      }
    };
    stick?.addEventListener('pointerup', endStick);
    stick?.addEventListener('pointercancel', endStick);

    function updateStick(e) {
      const rect = stick.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = e.clientX - cx;
      let dy = e.clientY - cy;
      const len = Math.hypot(dx, dy) || 1;
      const clamped = Math.min(len, radius);
      dx = (dx / len) * clamped;
      dy = (dy / len) * clamped;
      move.x = dx / radius;
      move.y = dy / radius;
      if (knob) knob.style.transform = `translate(${dx}px, ${dy}px)`;
    }

    // Look drag on right half of screen (outside buttons)
    canvas.addEventListener('pointerdown', (e) => {
      if (e.target.closest?.('.touch-actions, .stick, button, .overlay')) return;
      if (e.clientX < window.innerWidth * 0.45) return;
      lookDragging = true;
      lastLookX = e.clientX;
      lastLookY = e.clientY;
    });
    window.addEventListener('pointerup', () => {
      lookDragging = false;
    });

    document.querySelectorAll('.tbtn').forEach((btn) => {
      const act = btn.dataset.act;
      const down = (e) => {
        e.preventDefault();
        if (act === 'block') actions.block = true;
        else if (act) actions[act] = true;
      };
      const up = () => {
        if (act === 'block') actions.block = false;
      };
      btn.addEventListener('pointerdown', down);
      btn.addEventListener('pointerup', up);
      btn.addEventListener('pointercancel', up);
    });
  }

  return {
    move,
    actions,
    mouse,
    get pointerLocked() {
      return pointerLocked;
    },
    requestLock() {
      if (!touchActive) canvas.requestPointerLock?.();
    },
    consumeMouseDelta() {
      const dx = mouse.dx;
      const dy = mouse.dy;
      mouse.dx = 0;
      mouse.dy = 0;
      return { dx, dy };
    },
    consumeAction(name) {
      if (!actions[name]) return false;
      if (name === 'block') return true;
      actions[name] = false;
      return true;
    },
    isBlocking() {
      return actions.block;
    },
    dispose() {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      canvas.removeEventListener('contextmenu', onContextMenu);
    },
  };
}
