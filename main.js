const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');


let winner = [0, 0];

for (let i = 0;i < buttons.length; i++){
    buttons[i].addEventListener('click', playGame);
}
function playGame(e) {
    //console.log(e.target.innerText);
    let playerSelection =e.target.innerText
    let computerSelection = Math.random();
    //console.log(computerSelection);
    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    }else if (computerSelection <= 0.67) {
        computerSelection = 'Paper';
    }else {
        computerSelection = 'Scissors';
    }
    console.log(playerSelection, computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result);
    if (result == 'Player') {
        result += 'Wins!';
        winner [0]++;
    } else if (result == 'Computer'){
        result += 'Wins';
        winner [1]++;
    }else {
        result += 'results in a tie'
    }
    score.innerHTML = 'Player['+winner[0] +'] Computer['+winner [1]+']';
}
function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }
    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        }else {
            return 'player';
        }
    }
    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        }else {
            return 'Player'
        }  
    }
    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Player';
        }else {
            return 'Computer'
        }
    }     
}