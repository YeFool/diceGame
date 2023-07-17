const rollButton = document.getElementById("roll");
const rollResult = document.getElementById("result");
const rollScore = document.getElementById("score");
const rollImg = document.getElementById("rollImg");
let score = 0;

const rollButton2 = document.getElementById("roll2");
const rollResult2 = document.getElementById("result2");
const rollScore2 = document.getElementById("score2");
const rollImg2 = document.getElementById("rollImg2");
let score2 = 0;

const rollButton3 = document.getElementById("roll3");
const rollResult3 = document.getElementById("result3");
const rollScore3 = document.getElementById("score3");

let score3 = 0;

rollButton.addEventListener("click", rollDice);
rollButton2.addEventListener("click", rollDice2);
rollButton3.addEventListener("click", rollDice3);

const newGameButton = document.getElementById("newGame");
const playerOneHold = document.getElementById("playerOneHold");
const playerTwoHold = document.getElementById("playerTwoHold");
const playerOneTotal = document.getElementById("playerOneTotal");
const playerTwoTotal = document.getElementById("playerTwoTotal");



function rollDice() {
  rollScore.textContent = roll();
  updateScore();
}

function rollDice2() {
  rollScore2.textContent = roll();
  updateScore2();
  
}

function rollDice3() {
  rollScore3.textContent = roll();
  updateScore3();
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore() {
  const dice = roll();
  score += dice;

  rollScore.textContent = `Score: ${score}`;
  rollImg.src = `diceImages/${dice}.png`;

  if (score > 20) {
    rollResult.textContent = "You won!";
    buttonDelay();
    setTimeout(function () {
      resetGame();
    }, 1000);
  } else if (dice === 1) {
    rollResult.textContent = "Try again!";
    buttonDelay();
    setTimeout(function () {
      resetGame();
    }, 1000);
  }
  
}

function updateScore2() {
  const dice = roll();
  score2 += dice;

  rollScore2.textContent = `Current Score: ${score2}`;
  rollImg2.src = `diceImages/${dice}.png`;

  if (score2 > 20) {
    rollResult2.textContent = "Player 1 wins!";
    setTimeout(function () {
      resetGame2();
    }, 2500);
  } else if (dice === 1 && score2 === 1) {
    rollResult2.textContent = "Next Player";
    setTimeout(function () {
      resetGame2();
    }, 2500);
  }
}


function updateScore3() {
  const dice = roll();
  score3 += dice;

  rollScore3.textContent = `Current Score: ${score3}`;
  rollImg2.src = `diceImages/${dice}.png`;

  if (score3 > 20) {
    rollResult3.textContent = "Player 2 wins!";
    setTimeout(function () {
      resetGame3();
    }, 2500);
  } else if (dice === 1 && score3 ===1) {
    rollResult3.textContent = "Next Player";
    setTimeout(function () {
      resetGame3();
    }, 2500);
  }
}

function resetGame() {
  score = 0;
  rollScore.textContent = `Score: ${score}`;
  setTimeout(function () {
    rollResult.textContent = "";
  }, 200);

  rollButton.disabled = false;
  
}

playerOneHold.addEventListener("click", () => {
 playerOneTotal.textContent = `P1 Total Score: ${score2}`
 rollScore2.textContent = "Score: 0";
 rollButton2.disabled = true;
 rollButton3.disabled = false;
});


newGameButton.addEventListener("click", () => {
  score2 = 0;
  score3 = 0;
  rollScore2.textContent = `Current Score:  ${score2}`;
  rollScore3.textContent = `Current Score:  ${score3}`;
  rollResult2.textContent = "";
  rollResult3.textContent = "";
  rollButton2.disabled = false;
  rollButton3.disabled = true;
  rollImg.src = "";
  rollImg2.src = "";
});



function resetGame2() {
  score2 = 0;
  score3 = 0;
  rollScore2.textContent = `Current Score:  ${score2}`;
  rollScore3.textContent = `Current Score:  ${score3}`;
  rollResult2.textContent = "";
  rollResult3.textContent = "";
  rollButton2.disabled = true;
  rollButton3.disabled = false;
  rollImg.src = "";
  rollImg2.src = "";
 
}

function resetGame3() {
  score2 = 0;
  score3 = 0;
  rollScore2.textContent = `Current Score:  ${score2}`;
  rollScore3.textContent = `Current Score:  ${score3}`;
  rollResult2.textContent = "";
  rollResult3.textContent = "";
  rollButton2.disabled = false;
  rollButton3.disabled = true;
  rollImg.src = "";
  rollImg2.src = "";
  
}

function buttonDelay() {
  rollButton.disabled = true;
}

rollButton2.disabled = true;
rollButton3.disabled = true;