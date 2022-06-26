const shipFactory = require('./app')

describe('Test ship details', () => {
    describe('details', () => {
        const ship = shipFactory('GoingMerry');
    test('id', () => {
        expect(ship.id).toBe('GoingMerry')
    })
    test('length', () => {
        expect(ship.length).toBe(1)
    })  
    })    
})