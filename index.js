function rollDice() {
    return Math.floor(Math.random()*6)+1;
}

var num1 = rollDice();
var num2 = rollDice();

document.querySelector(".img1").setAttribute("src", "images/dice" + num1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + num2 + ".png");

if (num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (num1 < num2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "It's a Tie!";
}
