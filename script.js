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
        return `Player wins! ${playerChoice.toLowerCase()} beats ${computerChoice}!`;
    }
    else
    {
        return `You lose! ${computerChoice} beats ${playerChoice.toLowerCase()}!`;
    }
}



let userPoints = 0;
let computerPoints = 0;

for(let i = 0; i < 5; i++)
{
    let userChoice = prompt("Choose (rock, paper, scissor)");
    if(playRound(userChoice,getComputerChoice()).charAt(0) == 'I')
    {
        console.log(`Player: ${userPoints} | Computer: ${computerPoints}`);
    }
    else if(playRound(userChoice,getComputerChoice()).charAt(0) == 'P')
    {
        console.log(`Player: ${++userPoints} | Computer: ${computerPoints}`);
    }
    else{
        console.log(`Player: ${userPoints} | Computer: ${++computerPoints}`);
    }

}