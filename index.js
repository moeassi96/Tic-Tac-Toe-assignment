let player1Score = 0;
let player2Score = 0;
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

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


function handleStart(){
    let gameboard = document.getElementById("game-board");
    gameboard.addEventListener("click", handleClickStart)
}
function handleClickStart(e){
    let clickedDiv = e.target;
    let divId = clickedDiv.id;

    if(board[divId] === ""){
        
        clickedDiv.innerText = currentPlayer;
        console.log(clickedDiv.innerText)
        board[parseInt(divId)] = currentPlayer;
    }
}





