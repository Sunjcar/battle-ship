const gameBoard = require('./gameBoard')

describe('Gameboard',() => {
    const gameboard = gameBoard();
    test('empty board',() => {
        expect(gameboard.getBoard().every((cell) => cell === ''))
        .toBe(false)
    })
    test('length of board row',() => {
        expect(gameboard.getBoard().length).toBe(10)
    })
})