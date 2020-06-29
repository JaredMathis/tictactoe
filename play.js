const newGame = require("./newGame");
const printGame = require("./printGame");
const availableCells = require("./availableCells");
const readlineSync = require('readline-sync');
const move = require("./move");

function play() {
    let game = newGame();

    while (true) {
        printGame(game);
        let available = availableCells(game);
        if (available.length === 0) {
            break;
        }

        let choice;
        while (true) {
            let cell = readlineSync.question(`Which cell? (${available.join(", ")}) `)
            choice = parseInt(cell, 10);
    
            if (available.includes(choice)) {
                break;
            }
            console.log('Invalid cell');
        }
    
        move(game, choice);

        let winner = check(game);
    }
}

play();