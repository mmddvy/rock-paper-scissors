


// button.addEventListener("click", playGame);

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



function playRound(humanChoice,computerChoice){
const result =document.querySelector('#result')


    if ( humanChoice ===  computerChoice ){
        result.textContent = `Tie! both chose ${humanChoice}`
    }

    else if(( humanChoice === "paper" && computerChoice === "rock")||
    ( humanChoice === "scissors" && computerChoice === "paper")||
     ( humanChoice === "rock" && computerChoice === "scissors" )){

     humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
}

else{
    computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
}

document.querySelector("#human-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;
}
    

    const buttons = document.querySelectorAll(".choice");

    buttons.forEach((button) => {
        button.addEventListener("click", () =>{
            const humanChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
        });
    });

// function playGame(){
//     for(let i = 1;i<=5;i++){
//     const humanSelection = getUserChoice();
// const computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);
//     console.log(`your score : ${humanScore} , computer score : ${computerScore} `)
// }
// }

