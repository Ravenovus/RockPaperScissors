function getComputerChoice(){
    return (Math.trunc((Math.random()*100)%3));
}

function getHumanChoice(){
    let choice = prompt("Chose now!");
    let answer = 0;

    choice = capitalize(choice);

    if(choice == choices[0]){
        answer = 0;
    }
    else if(choice == choices[1]){
        answer = 1;
    }
    else if(choice == choices[2]){
        answer = 2;
    }
    return answer;
}

function capitalize(word){
    let tempWord = String(word).toLocaleLowerCase();
    return tempWord.charAt(0).toUpperCase()+tempWord.slice(1);
}

function playRound(humanChoice, computerChoice){
    let winner = -1;
    console.log("You picked: "+choices[humanChoice]+" Computer picked: "+choices[computerChoice]);
    if(humanChoice == computerChoice){
        console.log("Tied!");
        winner = 0;
    }
    else if((humanChoice + 2)%3 == computerChoice){
        console.log("You Win! "+ choices[humanChoice]+" beats "+choices[computerChoice]+".");
        winner = 1;
    }
    else{
        console.log("You Lose! "+ choices[computerChoice]+" beats "+choices[humanChoice]+".");
        winner = 2;
    }
    return winner;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let winner = -1;

    for(let i=0;i<5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        winner = playRound(humanChoice,computerChoice);
        if (winner == 1) humanScore++;
        else if (winner == 2) computerScore++;
        winner = -1;
        console.log("Current Score:\nYou: "+humanScore+"\nComputer: "+computerScore);
    }
}

const choices = ["Rock", "Paper", "Scissors"];

playGame();