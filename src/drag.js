import { elements } from "./elements";
import View from "./view";

const Drag = (p1, p1Board) => {

    let draggedShip;
    let draggedShipIndex;
  
    //Drag and drop ships
    const getDraggedShipIndex = (e) =>
      (draggedShipIndex = Number(e.target.dataset.index));
  
    const dragStart = (e) => {
      draggedShip = e.target;
    }
    const dragDrop = (e) => {
      const cell = e.target;
      const p1Ship = p1.getShips()[draggedShip.dataset.ship];
      const isHorizontal = p1Ship.getDirection() === 'horizontal';
      //Adjust coords according base on direction w/draggedShipIndex
      const y = Number(cell.dataset.y) - (isHorizontal ? 0 : draggedShipIndex);
      const x = Number(cell.dataset.x) - (isHorizontal ? draggedShipIndex : 0);
  
      const outcome = p1Board.placeShip(p1Ship, y, x);
      if (outcome) {
        //Update grid after placing ship
        View.renderGrid(elements.p1Grid, p1Board, p1.getID());
        addDragAndDropEvenListeners();
        //Remove ship from container to drag
        draggedShip.parentElement.removeChild(draggedShip);
        //When all ships are placed display start button
        if (p1Board.areAllShipsPlaced()) {
          elements.startBtn.classList.add('show');
          elements.fleetInfo.classList.add('hide');
          elements.fleetInfo.classList.remove('show');
        }
      }
    };
  
    const dragOver = (e) => e.preventDefault();
    const dragEnter = (e) => e.preventDefault();
    const dragLeave = () => {};
    const dragEnd = () => {};
  
    const addDragAndDropEvenListeners = () => {
      const ships = document.querySelectorAll('.ship');
      const cells = elements.p1Grid.childNodes;
  
      //Bind events for drag/drop events
      for (const ship of ships) {
        ship.addEventListener('mousedown', getDraggedShipIndex);
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
      }
      for (const cell of cells) {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
      }
    };
  
    return { addDragAndDropEvenListeners };
  };
  
  export default Drag;