import gameBoard from './gameBoard'
import shipFactory from "./app";

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

describe('place horizontal ship', () => {
    const ship = shipFactory('Destroyer');
    gameBoard().placeShip(ship, 3, 2);
    test('placed ship at starter coord w/index: 0', () => {
      expect(gameBoard().getBoard()[3][2]).toEqual({ship,index: 0 });
    });
})