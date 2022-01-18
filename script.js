const results = document.querySelector("#results");
const scoresPlayer = document.querySelector("#scores-p");
const scoresComputer = document.querySelector("#scores-c");


let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;




function computerPlay() { //randomly selects computers selection 

  var randomNumber = Math.floor(Math.random() * 3);
  
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
}  else {
    return "scissors";
  }
};


function playRound(playerSelection, computerSelection) {

  computerSelection = computerPlay();

  
  if (playerSelection === computerSelection) {
    
    return results.textContent = `That round was a tie!`,

    scoresPlayer.textContent =  `Player: ${playerScore}`, 
    scoresComputer.textContent = `Computer: ${computerScore}`;

  } else if (playerSelection === "rock") {

    if (computerSelection === "paper") {
      
      computerScore++; 
      
      return results.textContent = `You lose that round! Paper beats Rock`,

      scoresPlayer.textContent =  `Player: ${playerScore}`,
      scoresComputer.textContent = `Computer: ${computerScore}`;

    } else {

      playerScore++;
      
      return results.textContent = `You win that round! Rock beats Scissors.`,

      scoresPlayer.textContent =  `Player: ${playerScore}`, 
      scoresComputer.textContent = `Computer: ${computerScore}`;
    }
  } else if (playerSelection === "paper") {

    if (computerSelection === "rock") {

      playerScore++;
      
      return results.textContent = `You win that round! Paper beats Rock.`,

      scoresPlayer.textContent =  `Player: ${playerScore}`, 
      scoresComputer.textContent = `Computer: ${computerScore}`;

    } else {

      computerScore++;
      
      return results.textContent = `You lose that round! Scissors beats Paper.`,

      scoresPlayer.textContent =  `Player: ${playerScore}`, 
      scoresComputer.textContent = `Computer: ${computerScore}`;

    } 
  } else if (playerSelection === "scissors") {

    if (computerSelection === "paper") {

      playerScore++;
      
      return results.textContent = `You win that round! Scissors beats Paper.`,

      scoresPlayer.textContent =  `Player: ${playerScore}`, 
      scoresComputer.textContent = `Computer: ${computerScore}`;
    } else {

      computerScore++;
      
      return results.textContent = `You lose that round! Rock beats scissors.`,

      scoresPlayer.textContent =  `Player: ${playerScore}`, 
      scoresComputer.textContent = `Computer: ${computerScore}`;
    }
  }
};


function game(playerSelection) {

    playRound(playerSelection, computerSelection);

    

  if (playerScore > computerScore && playerScore >= 3) {
    
    alert(`You have beat the computer! Your final score was: ${playerScore}. Computer's score was: ${computerScore}.`);

    return document.location.reload(),
    playerScore=0, 
    computerScore=0;

  } else if (computerScore > playerScore && computerScore >= 3) {
   
    alert(`You lost the game! Your score was ${playerScore}. Computer's score was: ${computerScore}.`)

    return document.location.reload(),
    playerScore=0, 
    computerScore=0;
  }; 
};

const selectionButtons = document.querySelectorAll('.selections');

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
  })
});

selectionButtons.forEach(selectionButton => {

selectionButton.addEventListener('click', () => {
   results.classList.toggle("bounce");
   setTimeout(() => {results.classList.toggle("bounce")}, 700);
   //setTimeout(() => {results.classList.toggle("bounceBack")}, 500);
   //setTimeout(() => {results.classList.toggle("bounceBack")});


  });
});

function makeSelection(selection) {
  game(selection);
};
