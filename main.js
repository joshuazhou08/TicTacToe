
const gameboard = new Array();  

const board = document.querySelector(".board");

player1 = createPlayer(gameboard, 1, '9')
player2 = createPlayer(gameboard, 2, 'x')

const gameState = (function (player1, player2){
    let curr_player = 1;

    takeTurn = (event) => {
        if (curr_player == 1){
            player1.markCell(event.target.index)
        }
    }
    return {takeTurn}
})(player1, player2)

initializeBoard(board, gameState.takeTurn)