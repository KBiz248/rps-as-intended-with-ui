//comments are for the benefit of Odin Project students

let winCount = 0;
let tieCount = 0;
let loseCount = 0;
/*
These were declared as 0 so that they could be incrimented in the playRound function.

They needed to be declared outside of the function.
If they were declared inside the function, then their value would be reset to 0 each time the function was called,
therefore making it impossible to incriment them as intended.

Their position (whether above or below the function) does not matter,
as long as they are outside of the function.
*/

const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)] 
}

//let playerSelection;
/*
I thought it was necessary to declare the playerSelection variable so that it could be altered by the button selections
and accessed in the playRound function.
This declaration is actually unnecessary.
I assume this is because playerSelection is mentioned in the HTML.
*/

const choiceMessage = document.getElementById('choiceMessage');

const finalMessage = document.createElement('div');
finalMessage.classList.add('center')

container = document.querySelector('.container');
container.appendChild(finalMessage);
/*
Container was declared without the use of const, let, or var.
I don't know why that worked.
*/

function playRound() {
    
    computerSelection = getComputerChoice();

    const winRoundMessage = `You've won the battle! ${playerSelection} beats ${computerSelection}`;
    const tieRoundMessage = `It's a tie!`;
    const loseRoundMessage = `You've lost the battle! ${computerSelection} beats ${playerSelection}`;
    /*
    These messages had to be in the function, or else they either wouldn't have acces to the selections,
    or the if statement wouldn't have access to the messages.

    If placed above or below the function, the page would load with the message
    uncaught ReferenceError: playerSelection is not defined

    Clicking a button would result in a message such as
    uncaught ReferenceError: Cannot access 'tieRoundMessage' before initialization

    In other words:
    if the code isn't working like you thought it would, maybe it's a scope issue.
    */
    
    const win = document.getElementById('win');
    const tie = document.getElementById('tie');
    const lose = document.getElementById('lose')
    const tieOrTies = tieCount == 1? "tie" : "ties";
    /*
    These could be placed above, inside, or below the function.
    Game works just fine regardless of the location of these variables.
    */


    if(winCount < 5 && loseCount < 5){ //keeps playRound() from being called once a winner is declared
        if ((playerSelection == "rock" && computerSelection == "rock")
        || (playerSelection == "paper" && computerSelection == "paper")
        || (playerSelection == "scissors" && computerSelection == "scissors")){
            tieCount++;
            choiceMessage.textContent = `${tieRoundMessage}`;
            tie.textContent = `Tie count: ${tieCount}`;
            //return tieCount;
        } else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")){
            winCount++;
            choiceMessage.textContent = `${winRoundMessage}`;
            win.textContent = `Win count: ${winCount}`
            //return winCount;
        } else if ((playerSelection == "rock" && computerSelection =="paper")
        || (playerSelection == "paper" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "rock")){
            loseCount++;
            choiceMessage.textContent = `${loseRoundMessage}`;
            lose.textContent = `Lose count: ${loseCount}`;
            //return loseCount;
        } console.log(playerSelection);
    };
    /*
    The location of ++ (before or after the variable) does not seem to make a difference.

    'return tieCount', 'return winCount', and 'return loseCount' had to be removed, 
    otherwise they prevented the rest of the code below
    from being executed by halting the playRound function.
    
    Also, they're just unnecessary. 
    */

    if(winCount == 5){
        finalMessage.textContent = `You've won the war! Final score: ${winCount} to ${loseCount} with ${tieCount} ${tieOrTies}`;
        //return;
    }else if(loseCount == 5){
        finalMessage.textContent = `You've lost the war! Final score: ${winCount} to ${loseCount} with ${tieCount} ${tieOrTies}`;
        //return;
    }//else{
        //return;
    //}
    /*
    The above returns, as well as the final 'else', are all unnecessary.
    */

}

