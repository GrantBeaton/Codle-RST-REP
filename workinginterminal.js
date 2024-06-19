'use strict';

const prompt = require('prompt-sync')();
//arrays for different themes, so they cna be easily picked out and stored into the right answer.
let normal = [
    "worst", "youth", "happy", "state", "billy", "alert", "after", "fifth", "chase", "hairy", "share", "still", "lease", "links", "youth",
    "today", "plain", "boost", "lease", "brand", "threw", "apple", "album", "broad", "noise", "breed", "maybe", "boost", "curve", "draft",
    "booth", "eager", "brief", "delay", "raise", "stand", "still", "rapid", "these", "close", "aside", "clear", "still", "their", "plane",
    "about", "earth", "bases", "small", "booth"
];

let colours = [
    "amber", "ashen", "azure", "beige", "beryl", "black", "blond", "blush", "brown", "coral", "cream", "dusky", "ebony", "eosin", "flame",
    "green", "gules", "hazel", "henna", "hoary", "indol", "ivory", "khaki", "lemon", "liard", "liart", "lilac", "livid", "lovat", "lyart",
    "mauve", "milky", "mocha", "mousy", "murex", "ochre", "olive", "orcin", "orpin", "pansy", "peach", "pearl", "rouge", "ruddy", "sable",
    "sandy", "sepia", "smoky", "snowy", "sooty", "steel", "straw", "taupe", "tawny", "topaz", "umber", "virid", "wheat", "white"
];

let countries = [
    "aruba", "benin", "chile", "china", "egypt", "gabon", "ghana", "haiti", "india", "italy", "japan", "kenya", "libya", "macau",
    "malta", "nauru", "nepal", "niger", "palau", "qatar", "samoa", "spain", "sudan", "syria", "tonga", "yemen"
];

let animals = [
    "bison", "camel", "chimp", "coati", "crane", "dingo", "fitch", "hippo", "horse", "hyena", "koala", "lemur", "llama", "moose", "mouse", "otter",
    "panda", "puppy", "rhino", "sheep", "skunk", "sloth", "tiger", "whale", "zebra"
];

let food = [
    "fries", "prune", "apple", "froyo", "punch", "fruit", "bacon", "grape", "quail", "bagel", "gravy", "ramen", "basil", "guava", "salad", "beans",
    "honey", "salsa", "icing", "squid", "berry", "jelly", "steak", "jerky", "bread", "juice", "sugar", "broth", "kebab", "sushi", "candy", "kefir", "syrup",
    "taffy", "lemon", "toast", "chili", "chips", "mango", "melon", "trout", "mochi", "cocoa", "nacho", "cream", "olive", "vodka", "crepe", "onion", "wafer",
    "oreos", "wings", "curry", "pasta", "peach", "yeast", "pecan", "donut", "flour", "pizza"
];
//instructions
console.log("Welcome to Codle!");
console.log("Instructions: you can choose from 5 different themes to guess a word that is different and unique! Every word must have 5 letters!");
console.log("Once you've entered a word, if the word is not in the list it will say so, but if it is in the list: \nRed means wrong letter \nYellow means the letter is included \nGreen means you got the placement of the letter right!");
console.log("Good luck have fun!");
//the prompt that ask the user to select a theme, if user type invalid, the code exit, if not choice will be equal to the theme and use chocie to know which theme is picked
let ask = prompt("Please select a category: normal, colours, countries, animals, or food: ");
let answer = ask.toLowerCase();
let choice;

if (answer == "normal") {
    choice = normal;
} else if (answer == "colours") {
    choice = colours;
} else if (answer == "countries") {
    choice = countries;
} else if (answer == "animals") {
    choice = animals;
} else if (answer == "food") {
    choice = food;
} else {
    console.log("Invalid category.");
    process.exit(1);
}
//choose random word, have 6 total guesses, gueesLeft will be substracted by 1 
let totalGuesses = 6;
let guessesLeft = totalGuesses;
let correctGuess = choice[Math.floor(Math.random() * choice.length)];
//check if the word is a 5 letter word, if not it will return Guess must be a 5-letter word
function checkGuess(guess) {
    if (guess.length !== 5) {
        console.log("Guess must be a 5-letter word.");
        return false;
    }
    if (!choice.includes(guess)) {
        console.log("Word not in the list.");//this check if choice(the theme you chose, in an array) have the word the user input
        return false;
    }
    return true;
}

function CheckFeedback(guess, correctGuess) {
    let feedback = "";
    for (let i = 0; i < 5; i++) {
        if (guess[i] == correctGuess[i]) {
            feedback += "Green "; // Green if letter is at right place 
        } else if (correctGuess.includes(guess[i])) {
            feedback += "Yellow "; // Yellow if letter is included
        } else {
            feedback += "Red "; // Red if letter not included
        }
    }
    return feedback;
}

while (guessesLeft > 0) {
    let guess = prompt("Enter your guess: ").toLowerCase();//ask user for their guess
    if (!checkGuess(guess)) {
        continue;
    }
    let feedback = CheckFeedback(guess, correctGuess);
    console.log(feedback);
    if (guess == correctGuess) {//if user's input in the guess prompt is equal to the word selected, then it will display: Congratulations! You guessed the correct word.
        console.log("Congratulations! You guessed the correct word.");
        break;
    }
    guessesLeft--;
    console.log(`You have ${guessesLeft} guesses left.`);
}

if (guessesLeft == 0) { //if guesses ran out, then the game is over, it will then display the correct word
    console.log(`Sorry, you've run out of guesses. The correct word was "${correctGuess}".`);
}

