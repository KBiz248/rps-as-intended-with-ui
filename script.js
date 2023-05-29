let winCount = 0;
let tieCount = 0;
let loseCount = 0;

const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)] 
}

console.log(getComputerChoice(choices))
//console.log(computerSelection)
let playerSelection;
const choiceMessage = document.getElementById('choiceMessage');



function playRound() {
    
    
    //let playerSelection //= (prompt("Rock, paper, or scissors?")).toLowerCase();
    computerSelection = getComputerChoice();

    const winRoundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const tieRoundMessage = `It's a tie!`;
    const loseRoundMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    //these had to be in the function, or else they either wouldn't have acces to the selections, or the if statement wouldn't
    //have access to the messages
    const win = document.getElementById('win');
    const tie = document.getElementById('tie');
    const lose = document.getElementById('lose')

    if ((playerSelection == "rock" && computerSelection == "rock")
    || (playerSelection == "paper" && computerSelection == "paper")
    || (playerSelection == "scissors" && computerSelection == "scissors")){
        tieCount++; //alert(tieRoundMessage)
        choiceMessage.textContent = `${tieRoundMessage}`;
        tie.textContent = `Tie count: ${tieCount}`;
        return tieCount;
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        winCount++; //alert(winRoundMessage)
        choiceMessage.textContent = `${winRoundMessage}`;
        win.textContent = `Win count: ${winCount}`
        return winCount;
    } else if ((playerSelection == "rock" && computerSelection =="paper")
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock")){
        loseCount++; //alert(loseRoundMessage)
        choiceMessage.textContent = `${loseRoundMessage}`;
        lose.textContent = `Lose count: ${loseCount}`;
        return loseCount;
    } console.log(playerSelection);

    
    

    
}
/*
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
*/
const button = document.querySelectorAll('button')

console.log(button)
//const rock = document.querySelector('button#rock')
//rock.addEventListener('click', () => console.log('hello'))
//button.forEach(addEventListener('click', () => playRound()));
//console.log(playerSelection)



const lose = document.querySelector('.lose')
//lose.textContent ( `Loss count ${loseCount}`)