import { playerShips, randomCoord, SHIP_TYPES } from "./shipDetails"
import gameBoard from "./gameBoard";

const Player = (id = '') => {
    let ships = playerShips(SHIP_TYPES);
    const getID = () => id
    const getShips = () => ships

    let hitSound = new Audio ('../src/audio/sounds_explosion.wav')
    let missSound = new Audio('../src//audio/sounds_splash.wav')

    //Attacks enemy board
    const attack = (y, x, enemyBoard) => enemyBoard.receiveAttack(y, x)

    const autoAttack = (enemyBoard) => {
        const [y, x] = randomCoord();
        const cell = enemyBoard.getBoard()[y][x];
        if (cell === 'hit' || cell === 'miss') {
          //If a cell is hit or missed already attack again
          autoAttack(enemyBoard);
        } else {
            enemyBoard.receiveAttack(y, x);
            hitSound.pause()
            missSound.pause()
      }
    }
      
    const resetShips = () => (ships = playerShips(SHIP_TYPES))

    return {getID, getShips, attack, autoAttack, resetShips,}
}

export default Player