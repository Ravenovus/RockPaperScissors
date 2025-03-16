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
    console.log("You picked: "+choices[humanChoice]+" Computer picked: "+choices[computerChoice]);
    if(humanChoice == computerChoice){
        console.log("Tied!");
    }
    else if((humanChoice + 2)%3 == computerChoice){
        console.log("You Win! "+ choices[humanChoice]+" beats "+choices[computerChoice]+".");
        humanScore++;
    }
    else{
        console.log("You Lose! "+ choices[computerChoice]+" beats "+choices[humanChoice]+".");
        computerScore++;
    }
    console.log("Current Score:\nYou: "+humanScore+"\nComputer: "+computerScore);
    return;
}

const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);