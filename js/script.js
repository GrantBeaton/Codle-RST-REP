'use strict';
const prompt = require('prompt-sync')();
var readlineSync = require('readline-sync');
let ask = prompt("Please select a category: colour, country")
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

let amimals = [
    “bison”, “camel”, “chimp”, “coati”, “crane”,"dingo”, “fitch”, “hippo”, “horse”, “hyena”, “koala”, “lemur”, “llama”, “moose”, “mouse”, “otter”, 
“panda”, “puppy”, “rhino”, “sheep”, “skunk”, “sloth”, “tiger”, “whale”, “zebra”
]

let food = [
    “Fries”, “Prune”, “Apple”, “Froyo”, “Punch”, “Fruit”, “Bacon”, “Grape”, “Quail”, “Bagel”, “Gravy”, “Ramen”, “Basil”, “Guava”, “Salad”, “Beans”, 
“Honey”, “Salsa”, “Icing”, “Squid”, “Berry”, “Jelly”, “Steak”, “Jerky”, “Bread”, “Juice”, “Sugar”, “Broth”, “Kebab”, “Sushi”, “Candy”, “Kefir”, “Syrup”, 
“Taffy”, “Lemon”, “Toast”, “Chili”, “Chips”, “Mango”, “Melon”, “Trout”, “Mochi”, “Cocoa”, “Nacho”, “Cream”, “Olive”, “Vodka”, “Crepe”, “Onion”, “Wafer”, 
“Crisp”, “Oreos”, “Wings”, “Curry”, “Pasta”, “Peach”, “Yeast”, “Pecan”, “Donut”, “Flour”, “Pizza”
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

