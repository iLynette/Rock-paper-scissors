var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random()*3);
var comChoice = choices[i];
var userPoints = 0;
var comPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = userPoints + " - " + comPoints
}
setInterval(score, 50);
