console.log("Welcome to my game\nRock, Paper, Scissors. Take your Pick:");
function getHumanChoice () {
   return prompt("Play Rock, Paper or Scissors:");
} 
let humanScore = Number(localStorage.getItem("humanScore"))||0;
let computerScore =Number(localStorage.getItem("computerScore"))||0;
let countDraw = Number(localStorage.getItem("countDraw"))||0;

function getComputerChoice(){
 const key ={
    0 : "rock",
    1 : "paper",
    2 : "scissors"
 }
 const randomNumber = Math.floor(Math.random()*3);
 return key[randomNumber];
}

function playRound(humanSelection, computerSelection) {
    const p1 = humanSelection.toLowerCase();

    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    console.log(`Human: ${p1}`);
    console.log(`Computer: ${computerSelection}`);

    if (p1 === computerSelection) {
        countDraw++;
        console.log("Draw");

       
    }

    if (rules[p1] === computerSelection) {
        humanScore++;
        console.log("Human wins!");
    } else {
        computerScore++;
        console.log("Computer wins!");
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
console.log("Final Score");
localStorage.setItem("humanScore", humanScore);
localStorage.setItem("computerScore", computerScore);
localStorage.setItem("countDraw",countDraw);
