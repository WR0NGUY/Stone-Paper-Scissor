let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playerScore = document.querySelector("#user-score");
const botScore = document.querySelector("#comp-score");

showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        playerScore.innerText = userScore;
        msg.innerText = `You Win. Your: ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        botScore.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your: ${userChoice} `;
        msg.style.backgroundColor = "Red";
    }
}

const drawGame = (userChoice,compChoice) => {
    console.log("game was Draw");
    msg.innerText = `It's a Draw ! ${userChoice} vs ${compChoice} `;
    msg.style.backgroundColor = "Black";
};

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    //Rock, Paper, Scissor
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx]
};

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    //Generating Computers Choice
    const compChoice = genCompChoice();
    console.log("comp Choice =", compChoice);

    if(userChoice === compChoice) {
        drawGame(userChoice,compChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;           
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});