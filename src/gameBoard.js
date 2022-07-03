import { SHIP_TYPES } from "./shipDetails";
import shipFactory from "./app";

const gameBoard = (() => {
  //Create a 10x10 game board;
  let board = Array(10).fill(null).map(() => Array(10).fill(null));
  const getBoard = () => board;

  let placedShips = [];
  const areAllShipsPlaced = () => placedShips.length === SHIP_TYPES.length;

  const adjustCoords = (y0, x0, i, direction) => {
    // default - horizontal
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

  const receiveAttack = (y, x) => {
    if(board[y][x] === null) {
        board[y][x] = 'miss'
    }else if (board[y][x].ship){
      board[y][x].ship.hit(board[y][x].index)
      board[y][x] = 'hit'
    }
      return board[y][x]
  }

  const areAllShipsSunk = () => placedShips.every((ship) => ship.Sunked())

    return {getBoard, placeShip, areAllShipsPlaced, receiveAttack, areAllShipsSunk}
})

export default gameBoard


