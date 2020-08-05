const gameSelection =['rock', 'paper', 'scissors']

function computerPlay() {
    let compChoice = gameSelection[Math.floor(Math.random()* gameSelection.length)]
    return compChoice
}
function userPlay() {
    let input = prompt('rock, paper, scissors')
    let userSelection= input.trim().toLowerCase()
    return input
}

function makeSelection(playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" && computerSelection === "scissors") ||
        (playerSelection == "paper" && computerSelection === "rock") ||
        (playerSelection == "scissors" && computerSelection === "paper")
    ) {
        return 'Win'
    } else if (
        (playerSelection == "rock" && computerSelection === "paper") ||
        (playerSelection == "paper" && computerSelection === "scissors") ||
        (playerSelection == "scissors" && computerSelection === "scissors")
    ){
        return 'Lose'
    } else {
        return 'Tie'
    }
}
function game() {
    let playerScore = 0
    let computerScore = 0

    var i;
    for (let i = 0; i < 4; i++) {
        let playerSelection = userPlay()
        let computerSelection = computerPlay()
        console.log(`You selected: ${playerSelection}`)
        console.log(`Computer selected: ${computerSelection}`)
        let resultOutput = makeSelection(playerSelection, computerSelection)

        if (resultOutput.includes("win", 3)) {
            playScore++
          } else {
            computerScore++
        }
    }
    if (playerScore < computerScore) {
        console.log("Oops !!! You lost!!")
      } else if (playerScore > computerScore) {
        console.log("Hurray !!! You won!!")
      } else {
        console.log("Its a tie")
      }
    }
    game()