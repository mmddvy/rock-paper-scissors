const button = document.querySelector("#start");

button.addEventListener("click", playGame);

let humanScore = 0
let computerScore = 0


function getComputerChoice(){
const random = Math.random();
if (random <1/3){
    return("rock")
}
else if ( random < 2/3 ){
    return("paper")
}
else{
    return("scissors")
}
}


function getUserChoice(){
const choice = prompt("what u gonna choose? ");
return choice.toLowerCase();

}


function playRound(humanChoice,computerChoice){
    if ( humanChoice ===  computerChoice ){
        console.log("tie")
    }
    else if(( humanChoice === "paper" && computerChoice === "rock")||
    ( humanChoice === "scissors" && computerChoice === "paper")||
     ( humanChoice === "rock" && computerChoice === "scissors" )){

     humanScore++;
        console.log("you win!")

}
else{
    computerScore++;
        console.log("You lose!");
}}
function playGame(){
    for(let i = 1;i<=5;i++){
    const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`your score : ${humanScore} , computer score : ${computerScore} `)
}
}

