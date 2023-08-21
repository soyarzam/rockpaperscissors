// get the computer choice between rock, paper, or scissors
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// keep track of scores
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const playerScoreElement = document.querySelector('#playerScore');
const computerScoreElement = document.querySelector('#computerScore');
const beatsElement = document.querySelector('#beats');

// determine and display winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    disableButtons()
      vs = "Opponent plays " + computerSelection + "."
      beatsElement.textContent = vs
      setTimeout(() => {
        beatsElement.textContent = "Opponent plays " + computerSelection + ".."
    }, 500);
    setTimeout(() => {
      beatsElement.textContent = "Opponent plays " + computerSelection + "..."
  }, 1000);
      setTimeout(() => {
        enableButtons()
        if (computerSelection === "paper") {
          computerScore++;
          computerScoreElement.textContent = computerScore;
          if (computerScore < 5) {
            beatsElement.textContent = "You lose!";
          } else if (computerScore === 5) {
              beatsElement.textContent = "Uh oh! Take the L BOZO";
            }
        } else if (computerSelection === "scissors") {
          playerScore++;
          playerScoreElement.textContent = playerScore;
          if (playerScore < 5) {
            beatsElement.textContent = "You win!";
          } else if (playerScore === 5) {
              beatsElement.textContent = "MASSIVE W! You won five games!";
            }
        } else if (computerSelection === "rock") {
          beatsElement.textContent = "Its a tie!";
        }
    }, 2000);

  } else if (playerSelection === "paper") {
    vs = "Opponent plays " + computerSelection + "."
    disableButtons()
    beatsElement.textContent = vs
    setTimeout(() => {
      beatsElement.textContent = "Opponent plays " + computerSelection + ".."
  }, 500);
  setTimeout(() => {
    beatsElement.textContent = "Opponent plays " + computerSelection + "..."
}, 1000);
    setTimeout(() => {
      enableButtons()
      if (computerSelection === "rock") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        if (computerScore < 5) {
          beatsElement.textContent = "You lose!";
        } else if (computerScore === 5) {
            beatsElement.textContent = "Uh oh! Take the L BOZO";
          }
      } else if (computerSelection === "scissors") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        if (playerScore < 5) {
          beatsElement.textContent = "You win!";
        } else if (playerScore === 5) {
            beatsElement.textContent = "MASSIVE W! You won five games!";
          }
      } else if (computerSelection === "paper") {
        beatsElement.textContent = "Its a tie!";
      }
  }, 2000);

  } else if (playerSelection === "scissors") {
    disableButtons()
    vs = "Opponent plays " + computerSelection + "."
    beatsElement.textContent = vs
    setTimeout(() => {
      beatsElement.textContent = "Opponent plays " + computerSelection + ".."
  }, 500);
  setTimeout(() => {
    beatsElement.textContent = "Opponent plays " + computerSelection + "..."
}, 1000);
    setTimeout(() => {
      enableButtons()
      if (computerSelection === "rock") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        if (computerScore < 5) {
          beatsElement.textContent = "You lose!";
        } else if (computerScore === 5) {
            beatsElement.textContent = "Uh oh! Take the L BOZO";
          }
      } else if (computerSelection === "paper") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        if (playerScore < 5) {
          beatsElement.textContent = "You win!";
        } else if (playerScore === 5) {
            beatsElement.textContent = "MASSIVE W! You won five games!";
          }
      } else if (computerSelection === "scissors") {
        beatsElement.textContent = "Its a tie!";
      }
  }, 2000);
} else {
  return playerSelection;
}
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

// listens for button
function game() {
  const rockButton = document.querySelector('#rockButton');
  const paperButton = document.querySelector('#paperButton');
  const scissorsButton = document.querySelector('#scissorsButton');

  rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    console.log("Your choice: " + playerSelection);
    playGame();
  });

  paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    console.log("Your choice: " + playerSelection);
    playGame();
  });

  scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    console.log("Your choice: " + playerSelection);
    playGame();
  });

// checks win/loss count
  function playGame() {
    if (playerScore < 5 && computerScore < 5) {
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);

      if (playerScore === 5 || computerScore === 5) {
        disableButtons();
      }
    }
  }
}

game();
