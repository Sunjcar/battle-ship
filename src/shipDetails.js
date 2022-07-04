import shipFactory from "./app";

//Battleship Types
export const SHIP_TYPES = [
    'Sheldon',
    'Kaiden',
    'Destroyer',
    'Submarine',
    'Stealth',
    'GoingMerry',
]
    
export const SHIP_LENGTHS = {
    Sheldon: 6,
    Kaiden : 5,
    Destroyer: 4,
    Submarine: 3,
    Stealth: 2,
    GoingMerry: 1,
}

export const playerShips = (ship) => {
    const ships = {}
    ship.forEach((ship) => (ships[ship] = shipFactory(ship)))
    return ships
}

//Randomize ship locations 
const Random = (arr = 10) => Math.floor(Math.random() * arr)
export const randomCoord = (arr = 10) => [Random(arr), Random(arr)]

