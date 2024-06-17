'use strict';
const prompt = require('prompt-sync')();
document.getElementById("greet").innerHTML = categories()
//Arrays for choosing words based on topics
    const words = {
    food: ["apple", "bread", "candy", "pizza", "salad", "steak", "sushi", "toast", "bacon", "lemon"],
    job: ["nurse", "pilot", "actor", "judge", "coach", "clerk", "guard", "agent", "chief", "baker"],
    animals: ["zebra", "tiger", "horse", "panda", "whale", "eagle", "koala", "snake", "shark", "otter"]
        //ask for which categories
function startGame() {
    let selectedCategory;
    while (true) {
        selectedCategory = prompt("Here are your options of categories: Animals, Food, Jobs, Which category would you like?").toLowerCase();
        if (selectedCategory == "animals" || selectedCategory == "food" || selectedCategory == "job") {
            break;
        } else {
            alert("Please enter a 5-letter word.");
    }
    }
    //select random words from certain category
    const wordList = words[selectedCategory];
    targetWord = wordList[Math.floor(Math.random() * wordList.length)];
