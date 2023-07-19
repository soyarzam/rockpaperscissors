// get the computer choice between rock, paper, or scissors
function getComputerChoice() {
const options = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

// keep track of scores
let wins = 0;
let losses = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        return "tie!";
      } else if (computerSelection === "paper") {
        losses = losses + 1;
        return "you lose!";
      } else if (computerSelection === "scissors") {
        wins = wins + 1;
        return "you win!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        wins = wins + 1;
        return "you win!!";
      } else if (computerSelection === "paper") {
        return "tie!!";
      } else if (computerSelection === "scissors") {
        losses = losses + 1;
        return "you lose!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        losses = losses + 1;
        return "you lose!";
      } else if (computerSelection === "paper") {
        wins = wins + 1;
        return "you win!";
      } else if (computerSelection === "scissors") {
        return "tie!";
      }
    } else {
        return playerSelection;
    }
  }
  

function game() {
    let counter = 1;
    while (counter < 6) {
        console.log("Iteration #" + counter);
        counter++;
        let playerSelection;
        while (true) {
          playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
          if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            break; // Exit the loop when the input is valid
          }
          console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        }
        const computerSelection = getComputerChoice();
        console.log("computer plays: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    

if (wins > losses) {
console.log("computer won " + losses + " times, and you won " + wins + " times! You win!")
}
else if (losses > wins) {
    console.log("computer won " + losses + " times, and you won " + wins + " times! You lose!")
}
else if (losses === wins) {
    console.log("computer won " + losses + " times, and you won " + wins + " times! Its a tie!")
}

console.log(wins)
console.log(losses)
}

game();
