  
function playerPlay () {
    let userInput= prompt("Lets's play! Type in paper, rock or scissor");
    do {
        let userInput =prompt("Lets's play! Type in paper, rock or scissor")
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissor') {
        let validInput = userInput.toLowerCase();
        return validInput;
    } else {
        alert("You didn't type rock, paper or scissor")
    }
} while (userInput !== 'rock' || userInput !== 'paper' || userInput !== 'scissor');
}  


let playerSelection = playerPlay();
 
 
function computerPlay() {
    let computerChoise = Math.floor(Math.random()*3 +1);
    if (computerChoise === 1) {
        return 'paper'
    } else if (computerChoise === 2) {
        return 'rock'
    } else if (computerChoise === 3){
        return 'scissor'
    } else {
        return 'Computer says no'
    }
}
//console.log(computerPlay());
//let playerSelection = 'paper';
//playerSelection = playerSelection.toLowerCase();

function singleRound(playerSelection, computerSelection) {
  return computerSelection == playerSelection
    ? `It's a tie! you chose ${playerSelection} and computer chose ${computerSelection}`
    : computerSelection == 'rock' && playerSelection == 'scissor'
    ? `You lost! ${computerSelection} beats ${playerSelection}.`
    : computerSelection == 'rock' && playerSelection == 'paper'
    ? `You won! ${playerSelection} beats ${computerSelection}.`
    : computerSelection == 'scissor' && playerSelection == 'rock'
    ? `You won! ${playerSelection} beats ${computerSelection}.`
    : computerSelection == 'scissor' && playerSelection == 'paper'
    ? `You lost! ${computerSelection} beats ${playerSelection}.`
    : computerSelection == 'paper' && playerSelection == 'rock'
    ? `You lost! ${computerSelection} beats ${playerSelection}.`
    : computerSelection == 'paper' && playerSelection == 'scrissor'
    ? `You won! ${playerSelection} beats ${computerSelection}.`
    : 'computer says no!'
};



const computerSelection = computerPlay();

//console.log(singleRound(playerSelection, computerSelection));
//console.log(computerSelection);

function game() {
    let resultArr = [];
for (let i= 1; i <= 5; i++) { 
    let result = `round ${i} :${singleRound(playerSelection, computerPlay())};`
   console.log(result);
   resultArr.push(result); 
    }
    function filterResults(arr, query) {
        return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));     
    }
    const winning = filterResults(resultArr, "won");
    const losing = filterResults(resultArr, "lost");
    const even = filterResults(resultArr, "tie");

if(winning.length > losing.length && winning.length >= even.length || even.length > losing.length) {
return "Woohoo! You are the winner of the game!"
} else if (winning.length == losing.length) {
return "So tight! the game was a tie!"
} else {
return "I'm so sorry! You lost this game :(."
}
}
console.log(game());