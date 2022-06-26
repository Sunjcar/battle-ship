import { SHIP_LENGTHS } from "./shipDetails";

const shipFactory = ((type) => {

    //Name and size of the ship
    const id = type;
    const length = SHIP_LENGTHS[type];

    //Detect if ship is hit or not
    const hits = Array(length).fill(null);
    const detectHit = () => hits ;
    const hit = () => {
        hits.pop();
        return hits
    }

    //Returns current ship length
    const hitCounter = () => {
        return length - hits.length
    }

    //Returns ship status sunk or unsunk
    const Sunked = () => {
        if (hits.length === 0){
            return true
        }else return false
    }
    return {id, length, hit, detectHit,hitCounter,Sunked}
})
   
module.exports = shipFactory