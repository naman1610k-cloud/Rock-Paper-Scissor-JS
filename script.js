// Computer Choice ;
const winMap = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
}

const Uchoice = document.querySelectorAll(".circle");

let userScore = 0;
let compScore = 0;

let UserEL = document.getElementById("User");
let CompEL = document.getElementById("Comp");
const Reset = document.getElementById("reset");
const resultEL = document.getElementById("result");

Uchoice.forEach(choice => {
    choice.addEventListener("click", () => {

        const Choices = ["Rock", "Paper", "Scissor"]
        const Computer = Choices[Math.floor(Math.random() * Choices.length)];

        const UserChoice = choice.innerText;
        const result = checkWinner(UserChoice, Computer);

        if (result === "User Wins") {
            userScore++;
        } else if (result === "Computer Wins") {
            compScore++
        }

        resultEL.textContent = `User : ${UserChoice} | Computer : ${Computer} |
        👉${result}`;
        updateScore();
        checkGameOver();
    })
})

function checkWinner(user, comp) {
    if (user === comp) {
        return "Draw";
    }

    if (winMap[user] === comp) {
        return "User Wins";
    }

    return "Computer Wins";
}

function updateScore() {
    UserEL.value = userScore;
    CompEL.value = compScore;
}

function resetScore(){
    userScore = 0; 
    compScore = 0;
    resultEL.textContent = "Choose Your Move"
    updateScore()
    Uchoice.forEach(btn => btn.disabled = false)
    Uchoice.forEach(btn => btn.style.cursor = "pointer")
}

Reset.addEventListener("click" , resetScore)

const Winscore = 5 ;

function disableBtn(){
    Uchoice.forEach(btn => btn.disabled = true)
    Uchoice.forEach(btn => btn.style.cursor = "not-allowed")
    
}

function checkGameOver(){
    if(userScore === Winscore || compScore === Winscore){
        resultEL.textContent = userScore === Winscore ? "🎉You Won The Game🎊": "💻 Computer Won the Game";
        disableBtn();
    }
}

