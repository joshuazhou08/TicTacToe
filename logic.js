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
        gameboard[index].player = id;
        console.log("registered click");
        setTimeout(()=> checkAll(gameboard), 1000)

    } 
    return {name, id, img, markCell}
}


//check winner given the gameboard
function checkRows(gameboard) {
    for (let i = 0; i < gameboard.length; i += 3) {
        const curr_player = gameboard[i].player;
        if (curr_player) {
            const other_rows = [gameboard[i + 1].player, gameboard[i + 2].player];
            if (other_rows.every(player => player == curr_player)) {
                console.log(`${curr_player} wins!`);
                return; // Break out of the function after alerting
            }
        }
    }
}

function checkColumn(gameboard) {
    for (let i = 0; i < 3; i ++) {
        const curr_player = gameboard[i].player;
        if (curr_player) {
            const other_rows = [gameboard[i + 3].player, gameboard[i + 6].player];
            if (other_rows.every(player => player == curr_player)) {
                console.log(`${curr_player} wins!`);
                return; // Break out of the function after alerting
            }
        }
    }
}

function checkDiagonals(gameboard) {
    for (let i = 0; i < 3; i += 2) {
        const curr_player = gameboard[i].player;
        if (curr_player) {
            const other_rows = [gameboard[4].player, gameboard[i == 0? 8 : 6].player];
            if (other_rows.every(player => player == curr_player)) {
                console.log(`${curr_player} wins!`);
                return; // Break out of the function after alerting
            }
        }
    }
}

//checks rows, columns, and diagonal

function checkAll(gameboard){
    checkColumn(gameboard);
    checkRows(gameboard)
    checkDiagonals(gameboard)
}