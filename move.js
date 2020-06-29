const availableCells = require("./availableCells");
const check = require("./check");
const assert = require("./assert");
const newGame = require("./newGame");
const printGame = require("./printGame");

module.exports = move;

function move(game, xChoice) {
    choose(game, xChoice, 'X');
    let result = check(game);
    if (result.success === true) {
        return result;
    }

    let oChoice = getChoice(game);
    if (oChoice !== null) {
        choose(game, oChoice, 'O');
        result = check(game);
    }
    return result;
}

function choose(game, choice, player) {
    let count = 0;
    let boardSize = 3;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (game[i][j] === choice) {
                count++;
                game[i][j] = player;
            }
        }
    }
    assert(() => count === 1);
}

function getChoice(game) {
    let ac = availableCells(game);
    if (ac.length === 0) {
        return null;
    }
    let j = JSON.stringify(game);
    let c = {};
    c['[["X",2,3],[4,5,6],[7,8,9]]'] = 5;
    c['[["X","X",3],[4,"O",6],[7,8,9]]'] = 3;
    c['[["X",2,"X"],[4,"O",6],[7,8,9]]'] = 2;
    c['[["X","O","X"],["X","O",6],[7,8,9]]'] = 8;
    c['[["X","X","O"],["X","O",6],[7,8,9]]'] = 7;
    c['[["X","X","O"],[4,"O","X"],[7,8,9]]'] = 7;
    c['[["X","X","O"],["O","O","X"],["X",8,9]]'] = 8;
    c['[["X","X","O"],[4,"O",6],["X",8,9]]'] = 4;
    c['[["X","X","O"],["O","O",6],["X","X",9]]'] = 6;
    c['[["X","X","O"],["O","O",6],["X",8,"X"]]'] = 6;
    c['[["X","X","O"],[4,"O",6],[7,"X",9]]'] = 6;
    if (!c[j]) {
        printGame(game);
        throw new Error('getChoice: not implemented. j: ' + j);
    }
    assert(() => ac.includes(c[j]));
    return c[j];
}

function clone (game) {
    return JSON.parse(JSON.stringify(game));
}

function iterate(game) {
    let ac = availableCells(game);
    ac.forEach(a => {
        let copy = clone(game);
        let result = move(copy, a);
        if (result.success) {
            assert(() => result.winner === 'O');
        }
        iterate(copy);
    })
}

(function () {
    let game = newGame();
    iterate(game);
})();
