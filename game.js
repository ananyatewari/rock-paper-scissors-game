//functionality of the game
const optionButtons = document.querySelectorAll(".options");
optionButtons.forEach( (option) => {
    option.addEventListener ("click", () => {
        computerTurn();
        checkWinner();
    })
} )

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const userAnswer = document.getElementById("user-answer")
const computerAnswer = document.getElementById("computer-answer");
let user;
let computer;
let result;
let endText = document.getElementById("end-text")
let endMessage = document.getElementById("end-message")
const playAgain = document.getElementById("play-again");
// endMessage.style.visibility = "hidden"
// playAgain.style.visibility = "hidden"

rock.addEventListener ("click", () => {
    userAnswer.innerHTML = `<img src = "./assets/rock-hand.png">`
    user = "rock";
    updateScores()
    calculateScore()
})
paper.addEventListener ("click", () => {
    userAnswer.innerHTML = `<img src = "./assets/paper-hand.png">`
    user = "paper";
    updateScores()
    calculateScore()
})
scissor.addEventListener ("click", () => {
    userAnswer.innerHTML = `<img src = "./assets/scissors-hand.png">`
    user = "scissors";
    updateScores()
    calculateScore()
})

function computerTurn(){
    const choose = Math.ceil(Math.random() * 3);
            
        if (choose == 1){
            computer = "rock";
            computerAnswer.innerHTML =  `<img src = "./assets/rock-hand.png">`
        }
        else if (choose == 2){
            computer = "paper";
            computerAnswer.innerHTML = `<img src = "./assets/paper-hand.png">`
        }
        else if (choose == 3){
            computer = "scissors";
            computerAnswer.innerHTML = `<img src = "./assets/scissors-hand.png">`
        }
}

let uScore = document.getElementById("user-score");
let cScore = document.getElementById("computer-score");
var userScore = 0
var computerScore = 0
function updateScores(){
    if (user == "rock" && computer == "paper"){
        computerScore++;
    }
    else if (user == "rock" && computer == "scissors"){
        userScore++;
    }
    else if (user == "paper" && computer == "rock"){
        userScore++;
    }
    else if (user == "paper" && computer == "scissors"){
        computerScore++;
    }
    else if (user == "scissors" && computer == "paper"){
        userScore++;
    }
    else if (user == "scissors" && computer == "rock"){
        computerScore++;
    }
    else if (user == "rock" && computer == "rock"){}
    else if (user == "paper" && computer == "paper"){}
    else if (user == "scissors" && computer == "scissors"){}
    console.log('works');   
    calculateScore()
    uScore.innerHTML = userScore
    cScore.innerHTML = computerScore
}

function calculateScore (){

     if (userScore == 5 || computerScore == 5){
        if(userScore > computerScore){
            endMessage.style.display = "block"
            playAgain.style.display = "block"
            endText.innerText = "You win !"
            endText.style.display = "block"
        }
        else if (userScore < computerScore){
            endMessage.style.display = "block"
            playAgain.style.display = "block"
            endText.innerText = "Computer wins !"
            endText.style.display = "block"
        }        
        else if (userScore == computerScore){
            endMessage.style.display = "block"
            playAgain.style.display = "block"
            endText.innerText = "It's a tie !"
            endText.style.display = "block"
        }
    }
    // else{
    //     uScore.innerHTML = userScore
    //     cScore.innerHTML = computerScore
    // }
}

//functionality of play again button
playAgain.addEventListener ("click", () => {
    window.location.href = "./game.html"
})