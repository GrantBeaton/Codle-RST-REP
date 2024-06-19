'use strict';

const prompt = require('prompt-sync')();
//
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

let totalGuesses = 6;
let guessesLeft = totalGuesses;
let correctGuess = choice[Math.floor(Math.random() * choice.length)];

function checkGuess(guess) {
    if (guess.length !== 5) {
        console.log("Guess must be a 5-letter word.");
        return false;
    }
    if (!choice.includes(guess)) {
        console.log("Word not in the list.");
        return false;
    }
    return true;
}

function provideFeedback(guess, correctGuess) {
    let feedback = "";
    for (let i = 0; i < 5; i++) {
        if (guess[i] == correctGuess[i]) {
            feedback += "G"; // Green
        } else if (correctGuess.includes(guess[i])) {
            feedback += "Y"; // Yellow
        } else {
            feedback += "B"; // Black
        }
    }
    return feedback;
}

while (guessesLeft > 0) {
    let guess = prompt("Enter your guess: ").toLowerCase();
    if (!checkGuess(guess)) {
        continue;
    }
    let feedback = provideFeedback(guess, correctGuess);
    console.log(feedback);
    if (guess == correctGuess) {
        console.log("Congratulations! You guessed the correct word.");
        break;
    }
    guessesLeft--;
    console.log(`You have ${guessesLeft} guesses left.`);
}

if (guessesLeft == 0) {
    console.log(`Sorry, you've run out of guesses. The correct word was "${correctGuess}".`);
}
