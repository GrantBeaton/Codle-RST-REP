//This is the main testing js file, this code is then pasted to other files and categories where specific changes are made


'use strict';
const prompt = require('prompt-sync')();//This also doesn't work
//arrays for different themes, so that it is easier to choose, and remember the word, these are moved to their own files
let normal = [
    "worst", "youth", "happy", "state", "billy", "alert", "after", "fifth", "chase", "hairy", "share", "still", "lease", "links", "youth",
"today", "plain", "boost", "lease", "brand", "threw", "apple", "album", "broad", "noise", "breed", "maybe", "boost", "curve", "draft",
"booth", "eager", "brief", "delay", "raise", "stand", "still", "rapid", "these", "close", "aside", "clear", "still", "their", "plane",
"about", "earth", "bases", "small","booth"
]
let readlineSync = require('readline-sync');
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
//make choice store the correct value depending on the theme
let choice = prompt("Please select a category: normal, colours, countries, animals, or food: ").toLowerCase();

//Sets some variables that are saved
let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess ="";
let word = 0;
let correctguess = choice[Math.floor(Math.random() * choice.length)]//Picks a random word from the category

function trackkey () {
document.addEventListener("keyup", trackkey());//Document does not work, but should track the key presssed by the user to take a guess at the word
    if (guessesRemaining == 0) {//If the user has no guesses left, they can't make another
        return;
    }
    let key = String(e.key)//Sets key to the value given by the user
    if (key === "Backspace" && word !== 0) {//If they pressed backspace, and they have more than 0 letters, it calls subletter, deleting the last letter.
        subletter();
        return;
    }
    if (pressedKey === "Enter" && word == 5) {//If the user pressed enter, and they have 5 letters, it checks their guess
        checkGuess();
        return;
    }
    let found = key//Find the value of the key and sets it to found
    if (!found || found.length > 1) {//If it didn't work, and isn't set or is too long, tries again
        return;
    } else {//If found is set, than it calls addletter, adding the next letter.
        addletter(key);
    }
}

if (choice && (guessesleft > 0)){//Calls the function if it has a word and if the user has enough guesses
    trackkey();
}

function addletter (key) {//Adds the letter to the word
    if (word == 5) {//If the word is five letters long, it doesn't run
        return;
    }
    key = key.toLowerCase()//Makes sure the entered key is lowercase
    let row = document.getElementsByClassName("letter-row")[6 - guessesleft]//Finds the correct row
    let box = row.children[word]//Finds the correct box
    box.textContent = key//Fills the box with the letter
    word += 1//Adds to word so that it won't run infinitely
}

function subletter () {//Subtracts the letter from a word
    let row = document.getElementsByClassName("letter-row")[6 - guessesleft]//Finds the correct row
    let box = row.children[word - 1]//Finds the correct box
    box.textContent = ""//Empties the box
    word -= 1//Doesn't run infintely
}

function checkGuess(guess) {
    if (!choice.includes(guess)) {//If a word is not in the category, false.
        console.log("Word not in the list.");
        return false;
    }
    if (!choice.includes(correctguess)) {// If the choice is the right guess, returns
      return;
    }
    let feedback = ["gray", "gray", "gray", "gray", "gray"];
  
    for (let i = 0; i < 5; i++) {
        if (guess[i] == correctguess[i]) {//Checks if the current letter is within the word and is in the right spot
            feedback += "G"; // green
        } else if (correctguess.includes(guess[i])) {//Checks if the current letter is within the word, but in the wrong spot
            feedback += "Y"; // yellow
        } else {//If the word does not include the letter, it then becomes red
            feedback += "R"; // red
        }
        return feedback;//Tells the colours for each of the letters
    }
}

function userguess() {
while (guessesleft > 0) {//Sets up a while loop that asks the user for guesses
    let guess = prompt("Enter your guess: ").toLowerCase();//Prompts the user
    if (!checkGuess(guess)) {//If the user did not get it right, continues
        continue;
    }
}
}
if (guess){
userguess();
}
function keyboardpress(){//Should track if the user clicked the on-screen keyboard
    document.getElementById("keyboard-cont").addEventListener("click", keyboardpress());//Would track the clicked letter if document worked
        let clickedkey = e.clickedkey //Makes the value fo clickedkey the one that the user clicked
        if (!clickedkey.classList.contains("keyboard-button")) {//If it can't find a keyboard button, returns
            return;
        }
        let key = clickedkey.textContent//Sets the value of key to the clickedkey
        if (key === "Del") {//If the user pressed del, it calls subletter
            subletter();
        } 
        document.dispatchEvent(KeyboardEvent("keyup", key))//Should work with document, stops the code and waits for next clicked key
    }
if (document.getElementById("keyboard-cont")){//If it can find the right key
    keyboardpress();//Runs keyboardpress
}

