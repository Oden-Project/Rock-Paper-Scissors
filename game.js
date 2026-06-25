console.log("Welcome to my game\nRock, Paper, Scissors. Take your Pick:");
//function to get the computer's choice
function getComputerChoice(){
const key ={
    0 : "rock",
    1 : "paper",
    2 : "scissors"
    }
const randomNumber = Math.floor(Math.random()*3);//generates a random value between 0 and 1, multiplies it by 3, gets the floor result of that and matches it to the key array
return key[randomNumber];
}

//function that prompts the user user to enter a choice
function getHumanChoice (){
let choice=prompt("Play Rock, Paper or Scissors:");
return choice.toLowerCase();//makes choice case insensitive by changing all the inputs to lowercase
}

//function to play the game
function playGame(){
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
if (humanChoice === computerChoice){
    console.log ("You tied with the computer");
}
else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            console.log ("You won this round against the computer");
            humanScore++;
        }
else {
    console.log ("The computer won this round");
    computerScore++
}
}
// Play 5 rounds (You can use a loop or just repeat the calls 5 times)
    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Declare final winner
    console.log("=== FINAL RESULT ===");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won.");
    } else {
        console.log("The game ended in an overall tie!");
    }
}
playGame();