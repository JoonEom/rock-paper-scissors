let playerPoints = 0;
let computerPoints = 0;


const result = document.querySelector('.result');
const scoreTracker = document.querySelector('.score-tracker');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const display = document.querySelector('.display');


rockButton.addEventListener('click',() => {
    result.textContent = playRound('rock', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
    checkForWin();
});

paperButton.addEventListener('click',() => {
    result.textContent = playRound('paper', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
    checkForWin();
});


scissorButton.addEventListener('click',() => {
    result.textContent = playRound('scissor', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
    checkForWin();
});


function getComputerChoice()
{
    const rps = ['rock', 'paper', 'scissor'];
    let rand = Math.floor(Math.random() * (3));
    return rps[rand];
}
function playRound(playerChoice, computerChoice)
{
    if(playerChoice.toLowerCase() == computerChoice)
    {
        return "It was a draw!";
    }
    else if ((playerChoice.toLowerCase() == 'rock' && computerChoice == 'scissor') || (playerChoice.toLowerCase() == 'paper' && computerChoice == 'rock') || (playerChoice.toLowerCase() == 'scissor' && computerChoice == 'paper'))
    {
        ++playerPoints
        return `Player wins! ${playerChoice.toLowerCase()} beats ${computerChoice}!`;
    }
    else
    {
        ++computerPoints;
        return `You lose! ${computerChoice} beats ${playerChoice.toLowerCase()}!`;

    }
}
function checkForWin()
{
    display.style.display = "none";
    
    if(playerPoints == 5)
    {
        display.style.display = "block";
        display.textContent = "Player wins";
        playerPoints = 0;
        computerPoints = 0;
    }
    else if(computerPoints == 5)
    {
        display.style.display = "block";
        display.textContent = "Computer wins"; 
        playerPoints = 0;
        computerPoints = 0;
    }
}




