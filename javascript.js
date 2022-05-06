
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
console.log(computerPlay())

function playerSelection() {
    let choice = prompt("Choose Rock Paper or Scissors!")
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice
    }
    else {
        throw "not an option"
    }
}

function singleRound() {
    let pChoice = playerSelection()
    let cChoice = computerPlay()
    if (pChoice == cChoice) {
        return "tie"
    }
    else if (pChoice == "rock") {
        if (cChoice == "paper") {
            return "loss"
        }   
        else {
            return "win"
        }
    }   
    else if (pChoice == "paper") {
        if (cChoice =="rock") {
            return "win"
        }  
        else {
            return "loss"
        }
    }
    else {
        if (cChoice == "rock") {
            return "loss"
        }
        else {
            return "win"
        }
    }
}

function game() {
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i<5; i++) {
        let result = singleRound()
        if (result == "win") {
            playerWins++
        }
        else if (result== "loss") {
            computerWins++
        }
        else {
            console.log('Tie - Score: Player - ' + playerWins + ' Computer - ' +computerWins)
            continue
        }

        console.log('Score: Player - ' + playerWins + ' Computer - ' +computerWins)


    }
}

game()