function userChoice(){
    let choice = prompt("Enter your choice: ");
    let inp;
    if (choice === "Rock"){
        inp = 0;
    }
    else if (choice === "Paper"){
        inp = 1;
    }
    else if (choice === "Scissors"){
        inp = 2;
    }
    else {
        alert("Enter a valid choice!")
        return;
    }
    return inp;
}

function botChoice(){
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    return num;
}

let userScore = 0;
let botScore = 0;

function round(user, bot){
    let a = user;
    let b = bot;

    if (a === b){
        alert("It's a draw!");
    }
    else if ((a === 0 && b === 1) || (a === 1 && b === 2) || (a === 2 && b === 0)){
        alert("You lost!");
        botScore++;
    }
    else if ((a === 0 && b === 2) || (a === 1 && b === 0) || (a === 2 && b === 1)){
        alert("You won!");
        userScore++;
    }
}

function game(){
    let r = 0;
    while(r<5){
        round(userChoice(),botChoice());
        r++;
    }
}

game();

if (userScore > botScore){
    alert("You won the game!");
} 
else if (botScore > userScore){
    alert("You lost the game!");
}
else{
    alert("The game is tied!");
}

alert(`Your Score: ${userScore}\nBot's Score: ${botScore}`);
