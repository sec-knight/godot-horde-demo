import { createGame } from './game/Game.js';
import { mountBrandCoins } from './ui/brandCoin.js';

mountBrandCoins();

const canvas = document.getElementById('game');
createGame(canvas);
