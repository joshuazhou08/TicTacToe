//Initialize the grid
const board = document.querySelector(".board");
for (let i = 0; i < 9; i++){
    const cell = document.createElement('img');
    cell.id = `grid-${i}`;
    board.appendChild(cell)
}