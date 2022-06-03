const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        singleRound(e.target.id)

    });
  });

const results = document.querySelector('#results')

const scoreBoard = document.querySelector('#scoreboard')
  function computerPlay() {
    let choice = Math.floor(Math.random()*3)
    if (choice == 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playerSelection() {
    let choice = prompt("Choose Rock Paper or Scissors!")
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice
    }
    else {
        throw "not an option"
    }
}
let playerScore = 0
let computerScore = 0

function updateScore () {
    scoreBoard.textContent = "YOU: " + playerScore + " - CPU: " + computerScore
}
function singleRound(id) {

    let pChoice = id
    let cChoice = computerPlay()
    if (pChoice == cChoice) {
        results.textContent = 'TIE'
    }
    else if (pChoice == "rock") {
        if (cChoice == "paper") {
            results.textContent = "LOSS"
            computerScore += 1
            updateScore()
        }   
        else {
            results.textContent = "WIN"
            playerScore += 1
            updateScore()
        }
    }   
    else if (pChoice == "paper") {
        if (cChoice =="rock") {
            results.textContent = "WIN"
            playerScore += 1
            updateScore()
        }  
        else {
            results.textContent = "LOSS"
            computerScore += 1
            updateScore()
        }
    }
    else {
        if (cChoice == "rock") {
            results.textContent = "LOSS"
            computerScore += 1
            updateScore()
        }
        else {
            results.textContent = "WIN"
            playerScore += 1
            updateScore()
        }
    }
    if (playerScore == 5) {
        playerScore = 0
        computerScore = 0
        scoreBoard.textContent = "WINNER"
        results.textContent = ''
        return
    }
    else if (computerScore == 5) {
        playerScore = 0
        computerScore = 0
        scoreBoard.textContent = "LOSER"
        results.textContent = ''
        return
    }
}

