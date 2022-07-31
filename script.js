const boxes = document.querySelectorAll(".box");
const boxesArray = Array.from(boxes);
const result = document.querySelector(".result");
const restBtn = document.querySelector(".restart");

const player1 = "X";
const player2 = "O";
let playerTurn = player1;

let choices = [];

//Event Listener
restBtn.addEventListener("click", resetBoard);

function createBorder() {
  boxesArray.forEach((box, index) => {
    let border = "";

    if (index < 3) {
      border += "border-bottom: 2px solid white; ";
    }
    if (index % 3 === 0) {
      border += "border-right: 2px solid white;";
    }
    if (index % 3 === 2) {
      border += "border-left: 2px solid white;";
    }
    if (index > 5) {
      border += "border-top: 2px solid white;";
    }
    box.style = border;

    box.addEventListener("click", fieldClicked);
  });
}

function playerWon(player) {
  //Row Combination
  if (choices[0] === player) {
    if (choices[1] === player && choices[2] === player) {
      return true;
    }

    if (choices[3] === player && choices[6] === player) {
      return true;
    }
  }

  //Column Combination
  if (choices[8] === player) {
    if (choices[5] === player && choices[2] === player) {
      return true;
    }

    if (choices[7] === player && choices[6] === player) {
      return true;
    }
  }
  //Diagonal Combination
  if (choices[4] === player) {
    if (choices[3] === player && choices[5] === player) {
      return true;
    }

    if (choices[2] === player && choices[6] === player) {
      return true;
    }
    if (choices[0] === player && choices[8] === player) {
      return true;
    }
    if (choices[1] === player && choices[7] === player) {
      return true;
    }
  }
}

function fieldClicked(e) {
  const boxId = e.target.id;
  if (!choices[boxId]) {
    choices[boxId] = playerTurn;
    e.target.innerHTML = playerTurn;

    if (playerWon(playerTurn)) {
      result.innerText = `${playerTurn} Wins`;
      setTimeout(resetBoard, 2000);
    }

    playerTurn = playerTurn === player1 ? player2 : player1;
  }
}

function resetBoard() {
  choices = [];
  boxes.forEach((box) => {
    box.innerText = "";
  });
  result.innerText = "Tic Tac Toe";
  playerTurn = player1;
}

createBorder();
