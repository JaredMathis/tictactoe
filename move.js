const availableCells = require("./availableCells");

module.exports = move;

function move(game, choice) {
    choose(game, choice, 'X');
    let available = availableCells(game);
    choose(game, available[0], 'O');
}

function choose(game, choice, player) {
    let boardSize = 3;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (game[i][j] === choice) {
                game[i][j] = player;
            }
        }
    }
}