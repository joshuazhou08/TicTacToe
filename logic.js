//Initialize the grid


//frontend board for initializing graphics
function initializeBoard(board, clickFunction){
    for (let i = 0; i < 9; i++){
        const cell = document.createElement('img');
        cell.src = '';
        cell.id = `grid-${i}`;
        cell.index = i;
        cell.alt = '';
        cell.addEventListener('click', (clickFunction));
        board.appendChild(cell);
        gameboard.push(cell);                   //use gameboard[i] to access a cell at index i
}
}

/*Grid indexing:
    0 1 2
    3 4 5
    6 7 8
*/


function createPlayer(gameboard, id, img){
    const name = `Player ${id}`;
    const markCell = (index) => {
        gameboard[index].src = `${img}`;
        gameboard[index].status = "clicked";
        console.log("registered click")
    } 
    return {name, id, img, markCell}
}


