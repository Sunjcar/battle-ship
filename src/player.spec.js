import gameBoard from "./gameBoard";
import Player from "./player";

const player = Player('human')
const computer = Player('computer')

describe('Player id', () => {
    test('id = human', () => {
        expect(player.getID()).toBe('human')
    })
    test('id = computer', () => {
        expect(computer.getID()).toBe('computer')
    })
})

describe('Player attack', () => {
    const enemyBoard = gameBoard();
    test('Attacks the enemy board', () => {
        player.attack(1, 1, enemyBoard);
        expect(enemyBoard.getBoard()[1][1]).toBe('miss')
    })
})

describe('Computer auto attack', () => {
    const enemyBoard = gameBoard();
    test('Selects a random spot to attack',() => {
        computer.autoAttack(enemyBoard)
        //Checks if any cells have been hit
        expect(enemyBoard.getBoard().flat().every((cell) => cell === null))
        .toBe(false)
    })
})