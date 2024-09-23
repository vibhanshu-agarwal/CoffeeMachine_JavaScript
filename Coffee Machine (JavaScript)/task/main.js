// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
// const console = require("node:console");
// const console = require("node:console");
const console = require("node:console");

let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;


let option = "";


do {
//Next, your program reads one option from the standard input, which can be "buy", "fill", "take"
    option = input("Write action (buy, fill, take, remaining, exit): ");

//Invoke method based on the command entered
    switch (option) {
        case "buy":
            buyCoffee();
            break;
        case "fill":
            fillCups();
            break;
        case "take":
            takeMoney();
            break;
        case "remaining":
            printState();
            break;
        case "exit":
            break;
        default:
            console.log("Unknown command");
    }
} while (option !== "exit");

/**
 * Prints the current state of the coffee machine.
 *
 * The method outputs information about the available quantities of water, milk, coffee beans, cups, and money.
 *
 * @return {void}
 */
function printState() {
//First, print the current state of the coffee machine
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffee} g of coffee beans`);
    console.log(`${cups} cups of coffee left`);
    console.log(`${money} of money`);
    console.log();
}

function areIngredientsAvailableForEspresso() {
    if (water < 250) {
        console.log("Sorry, not enough water!");
        return false;
    }
    if (coffee < 16) {
        console.log("Sorry, not enough coffee!");
        return false;
    }
    return true;
}

function areIngredientsAvailableForLatte() {
    if (water < 350) {
        console.log("Sorry, not enough water!");
        return false;
    }
    if (milk < 75) {
        console.log("Sorry, not enough milk!");
        return false;
    }
    if (coffee < 16) {
        console.log("Sorry, not enough coffee!");
        return false;
    }
    return true;
}

function areIngredientsAvailableForCappuchino() {
    if (water < 200) {
        console.log("Sorry, not enough water!");
        return false;
    }
    if (milk < 100) {
        console.log("Sorry, not enough milk!");
        return false;
    }
    if (coffee < 12) {
        console.log("Sorry, not enough coffee!");
        return false;
    }
    return true;
}


function areIngredientsAvailableForDalgona() {
    if (water < 50) {
        console.log("Sorry, not enough water!");
        return false;
    }
    if (milk < 200) {
        console.log("Sorry, not enough milk!");
        return false;
    }
    if (coffee < 20) {
        console.log("Sorry, not enough coffee!");
        return false;
    }
    return true;
}

/**
 * Buys a coffee based on user input and updates the coffee machine's resources.
 *
 * The user is prompted to choose a type of coffee (espresso, latte, cappuccino).
 * The method then checks if there are enough ingredients to make the chosen
 * coffee. If so, it deducts the required amount of resources, increases the money
 * collected, and decreases the cups count.
 *
 * @return {void} The function does not return a value.
 */
function buyCoffee() {
    const coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - dalgona, back - to main menu:");

    switch (coffeeType) {
        case "1":
            // For one espresso, the coffee machine needs 250 ml of water and 16 g of coffee beans. It costs $4.
            if (areIngredientsAvailableForEspresso()) {
                water -= 250;
                coffee -= 16;
                money += 4;
                cups--;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "2":
            // For a latte, the coffee machine needs 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7.
            if (areIngredientsAvailableForLatte()) {
                water -= 350;
                milk -= 75;
                coffee -= 20;
                money += 7;
                cups--;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "3":
            // And for a cappuccino, the coffee machine needs 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
            if (areIngredientsAvailableForCappuchino()) {
                water -= 200;
                milk -= 100;
                coffee -= 12;
                money += 6;
                cups--;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "4":
            //And for a dalgona, the coffee machine needs 50 ml of water, 200 ml of milk, 20 g of coffee beans. It costs $8.
            if(areIngredientsAvailableForDalgona()) {
                water -= 200;
                milk -= 50;
                coffee -= 20;
                money += 8;
                cups--;
                console.log("I have enough resources, making you a coffee!");
            }
        case "back":
            break;
        default:
            console.log("Sorry, we don't have this type of coffee");

    }

}

/**
 * Reads input values for the amount of water, milk, coffee beans, and disposable cups to add.
 * Updates the respective quantities and prints the current state.
 *
 * @return {void} This function does not return anything.
 */
function fillCups() {
    const waterInput = input("Write how many ml of water you want to add: ");
    water += Number(waterInput);
    const milkInput = input("Write how many ml of milk you want to add: ");
    milk += Number(milkInput);
    const coffeeInput = input("Write how many grams of coffee beans you want to add: ");
    coffee += Number(coffeeInput);
    const cupsInput = input("Write how many disposable cups you want to add: ");
    cups += Number(cupsInput);
}

/**
 * Deducts the current amount of money and logs the transaction.
 * The global `money` variable is set to 0 after the transaction.
 * Also prints the state after the transaction.
 *
 * @return {void}
 */
function takeMoney() {
    console.log(`I gave you ${money}$`);
    //Set money to 0
    money = 0;
}


