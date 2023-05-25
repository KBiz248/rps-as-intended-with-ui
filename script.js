let winCount = 0;
let tieCount = 0;
let loseCount = 0;

const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)] 
}

console.log(getComputerChoice(choices))
//console.log(computerSelection)

function playRound() {
    playerSelection = (prompt("Rock, paper, or scissors?")).toLowerCase();
    computerSelection = getComputerChoice();

    const winRoundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const tieRoundMessage = `It's a tie!`;
    const loseRoundMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    //these had to be in the function, or else they either wouldn't have acces to the selections, or the if statement wouldn't
    //have access to the messages

    if ((playerSelection == "rock" && computerSelection == "rock")
    || (playerSelection == "paper" && computerSelection == "paper")
    || (playerSelection == "scissors" && computerSelection == "scissors")){
        tieCount++; alert(tieRoundMessage)
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        winCount++; alert(winRoundMessage)
    } else if ((playerSelection == "rock" && computerSelection =="paper")
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock")){
        loseCount++; alert(loseRoundMessage)
    }
}

function game() { for(i=0; i<5; i++) {playRound()}

    const tieSingularOrPlural = tieCount == 1? "tie" : "ties";

    let winGameMessage = `You win! Final score: ${winCount} to ${loseCount} with ${tieCount} ${tieSingularOrPlural}`;
    let tieGameMessage = `It's a tie! Final score: ${winCount} to ${loseCount} with ${tieCount} ${tieSingularOrPlural}`;
    let loseGameMessage = `You lose! Final score: ${winCount} to ${loseCount} with ${tieCount} ${tieSingularOrPlural}`;
    //if these were outside of the function, the function would accurately return the winner/loser, but all the counts would == 0
    if (winCount > loseCount){return winGameMessage}
    else if (winCount == loseCount){return tieGameMessage}
    else if (loseCount > winCount){return loseGameMessage}
}

console.log(winCount)
console.log(tieCount)
console.log(loseCount)
console.log(game())