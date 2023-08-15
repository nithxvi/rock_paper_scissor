let playerSelection = prompt("Enter a choice: ");
playerSelection = playerSelection.toLowerCase();
function getComputerChoice(){
    const choice = ['rock','paper','scissor'];
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
}

function playRound(playerSelection, compSelection){
    
    if(playerSelection===compSelection){
        return `It's a tie! You chose ${playerSelection}, Computer chose ${compSelection}`
    }
    else if(playerSelection=="rock" && compSelection=="paper" || playerSelection=="paper" && compSelection=="scissor" || playerSelection=="scissor" && compSelection=="rock" ){
        return `Computer Won! You chose ${playerSelection}, Computer chose ${compSelection}`
    
        }
    
    else if(playerSelection=="rock" && compSelection=="scissor" || playerSelection=="paper" && compSelection=="rock" || playerSelection=="scissor" && compSelection=="paper" ){
        return `You Won! You chose ${playerSelection}, Computer chose ${compSelection}`
        
    }
  
    else{
        return "Incorrect Selection!!"
    }
}

function game(){
    
    for(let i=0;i<5;i++){
        return playRound(playerSelection,compSelection);
        
    }
}  
const compSelection = getComputerChoice();
console.log(playRound(playerSelection,compSelection))