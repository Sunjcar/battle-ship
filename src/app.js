import { SHIP_LENGTHS } from "./shipDetails";

const shipFactory = ((type) => {
    const id = type;
    const length = SHIP_LENGTHS[type];

    return {id, length}
})
   

module.exports = shipFactory