import { randomCoord, SHIP_TYPES } from "./shipDetails";
import shipFactory from "./app";
import missSound from "../dist/audio/sounds_splash.wav"
import hitSound from "../dist/audio/sounds_explosion.wav"

const gameBoard = () => {
  //Create a 10x10 game board;
  let board = Array(10).fill(null).map(() => Array(10).fill(null));
  const getBoard = () => board;

  let placedShips = [];
  const areAllShipsPlaced = () => placedShips.length === SHIP_TYPES.length;

  const adjustCoords = (y0, x0, i, direction) => {
    //Default direction = Horizontal
    let x = x0 + i;
    let y = y0;
    if (direction === 'vertical') {
      x = x0;
      y = y0 + i;
    }
    return [y, x];
  };

  // place ship at coords (y, x)
  const placeShip = (ship, y0, x0) => {
    const direction = ship.getDirection();
    // checks if out-of-bounds/collision
    const valid = checkValid(ship.length, direction, y0, x0);
    if (valid) {
      for (let i = 0; i < ship.length; i++) {
        const [y, x] = adjustCoords(y0, x0, i, direction);
        // places ship w/index
        board[y][x] = { ship, index: i };
      }
      // adds it to placedShips
      placedShips.push(ship);
      return valid;
    } else {
      return valid;
    }
  };

  const checkValid = (length, direction, y0, x0) => {
    const cells = [];
    for (let i = 0; i < length; i++) {
      const [y, x] = adjustCoords(y0, x0, i, direction);
      // checks that y/x are in-bounds
      if (y < 10 && x < 10) {
        cells.push(board[y][x]);
      } else {
        return false;
      }
    }
    return cells.every((cell) => cell === null);
  };
  let hitSound = new Audio ('../audio/sounds_explosion.wav')
 /*  let missSound = new Audio('../audio/sounds_splash.wav') */
  const receiveAttack = (y, x) => {
    if(board[y][x] === null) {
        board[y][x] = 'miss'
        missSound.play();
    }else if (board[y][x].ship){
      board[y][x].ship.hit(board[y][x].index)
      board[y][x] = 'hit'
      hitSound.play();
    }
      return board[y][x]
  }

  const areAllShipsSunk = () => placedShips.every((ship) => ship.Sunked())

  //Randomize placement of ships
  const randomPlaceShip = (ship) => {
    const [y,x] = randomCoord()
    const changeAxis = Math.random() > 0.5;
    if (changeAxis){
      ship.changeDirection()
    };
    if (!placeShip(ship, y, x)){
      randomPlaceShip(ship)
    }; 
  }

  const autoPlaceShip = (ships) => {
    for (const ship in ships) {
      randomPlaceShip(ships[ship])
    }
  }

  const reset = () => {
    board = Array(10).fill(null).map(() => Array(10).fill(null));
    placedShips = [];
  }

    return {getBoard, placeShip, areAllShipsPlaced, receiveAttack, 
      areAllShipsSunk, autoPlaceShip, reset}
}

export default gameBoard


