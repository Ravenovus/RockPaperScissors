function getComputerChoice(){
    return (Math.trunc((Math.random()*100)%3));
}

function getHumanChoice(){
    let choice = prompt("Chose now!");
    let answer = 0;
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

const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
