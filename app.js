let money = 0;
let increment = 1;
let improvementCost = 10;

const moneyDisplay = document.getElementById("moneyDisplay");
const moneyButton = document.getElementById("makeMoney");
const improveFirstButton = document.getElementById("improveFirstButton");

moneyButton.addEventListener("click", () => { addMoney(); }, false);
improveFirstButton.addEventListener("click", () => { improve(); }, false);

function addMoney() {
    money += increment;
    moneyDisplay.innerHTML = `You have $${money}`;
}

function improve() {
    if (improvementCost > money) return;

    money -= improvementCost;
    increment *= 2;
    improvementCost *= 5;
    moneyButton.innerHTML = `Make $${increment}`;
    improveFirstButton.innerHTML = `Improve first button for $${improvementCost}`;
    moneyDisplay.innerHTML = `You have $${money}`;
}