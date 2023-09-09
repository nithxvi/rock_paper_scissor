

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
    
    let lose=0;
    let win=0;
    for(let i=0;i<5;i++){

        let playerSelection = prompt("Enter a choice: ");
        playerSelection = playerSelection.toLowerCase();

        function getComputerChoice(){
            const choice = ['rock','paper','scissor'];
            const compChoice = choice[Math.floor(Math.random()*choice.length)];
            return compChoice;
        }
        const compSelection = getComputerChoice();
        

        if(playerSelection=="rock" && compSelection=="scissor" || playerSelection=="paper" && compSelection=="rock" || playerSelection=="scissor" && compSelection=="paper" ){
            win+=1;
        }
        else if(playerSelection=="rock" && compSelection=="paper" || playerSelection=="paper" && compSelection=="scissor" || playerSelection=="scissor" && compSelection=="rock" ){
            lose+=1
        }
        console.log(playRound(playerSelection,compSelection));
        
    }
    console.log("Player Score:",win)
    console.log("Computer Score:",lose)
    if(win>lose){
        console.log("You Win")
    }
    else{
        console.log("You Lose")
    }
}  
console.log(game())


