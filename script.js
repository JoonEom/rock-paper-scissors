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
        ++userPoints;
        return `Player wins! ${playerChoice.toLowerCase()} beats ${computerChoice}!`;
    }
    else
    {
        ++computerPoints;
        return `You lose! ${computerChoice} beats ${playerChoice.toLowerCase()}!`;
    }
}



let userPoints = 0;
let computerPoints = 0;

for(let i = 0; i < 5; i++)
{
    let userChoice = prompt("Choose (rock, paper, scissor)");
    console.log(playRound(userChoice, getComputerChoice()));
    console.log(`Player: ${userPoints} | Computer: ${computerPoints}`)

}

if(userPoints == computerPoints)
{
    console.log("FINAL SCORE: Draw");
}
else if(userPoints > computerPoints)
{
    console.log("FINAL SCORE: Player wins");
}
else
{
    console.log("FINAL SCORE: Computer wins");
}

