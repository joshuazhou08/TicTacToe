

    let gameboard = new Array();  

    const board = document.querySelector(".board");

    player1 = createPlayer(gameboard, 1, 'images/x.png')
    player2 = createPlayer(gameboard, 2, 'images/o.png')

    const gameState = (function (player1, player2){
        let curr_player = 1;
        const nextPlayer = document.querySelector('p')
        takeTurn = (event) => {
            if (!(event.target.status == "clicked")){
                if (curr_player == 1){
                    
                    player1.markCell(event.target.index)
                    curr_player = 2
                    nextPlayer.textContent = `${player2.name}'s Turn`
                }
                else if(curr_player == 2){
                    player2.markCell(event.target.index)
                    curr_player = 1
                    nextPlayer.textContent = `${player1.name}'s Turn`
                }
            }
        }
        return {takeTurn}
    })(player1, player2)

    initializeBoard(gameboard, board, gameState.takeTurn)