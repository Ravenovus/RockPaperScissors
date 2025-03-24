function getComputerChoice(){
    return (Math.trunc((Math.random()*100)%3));
}

function playRound(humanChoice, computerChoice){
    let winner = -1;
    let playerBox = document.querySelector("#player_choice");
    let computerBox = document.querySelector("#computer_choice");
    let resultBox = document.querySelector("#winner_result");
    let result ="";

    playerBox.textContent = "You picked: "+ choices[humanChoice];
    computerBox.textContent = "Computer picked: "+ choices[computerChoice];
    
    if(humanChoice == computerChoice){
        result = "Tied!";
        winner = 0;
    }
    else if((humanChoice + 2)%3 == computerChoice){
        result = "You Win! "+ choices[humanChoice]+" beats "+choices[computerChoice]+".";
        winner = 1;
    }
    else{
        result = "You Lose! "+ choices[computerChoice]+" beats "+choices[humanChoice]+".";
        winner = 2;
    }

    resultBox.textContent = result;
    return winner;
}

function playGame(humanChoice){
    let winner = -1;

    const computerChoice = getComputerChoice();
    winner = playRound(humanChoice,computerChoice);
    if (winner == 1) humanScore++;
    else if (winner == 2) computerScore++;
    winner = -1;
    updateScores();
}

function updateScores(){
    const playerScoreText = document.querySelector("#player_score");
    const computerScoreText = document.querySelector("#computer_score");

    playerScoreText.textContent = "Player Score: " + humanScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;

}

const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;


const buttons_selector = document.querySelector(".Button_Container")

buttons_selector.addEventListener('click', (event) => {
    let target = event.target;
    let humanChoice = -1;

    switch(target.id){
        case 'rock_button':
            humanChoice = 0;
            break;
        case 'paper_button':
            humanChoice = 1;
            break;
        case "scissors_button":
            humanChoice = 2;
            break;
    }

    playGame(humanChoice);
})

updateScores();