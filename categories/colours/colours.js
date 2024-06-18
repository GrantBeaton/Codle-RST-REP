'use strict';
const prompt = require('prompt-sync')();

var readlineSync = require('readline-sync');

let colours = [
    "amber", "ashen", "azure", "beige", "beryl", "black", "blond", "blush", "brown", "coral", "cream", "dusky", "ebony", "eosin", "flame",
"green", "gules", "hazel", "henna", "hoary", "indol", "ivory", "khaki", "lemon", "liard", "liart", "lilac", "livid", "lovat", "lyart",
"mauve", "milky", "mocha", "mousy", "murex", "ochre", "olive", "orcin", "orpin", "pansy", "peach", "pearl", "rouge", "ruddy", "sable",
"sandy", "sepia", "smoky", "snowy","sooty", "steel", "straw", "taupe", "tawny", "topaz", "unmber", "virid","wheat","white"
]
let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess ="";
let correctguess = colours[Math.floor(Math.random() * colours.length)]
let nextletter = 0;

function shadeKeyBoard(letter, color) {
    for (let elem of document.getElementsByClassName("keyboard-button")) {
      if (elem.textContent === letter) {
        let oldColor = elem.style.backgroundColor;
        if (oldColor === "green") {
          return;
        }
        if (oldColor === "yellow" && color !== "green") {
          return;
        }
        elem.style.backgroundColor = color;
        break;
      }
    }
  }
  
  function checkGuess() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesleft];
    let guessString = "";
    let rightGuess = Array.from(correctguess);
  
    for (const val of currentguess) {
      guessString += val;
    }
    if (guessString.length != 5) {
      return;
    }
    if (!colours.includes(guessString)) {
      return;
    }
    let letterColor = ["gray", "gray", "gray", "gray", "gray"];
  
    for (let i = 0; i < 5; i++) {
      if (rightGuess[i] == currentguess[i]) {
        letterColor[i] = "green";
        rightGuess[i] = "#";
      }
    }
    for (let i = 0; i < 5; i++) {
      if (letterColor[i] == "green") continue;
  
      for (let j = 0; j < 5; j++) {
        if (rightGuess[j] == currentguess[i]) {
          letterColor[i] = "yellow";
          rightGuess[j] = "#";
        }
      }
    }
}

function insertLetter(pressedkey) {
    if (nextletter === 5) {
      return;
    }
    pressedkey = pressedkey.toLowerCase();
    let row = document.getElementsByClassName("letter-row")[6 - guessesleft];
    let box = row.children[nextletter];
    box.textContent = pressedkey;
    box.classList.add("filled-box");
    currentguess.push(pressedkey);
    nextletter += 1;
  }

  document.addEventListener("keyup", (e) => {
    if (guessesleft === 0) {
      return;
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
  });
    if (!target.classList.contains("keyboard-button")) {
      return;
    }
    let key = target.textContent;
    if (key === "Del") {
      key = "Backspace";
    }
    shadeKeyBoard(letter, color);
