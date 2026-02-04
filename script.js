function getComputerChoice() {
    const randomNumber = Math.random(); 
    if (randomNumber < 0.34) {
        return 'rock';
} else if (randomNumber <= 0.66) {
        return 'paper';
} else {
        return 'scissors';
}
}
function getHumanChoice() {
    const choice = prompt("Do you choose rock, paper or scissors?");
    return choice
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}`)
        console.log("You win!");
        return "You win!";
        {capitalize(humanChoice)} {capitalize(computerChoice)};
    } else {
        {capitalize(computerChoice)} {capitalize(humanChoice)};
        computerScore++;
        console.log("Computer wins!");
        return "Computer wins!";
    }
}
function playgame() {
    let humanscore = 0;
    let computerscore = 0;
    function getComputerChoice() {
        const randomNumber = Math.random(); 
        if (randomNumber < 0.33) {
            return 'rock';
    } else if (randomNumber <= 0.66) {
            return 'paper';
    } else {
            return 'scissors';
    }
    }
    function getHumanChoice() {
        return prompt("Do you choose rock, paper or scissors?");
    }
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win this round!");
            humanscore++;
    }else console.log("Computer wins this round!");
            computerscore++;
}
const buttons = document.getElementById('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
    });
});
