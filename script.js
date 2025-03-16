function getComputerChoice(){
    return (Math.trunc((Math.random()*100)%3));
}

const choices = ["Rock", "Paper", "Scissors"];
console.log(choices[getComputerChoice()]);
console.log(choices[getComputerChoice()]);
console.log(choices[getComputerChoice()]);
console.log(choices[getComputerChoice()]);
console.log(choices[getComputerChoice()]);