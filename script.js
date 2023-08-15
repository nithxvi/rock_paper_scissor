let playerSelection = prompt("Enter a choice: ");
playerSelection = playerSelection.toLowerCase();

function getComputerChoice(){
    const choice = ['rock','paper','scissor'];
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    return compChoice
}

getComputerChoice();