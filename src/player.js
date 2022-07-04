import { playerShips, SHIP_TYPES } from "./shipDetails"
import gameBoard from "./gameBoard";

const Player = (id = '') => {
    let ships = playerShips(SHIP_TYPES);
    const getID = () => id
    const getShips = () => ships

    //Attacks enemy board
    const attack = (y, x, enemyBoard) => enemyBoard.receiveAttack(y, x)

    return {getID, getShips, attack}
}

export default Player