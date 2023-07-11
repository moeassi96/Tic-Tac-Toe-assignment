let player1Score = 0;
let player2Score = 0;


let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", handleStart);
resetBtn.addEventListener("click", handleReset);

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];


function handleStart(){
    let gameboard = document.getElementById("game-board");
    gameboard.addEventListener("click", handleClickStart)
}
function handleClickStart(e){
    let clickedDiv = e.target;
    let divId = parseInt(clickedDiv.id);

    if (board[divId] === "") {
        clickedDiv.innerText = currentPlayer;
        board[divId] = currentPlayer;
    }
    if(checkForWin(currentPlayer)){
        updateScore(currentPlayer);
        resetBoard();
        return
    }
    if(checkForDraw()){
        resetBoard();
    }
    currentPlayer = (currentPlayer === "X") ? "O" : "X"
    }
// check if won
function checkForWin(player){
    for(let i = 0; i<win.length; i++){
        if(board[win[i][0]] == player && board[win[i][1]] == player && board[win[i][2]] == player){
            return true;
        }
    }
    return false
}
// check if draw
function checkForDraw(){
    for(let i = 0; i<board.length; i++){
        if(board[i] === ""){
            return false
        }
    }
    return true
}
// update score
function updateScore(player){
    let score = document.getElementById("score" + player);
    console.log(score);
    score.innerText = parseInt(score.innerText) + 1;
}
// resetBoard
function resetBoard(){
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X"
    for(let i = 0; i<board.length; i++){
        document.getElementById(String(i)).innerText = ""
    }   
}

function handleReset(){
    player1Score = 0;
    player2Score = 0;
    document.getElementById("scoreX").innerText = 0
    document.getElementById("scoreO").innerText = 0
    board = board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    resetBoard();
}





