const newGame = require("./newGame");
const printGame = require("./printGame");
const availableCells = require("./availableCells");
const readlineSync = require('readline-sync');

function play() {
    let game = newGame();
    printGame(game);
    let available = availableCells(game);
    readlineSync.question(`Which cell? (${available.join(", ")}) `)
}

play();