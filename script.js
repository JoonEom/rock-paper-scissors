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


let playerPoints = 0;
let computerPoints = 0;

const result = document.querySelector('.result');
const scoreTracker = document.querySelector('.score-tracker');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

rockButton.addEventListener('click',() => {
    result.textContent = playRound('rock', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
});

paperButton.addEventListener('click',() => {
    result.textContent = playRound('paper', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
});


scissorButton.addEventListener('click',() => {
    result.textContent = playRound('scissor', getComputerChoice());
    scoreTracker.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
});