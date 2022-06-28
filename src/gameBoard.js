const gameBoard = (() => {
    //Create a 10x10 game board;
    let board = Array(10).fill('').map(() => Array(10).fill(''));
    const getBoard = () => board;

/*     const placeShip = {
        axis: axis,
        type: type,
    } */
    return {getBoard}
})

module.exports = gameBoard