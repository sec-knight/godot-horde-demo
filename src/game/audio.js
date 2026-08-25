/**
 * Tiny WebAudio pack — whooshes, impacts, block thunk, cute enemy bonk.
 */
export function createAudio() {
  let ctx = null;
  let master = null;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);
    return ctx;
  }

  function tone(freq, dur, type = 'square', gain = 0.2, slide = 0) {
    const c = ensure();
    if (!c) return;
    if (c.state === 'suspended') c.resume();
    const t0 = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  function noise(dur, gain = 0.15, hp = 800) {
    const c = ensure();
    if (!c) return;
    if (c.state === 'suspended') c.resume();
    const t0 = c.currentTime;
    const n = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, n, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = hp;
    filter.Q.value = 0.7;
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(master);
    src.start(t0);
  }

  return {
    unlock() {
      ensure()?.resume?.();
    },
    slash() {
      noise(0.08, 0.12, 1800);
      tone(420 + Math.random() * 80, 0.07, 'sawtooth', 0.08, -180);
    },
    spin() {
      tone(220, 0.12, 'triangle', 0.1, 120);
      noise(0.1, 0.1, 600);
    },
    slam() {
      tone(90, 0.18, 'sine', 0.25, -40);
      noise(0.15, 0.2, 200);
    },
    block() {
      tone(160, 0.06, 'square', 0.1);
      noise(0.05, 0.08, 400);
    },
    push() {
      tone(140, 0.1, 'sawtooth', 0.12, -60);
      noise(0.08, 0.14, 500);
    },
    hit() {
      tone(300 + Math.random() * 40, 0.05, 'square', 0.1, -100);
      noise(0.06, 0.12, 900);
    },
    hurt() {
      tone(180, 0.12, 'sawtooth', 0.14, -80);
    },
    gateHit() {
      tone(70, 0.1, 'sine', 0.16, -20);
    },
    dodge() {
      tone(520, 0.05, 'sine', 0.06, 80);
    },
  };
}
