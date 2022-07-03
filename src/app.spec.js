/* const shipFactory = require('./app') */
import shipFactory from "./app";

describe('details', () => {
    const ship = shipFactory('GoingMerry');
    test('id', () => {
        expect(ship.id).toBe('GoingMerry')
    })
    test('length', () => {
        expect(ship.length).toBe(1)
    })  
})

describe('details', () => {
    const ship = shipFactory('Destroyer');
    test('id', () => {
        expect(ship.id).toBe('Destroyer')
    })
    test('length', () => {
        expect(ship.length).toBe(4)
    })  
})

describe('details', () => {
    const ship = shipFactory('Destroyer');
    test('2 hits',() => {
        ship.hit(1)
        ship.hit(2)
        expect(ship.detectHit()).toEqual([null, 'hit', 'hit', null]);
    })
})

describe('details', () => {
    const ship = shipFactory('GoingMerry');
    test('1 hit',() => {
        ship.hit(0)
        expect(ship.detectHit()).toEqual(['hit']);
    })
    test('status of ship', () => {
        expect(ship.Sunked()).toBe(true)
    })
})
 
describe('details', () => {
    const ship = shipFactory('Stealth');
    test('1 hits',() => {
        ship.hit(0)
        expect(ship.detectHit()).toEqual(['hit',null]);
    })
    /* test('', () => {
        expect(ship.hitCounter()).toBe(1)
    }) */
    test('status of ship', () => {
        expect(ship.Sunked()).toBe(false)
    })
})