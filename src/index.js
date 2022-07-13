import Game from './game';
import { elements } from './elements';
import { winSound } from './music';

//Bind Events

let gameType = 'singleplayer';
let game = Game(gameType);

game.renderGrids();
game.renderFleet();

//Auto place all ships 
elements.autoPlaceBtn.addEventListener('click', (e) => {
  game.autoPlace();
});

elements.startBtn.addEventListener('click', (e) => {
  game.startGame();
});

elements.playAgainBtn.addEventListener('click', (e) => {
  game.playAgain();
  winSound.pause()
});