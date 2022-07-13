import View from "./view";
import Drag from "./drag";
import { elements } from "./elements";
import Player from "./player";
import gameBoard from "./gameBoard"
import { winSound, loseSound } from "./music";

const Game = (type) => {

  //Create Players
  const p1 = Player('human');
  let p2;
  if (type === 'singleplayer') {
    p2 = Player('computer');
  } else {
    p2 = Player('human');
  }

  //Create boards
  const p1Board = gameBoard();
  const p2Board = gameBoard();

  //Create drag for Drag-N-Drop
  const drag = Drag(p1, p1Board);

  //Reset GamegetShips
  const resetGame = () => {
    p1.resetShips();
    p2.resetShips();
    p1Board.reset();
    p2Board.reset();
  };

  const addRotateEventListeners = () => {
    const ships = document.querySelectorAll('.ship');
    ships.forEach((ship) => {
      ship.addEventListener('dblclick', (e) => {
        const shipElement = e.target.parentElement;
        const ship = p1.getShips()[shipElement.dataset.ship];
        ship.changeDirection();
        shipElement.classList.toggle('vertical');
      });
    });
  };

  const renderFleet = () => {
    View.renderFleet(p1.getShips());
    drag.addDragAndDropEvenListeners();
    addRotateEventListeners();
  };

  //Bind event for p1 'human' player
  const addGridEventListeners = () => {
    if (p2.getID === 'human')
      elements.p1Grid.addEventListener('click', ctrlAttack);
    elements.p2Grid.addEventListener('click', ctrlAttack);
  };

  const ctrlAttack = (e) => {
    const cell = e.target;
    if (cell.classList.contains('grid-cell')) {
      //Get coords from cell
      const y = cell.dataset.y;
      const x = cell.dataset.x;

      //Checks if board is empty, if empty attack
      const boardCell = p2Board.getBoard()[y][x];
      if (boardCell !== 'miss' && boardCell !== 'hit') {
        p1.attack(y, x, p2Board);
        p2.autoAttack(p1Board);
        renderGrids();
      }
      //Declares winner if all ships are all sunked
      if (p1Board.areAllShipsSunk() || p2Board.areAllShipsSunk()) {
        let winner = '';
        if (p1Board.areAllShipsSunk()) {
          winner = 'Computer wins!';
          loseSound.play();
        } else if (p2Board.areAllShipsSunk()) {
          winner = 'You win!';
          winSound.play();
        }
        elements.p2Grid.removeEventListener('click', ctrlAttack);
        View.renderWinner(winner);
      }
    }
  };

  //Render Grids / Update Grids
  const renderGrids = () => {
    View.renderGrid(elements.p1Grid, p1Board, p1.getID());
    View.renderGrid(elements.p2Grid, p2Board, p2.getID());
  };

  const autoPlace = () => {
    p1Board.reset();
    p1Board.autoPlaceShip(p1.getShips());
    renderGrids();
    View.autoPlace();
  };

  const startGame = () => {
    addGridEventListeners();
    if (p2.getID() === 'computer') p2Board.autoPlaceShip(p2.getShips());
    View.startGame();
  };

  const playAgain = () => {
    resetGame();
    renderGrids();
    View.playAgain();
    renderFleet();
  };

  return {
    renderGrids,
    renderFleet,
    autoPlace,
    startGame,
    playAgain,
  };
};
export default Game