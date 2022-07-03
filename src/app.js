import { SHIP_LENGTHS } from "./shipDetails";

const shipFactory = ((type) => {
    //Name and size of the ship
    const id = type;
    const length = SHIP_LENGTHS[type];
    //Detect if ship is hit or not
    const hits = Array(length).fill(null);
    const detectHit = () => hits ;
    const hit = (i) => (hits[i]) = 'hit'


    //Returns ship status sunk or unsunk
    const Sunked = () => hits.every((hit) => hit === 'hit')


    //Change ship axis 
    let direction = 'horizontal'
    const getDirection = () => direction
    const changeDirection = () => {
        if (direction === 'horizontal'){
            direction = 'vertical'
        }else {
            direction = 'horizontal'
        }
    }

    return {id, length, hit, detectHit,Sunked,getDirection,changeDirection}
})
   
export default shipFactory