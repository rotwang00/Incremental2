let money = 10;
let increment = 1;

const moneyDisplay = document.getElementById("moneyDisplay");
const moneyButton = document.getElementById("makeMoney");
const improveFirstButton = document.getElementById("improveFirstButton");

moneyButton.addEventListener("click", () => { addMoney(); }, false);
improveFirstButton.addEventListener("click", () => { improve(); }, false);

function addMoney() {
    money += increment;
    moneyDisplay.innerHTML = ("You have " + money + " dollars");
}

function improve() {
    increment *= 2;
}