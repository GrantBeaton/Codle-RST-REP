'use strict';
const prompt = require('prompt-sync')();
document.getElementById("greet").innerHTML = categories()
//Arrays for choosing words based on topics
    const words = {
    food: ["apple", "bread", "candy", "pizza", "salad", "steak", "sushi", "toast", "bacon", "lemon"],
    job: ["nurse", "pilot", "actor", "judge", "coach", "clerk", "guard", "agent", "chief", "baker"],
    animals: ["zebra", "tiger", "horse", "panda", "whale", "eagle", "koala", "snake", "shark", "otter"]
};
function categories(){
    console.log("Here are your options of categories: \nAnimals \nFood \nJobs")
    let cat = prompt("Which category would you like? ")
    if (cat = "Animals"){

    }
    if (cat = "Food"){

    }
    if (cat = "Jobs"){

    }
}
