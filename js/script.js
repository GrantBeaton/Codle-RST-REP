'use strict';
const prompt = require('prompt-sync')();

let words = [
    "worst", "youth", "happy", "state", "billy", "alert", "after", "fifth", "chase", "hairy", "share", "still", "lease", "links", "youth",
"today", "plain", "boost", "lease", "brand", "threw", "apple", "album", "broad", "noise", "breed", "maybe", "boost", "curve", "draft",
"booth", "eager", "brief", "delay", "raise", "stand", "still", "rapid", "these", "close", "aside", "clear", "still", "their", "plane",
"about", "earth", "bases", "small","booth"
]

let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess = [];
let nextLetter = 0;
let correctguess = words[Math.floor(Math.random() * words.length)]
console.log(correctguess)

let board = document.getElementById("game-board");
document.getElementById("start");

function makeBoard() {

    for (let i = 0; i < totalguesses; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}
makeBoard()


