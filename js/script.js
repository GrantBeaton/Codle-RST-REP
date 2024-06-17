'use strict';
const prompt = require('prompt-sync')();


let colours = [
    "amber", "ashen", "azure", "beige", "beryl", "black", "blond", "blush", "brown", "coral", "cream", "dusky", "ebony", "eosin", "flame",
"green", "gules", "hazel", "henna", "hoary", "indol", "ivory", "khaki", "lemon", "liard", "liart", "lilac", "livid", "lovat", "lyart",
"mauve", "milky", "mocha", "mousy", "murex", "ochre", "olive", "orcin", "orpin", "pansy", "peach", "pearl", "rouge", "ruddy", "sable",
"sandy", "sepia", "smoky", "snowy","sooty", "steel", "straw", "taupe", "tawny", "topaz", "unmber", "virid","wheat","white"
]


document.getElementById("start_the_game").addEventListener("totalguesses", makeBoard());

let totalguesses = 6;
let guessesleft = totalguesses;
let currentguess = prompt("First word");
let correctguess = words[Math.floor(Math.random() * words.length)]

let board = document.getElementById("game-board");

function makeBoard(){
    for (let i = 0; i < totalguesses; i++) {
        let row = document.createElement("div")
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

