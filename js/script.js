'use strict';
const prompt = require('prompt-sync')();

let normal = [
    "worst", "youth", "happy", "state", "billy", "alert", "after", "fifth", "chase", "hairy", "share", "still", "lease", "links", "youth",
"today", "plain", "boost", "lease", "brand", "threw", "apple", "album", "broad", "noise", "breed", "maybe", "boost", "curve", "draft",
"booth", "eager", "brief", "delay", "raise", "stand", "still", "rapid", "these", "close", "aside", "clear", "still", "their", "plane",
"about", "earth", "bases", "small","booth"
]
var readlineSync = require('readline-sync');
let ask = prompt("Please select a category: normal, colours, countries, animals, or food")
let answer = ask.toLowerCase()
let colours = [
    "amber", "ashen", "azure", "beige", "beryl", "black", "blond", "blush", "brown", "coral", "cream", "dusky", "ebony", "eosin", "flame",
"green", "gules", "hazel", "henna", "hoary", "indol", "ivory", "khaki", "lemon", "liard", "liart", "lilac", "livid", "lovat", "lyart",
"mauve", "milky", "mocha", "mousy", "murex", "ochre", "olive", "orcin", "orpin", "pansy", "peach", "pearl", "rouge", "ruddy", "sable",
"sandy", "sepia", "smoky", "snowy","sooty", "steel", "straw", "taupe", "tawny", "topaz", "unmber", "virid","wheat","white"
]

let countries = [
    "aruba", "benin", "chile", "china", "chile", "egypt", "gabon", "ghana", "haiti", "india", "italy", "japan", "kenya", "libya", "macau",
"malta", "nauru", "nepal", "niger", "palau", "qatar", "samoa", "spain", "sudan", "syria", "tonga", "yemen"
]

let animals = [
    "bison", "camel", "chimp", "coati", "crane", "dingo", "fitch", "hippo", "horse", "hyena", "koala", "lemur", "llama", "moose", "mouse", "otter", 
"panda", "puppy", "rhino", "sheep", "skunk", "sloth", "tiger", "whale", "zebra"
]

let food = [
    "fries", "prune", "apple", "froyo", "punch", "fruit", "bacon", "grape", "quail", "bagel", "gravy", "ramen", "basil", "guava", "salad", "beans", 
"honey", "salsa", "icing", "squid", "berry", "jelly", "steak", "jerky", "bread", "juice", "sugar", "broth", "kebab", "sushi", "candy", "kefir", "syrup", 
"taffy", "lemon", "toast", "chili", "chips", "mango", "melon", "trout", "mochi", "cocoa", "nacho", "cream", "olive", "vodka", "crepe", "onion", "wafer", 
"oreos", "wings", "curry", "pasta", "peach", "yeast", "pecan", "donut", "flour", "pizza"
]
let choice;
if (answer == normal){
    choice = normal;
}
if (answer == colours){
    choice = colours
}
if (answer == countries){
    choice = countries;
}
if (answer == animals){
    choice = animals;
}
if (answer == food){
    choice = food;
}
let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess ="";
let correctguess = choice[Math.floor(Math.random() * choice.length)]
let nextletter = 0;

function checkGuess(guess) {
    if (guess.length !== 5) {
        console.log("Guess must be a 5-letter word.");
        return false;
    }
    if (!choice.includes(guess)) {
        console.log("Word not in the list.");
        return false;
    }
    if (guessString.length != 5) {
      return;
    }
    if (!choice.includes(guessString)) {
      return;
    }
    let letterColor = ["gray", "gray", "gray", "gray", "gray"];
  
    for (let i = 0; i < 5; i++) {
        if (guess[i] == correctGuess[i]) {
            feedback += "G"; // green
        } else if (correctGuess.includes(guess[i])) {
            feedback += "Y"; // yellow
        } else {
            feedback += "R"; // red
        }
    }
    return feedback;
}

while (guessesLeft > 0) {
    let guess = prompt("Enter your guess: ").toLowerCase();
    if (!checkGuess(guess)) {
        continue;
    }
    let pressedkey = String(e.key);
    if (pressedkey === "Backspace" && nextletter !== 0) {
      deleteLetter();
      return;
    }
    if (pressedkey === "Enter") {
      checkGuess();
      return;
    }
    let found = pressedkey.match();
    if (!found || found.length > 1) {
      return;
    } else {
      insertLetter(pressedkey);
    }
  };
    if (!target.classList.contains("keyboard-button")) {
      return;
    }
    let key = target.textContent;
    if (key === "Del") {
      key = "Backspace";
    }
    shadeKeyBoard(letter, color);




