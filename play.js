const newGame = require("./newGame");
const printGame = require("./printGame");

function play() {
    let game = newGame();
    printGame(game);
}

play();