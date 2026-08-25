import { TUNING, waveEnemyCount } from './config.js';

export function createWaveController(swarm, arena) {
  let wave = 0;
  let phase = 'idle'; // idle | countdown | fighting | between
  let timer = 0;
  let countdownValue = 0;
  let wavesCleared = 0;
  let listeners = {};

  function on(event, fn) {
    listeners[event] = fn;
  }

  function emit(event, payload) {
    listeners[event]?.(payload);
  }

  function startRun() {
    wave = 0;
    wavesCleared = 0;
    swarm.clear();
    beginNextWave();
  }

  function beginNextWave() {
    wave += 1;
    phase = 'countdown';
    timer = TUNING.waveCountdown;
    countdownValue = Math.ceil(timer);
    emit('countdown', { wave, value: countdownValue });
  }

  function spawnCurrentWave() {
    const count = waveEnemyCount(wave);
    swarm.spawnWave(count, arena.portalPosition, arena.gatePosition);
    phase = 'fighting';
    emit('fight', { wave, count });
  }

  function update(dt) {
    if (phase === 'countdown') {
      timer -= dt;
      const next = Math.max(0, Math.ceil(timer));
      if (next !== countdownValue) {
        countdownValue = next;
        emit('countdown', { wave, value: countdownValue || 'FIGHT!' });
      }
      if (timer <= 0) spawnCurrentWave();
      return;
    }

    if (phase === 'fighting') {
      if (swarm.aliveCount === 0) {
        wavesCleared = wave;
        phase = 'between';
        timer = 1.4;
        emit('cleared', { wave });
      }
      return;
    }

    if (phase === 'between') {
      timer -= dt;
      if (timer <= 0) beginNextWave();
    }
  }

  return {
    on,
    startRun,
    update,
    get wave() {
      return wave;
    },
    get phase() {
      return phase;
    },
    get wavesCleared() {
      return wavesCleared;
    },
    get countdownValue() {
      return countdownValue;
    },
  };
}
