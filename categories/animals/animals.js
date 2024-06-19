'use strict';
const prompt = require('prompt-sync')();

var readlineSync = require('readline-sync');

let animals = [
    "bison", "camel", "chimp", "coati", "crane", "dingo", "fitch", "hippo", "horse", "hyena", "koala", "lemur", "llama", "moose", "mouse", "otter", 
"panda", "puppy", "rhino", "sheep", "skunk", "sloth", "tiger", "whale", "zebra"
]

//Sets some variables that are saved
let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess ="";
let word = 0;
let correctguess = animals[Math.floor(Math.random() * animals.length)]//Picks a random word from the category

function trackkey () {
document.addEventListener("keyup", (e) => {//Document does not work, but should track the key presssed by the user to take a guess at the word
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
    let found = key.match(/[a-z]/gi)//Find the value of the key and sets it to found
    if (!found || found.length > 1) {//If it didn't work, and isn't set or is too long, tries again
        return;
    } else {//If found is set, than it calls addletter, adding the next letter.
        addletter(key);
    }
})
}
if (animals && (guessesRemaining > 0)){//Calls the function if it has a word and if the user has enough guesses
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
    box.classList.add("filled-box")//Adds a box
    currentguess.push(key)//Pushes it to teh start
    word += 1//Adds to word so that it won't run infinitely
}

function subletter () {//Subtracts the letter from a word
    let row = document.getElementsByClassName("letter-row")[6 - guessesleft]//Finds the correct row
    let box = row.children[word - 1]//Finds the correct box
    box.textContent = ""//Empties the box
    box.classList.remove("filled-box")//Gets rid of it
    currentguess.pop()//Changes the currenet guess
    word -= 1//Doesn't run infintely
}

function checkGuess(guess) {
    if (!animals.includes(guess)) {//If a word is not in the category, false.
        console.log("Word not in the list.");
        return false;
    }
    if (!animals.includes(correctguess)) {// If the input is the right guess, returns
      return;
    }
    let feedback = ["gray", "gray", "gray", "gray", "gray"];
  
    for (let i = 0; i < 5; i++) {
        if (guess[i] == correctguess[i]) {//Checks if the current letter is within the word and is in the right spot
            feedback += "G"; // green
        } else if (correctGuess.includes(guess[i])) {//Checks if the current letter is within the word, but in the wrong spot
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
    document.getElementById("keyboard-cont").addEventListener("click", (e) => {//Would track the clicked letter if document worked
        let clickedkey = e.clickedkey //Makes the value fo clickedkey the one that the user clicked
        if (!clickedkey.classList.contains("keyboard-button")) {//If it can't find a keyboard button, returns
            return;
        }
        let key = clickedkey.textContent//Sets the value of key to the clickedkey
        if (key === "Del") {//If the user pressed del, it calls subletter
            subletter();
        } 
        document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))//Should work with document, stops the code and waits for next clicked key
    })
}
if (document.getElementById("keyboard-cont")){//If it can find the right key
    keyboardpress();//Runs keyboardpress
}

