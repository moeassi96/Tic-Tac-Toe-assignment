let player1Score = 0;
let player2Score = 0;
round = 0

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


function handleStart() {
    let gameboard = document.getElementById("game-board");
    gameboard.addEventListener("click", handleClickStart)

    let playerXName = document.getElementById("PlayerX-name").value;
    let playerOName = document.getElementById("PlayerO-name").value;

    document.getElementById("name-X").innerText = (playerXName != "") ? playerXName : "Player 1" 
    document.getElementById("name-O").innerText = (playerOName != "") ? playerOName : "Player 2" 
    document.getElementById("scoreX").innerText = 0
    document.getElementById("scoreO").innerText = 0
}
function handleClickStart(e) {
    let clickedDiv = e.target;
    let divId = parseInt(clickedDiv.id);

    if (board[divId] === "") {
        clickedDiv.innerText = currentPlayer;
        board[divId] = currentPlayer;
    }
    if (checkForWin(currentPlayer)) {
        round++;
        setTimeout(function () {
            updateScore(currentPlayer);
            resetBoard();
        }, 3000);
        return;
    }
    if (checkForDraw()) {
        resetBoard();
        return
    }
    currentPlayer = (currentPlayer === "X") ? "O" : "X"
}

function checkForWin(player) {
    for (let i = 0; i < win.length; i++) {
        if (board[win[i][0]] == player && board[win[i][1]] == player && board[win[i][2]] == player) {
            strikeThrough(i);
            return true;
        }
    }
    return false
}

function checkForDraw() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            return false
        }
    }
    return true
}

function updateScore(player) {
    let score = document.getElementById("score" + player);
    score.innerText = parseInt(score.innerText) + 1;
    nameOfWinner = document.getElementById("name-" + player).innerText
    document.getElementById("update-text").innerText = nameOfWinner + " won round " + round
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X"
    for (let i = 0; i < board.length; i++) {
        document.getElementById(String(i)).innerText = ""
    }
}

function strikeThrough(cells) {
    if (JSON.stringify(win[cells]) === JSON.stringify([0, 4, 8])) {
        for (let i = 0; i < 3; i++) {
            document.getElementById(JSON.stringify(win[cells][i])).innerHTML =
                currentPlayer + ' <div class="diagonal"></div>';
        }
    } else if (JSON.stringify(win[cells]) === JSON.stringify([2, 4, 6])) {
        for (let i = 0; i < 3; i++) {
            document.getElementById(JSON.stringify(win[cells][i])).innerHTML =
                currentPlayer + ' <div class="reverse-diagonal"></div>';
        }
    }
    else if ((JSON.stringify(win[cells]) === JSON.stringify([0, 1, 2])) || (JSON.stringify(win[cells]) === JSON.stringify([3, 4, 5])) || (JSON.stringify(win[cells]) === JSON.stringify([6, 7, 8]))) {
        for (let i = 0; i < 3; i++) {
            document.getElementById(JSON.stringify(win[cells][i])).innerHTML =
                currentPlayer + ' <div class="horizontal"></div>';
        }
    } else {
        for (let i = 0; i < 3; i++) {
            document.getElementById(JSON.stringify(win[cells][i])).innerHTML =
                currentPlayer + ' <div class="vertical"></div>';
        }
    }


}
function handleReset() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById("scoreX").innerText = 0
    document.getElementById("scoreO").innerText = 0
    board = board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementById("update-text").innerText = "Good luck !!"
    round = 0
    let gameboard = document.getElementById("game-board");
    gameboard.removeEventListener("click", handleClickStart);
    document.getElementById("name-X").innerText = ""
    document.getElementById("name-O").innerText = ""
    document.getElementById("scoreX").innerText = ""
    document.getElementById("scoreO").innerText = ""
    resetBoard();
}
