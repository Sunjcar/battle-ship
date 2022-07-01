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
    const gameboard = gameBoard();
    const ship = shipFactory('Destroyer');
    gameboard.placeShip(ship, 3, 2);

    test('placed ship at starter coord w/index: 0', () => {
      expect(gameboard.getBoard()[3][2]).toEqual({ ship, index: 0});
    });
    test('placed ship at coord w/index: 1', () => {
      expect(gameboard.getBoard()[3][3]).toEqual({ ship, index: 1 });
    });
    test('placed ship at final coord w/index: 2', () => {
      expect(gameboard.getBoard()[3][4]).toEqual({ ship, index: 2 });
    });
  });

describe('place vertical ship', () => {
    const gameboard = gameBoard();
    const ship = shipFactory('Destroyer')
    ship.changeDirection();
    gameboard.placeShip(ship, 3, 3);

    test('place ship with starter index:0', () => {
        expect(gameboard.getBoard()[3][3]).toEqual({ship, index:0})
    });
    test('place ship with starter index:1', () => {
        expect(gameboard.getBoard()[4][3]).toEqual({ship, index:1})
    })
    test('place ship with starter index:2', () => {
        expect(gameboard.getBoard()[5][3]).toEqual({ship, index:2})
    })
})