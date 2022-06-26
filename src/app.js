import { SHIP_LENGTHS } from "./shipDetails";

const shipFactory = ((type) => {
    //Name and size of the ship
    const id = type;
    const length = SHIP_LENGTHS[type];

    //Detect if ship is hit or not
    const hits = Array(length).fill(null);
/*     const hit = (i) => {
        hits[i] = 'hit'
        return hits
    }; */
    const detectHit = () => hits ;
    const hit = () => {
        hits.pop();
        return hits
    }

    const hitCounter = () => {
        return length - hits.length
    }

    // When all spots are hit ship is sunk    
    return {id, length, hit, detectHit,hitCounter}
})
   

module.exports = shipFactory