const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        singleRound(e.target.id)

    });
  });

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

function singleRound(id) {
    let pChoice = id
    let cChoice = computerPlay()
    if (pChoice == cChoice) {
        console.log("tie")
        return "tie"
    }
    else if (pChoice == "rock") {
        if (cChoice == "paper") {
            console.log("loss")
            return "loss"
        }   
        else {
            console.log("win")
            return "win"
        }
    }   
    else if (pChoice == "paper") {
        if (cChoice =="rock") {
            console.log("win")
            return "win"
        }  
        else {
            console.log("loss")
            return "loss"
        }
    }
    else {
        if (cChoice == "rock") {
            console.log("loss")
            return "loss"
        }
        else {
            console.log("win")
            return "win"
        }
    }
}

