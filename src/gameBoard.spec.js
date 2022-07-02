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

describe('Return null if ships place out of board space', () => {
    const gameboard = gameBoard();
    const ship = shipFactory('Destroyer');

    test('out-of-bounds ship horizontal', () => {
      gameboard.placeShip(ship, 9, 9);
      expect(gameboard.getBoard()[9][9]).toEqual(null);
    });
    test('out-of-bounds ship vertical', () => {
      ship.changeDirection();
      gameboard.placeShip(ship, 7, 7); 
      expect(gameboard.getBoard()[7][7]).toEqual(null);
    });
  });

describe('Check if ship collides with another', () => {
    const gameboard = gameBoard();
    const kaiden = shipFactory('Kaiden');
    const destroyer = shipFactory('Destroyer');

    test('ship kaiden placement', () => {
        gameboard.placeShip(kaiden, 3, 1);
        expect(gameboard.getBoard()[3][1]).toEqual({
            ship: kaiden, index: 0
        })
    })
    test('ship collides with ship kaiden', () => {
        destroyer.changeDirection();
        gameboard.placeShip(destroyer, 1, 2);
        expect(gameboard.getBoard()[1][2]).toEqual(null)
    })
  })

describe('Check if all ships are placed', () => {
  const gameboard = gameBoard();
  const sheldon = shipFactory('Sheldon')
  const kaiden = shipFactory('Kaiden')
  const destroyer = shipFactory('Destroyer')
  const submarine = shipFactory('Submarine')
  const stealh = shipFactory('Stealth')
  const GoingMerry = shipFactory('GoingMerry')
  test('Some ships placed', () => {
    gameboard.placeShip(sheldon, 2, 0)
    gameboard.placeShip(submarine, 3, 2)
    gameboard.placeShip(GoingMerry, 5, 5)
    expect(gameboard.areAllShipsPlaced()).toBe(false)
  })
  test('All ships placed', () => {
    gameboard.placeShip(sheldon, 2, 0)
    gameboard.placeShip(kaiden, 1, 0)
    gameboard.placeShip(destroyer, 4,0)
    gameboard.placeShip(submarine, 3, 2)
    gameboard.placeShip(stealh, 8, 8)
    gameboard.placeShip(GoingMerry, 5, 5)
    expect(gameboard.areAllShipsPlaced()).toBe(true)
  })
})



