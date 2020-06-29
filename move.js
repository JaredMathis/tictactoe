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
    c['[["X","X","O"],["X","O","O"],[7,"X",9]]'] = 9;
    c['[["X","X","O"],[4,"O","O"],["X","X",9]]'] = 9;
    c['[["X","X","O"],[4,"O","O"],[7,"X","X"]]'] = 4;
    c['[["X","X","O"],[4,"O",6],[7,8,"X"]]'] = 7;
    c['[["X","O","X"],[4,"O","X"],[7,8,9]]'] = 8;
    c['[["X","O","X"],[4,"O",6],["X",8,9]]'] = 8;
    c['[["X","O","X"],[4,"O",6],[7,"X",9]]'] = 4;
    c['[["X","O","X"],["O","O","X"],[7,"X",9]]'] = 9;
    c['[["X","O","X"],["O","O",6],["X","X",9]]'] = 6;
    c['[["X","O","X"],["O","O",6],[7,"X","X"]]'] = 6;
    c['[["X","O","X"],[4,"O",6],[7,8,"X"]]'] = 8;
    c['[["X",2,3],["X","O",6],[7,8,9]]'] = 7;
    c['[["X","X",3],["X","O",6],["O",8,9]]'] = 3;
    c['[["X",2,"X"],["X","O",6],["O",8,9]]'] = 2;
    c['[["X","O","X"],["X","O","X"],["O",8,9]]'] = 8;
    c['[["X","O","X"],["X","O",6],["O","X",9]]'] = 6;
    c['[["X","O","X"],["X","O",6],["O",8,"X"]]'] = 6;
    c['[["X",2,3],["X","O","X"],["O",8,9]]'] = 8;
    c['[["X","X",3],["X","O","X"],["O","O",9]]'] = 9;
    c['[["X",2,"X"],["X","O","X"],["O","O",9]]'] = 9;
    c['["X",2,3],["X","O","X"],["O","O","X"]]'] = 2;
    c['[["X",2,3],["X","O","X"],["O","O","X"]]'] = 2;
    c['[["X",2,3],["X","O",6],["O","X",9]]'] = 3;
    c['[["X",2,3],["X","O",6],["O",8,"X"]]'] = 3;
    c['[["X",2,3],[4,"O","X"],[7,8,9]]'] = 8;
    c['[["X","X",3],[4,"O","X"],[7,"O",9]]'] = 3;
    c['[["X","X","O"],["X","O","X"],[7,"O",9]]'] = 7;
    c['[["X","X","O"],[4,"O","X"],["X","O",9]]'] = 4;
    c['[["X","X","O"],[4,"O","X"],[7,"O","X"]]'] = 4;
    c['[["X",2,"X"],[4,"O","X"],[7,"O",9]]'] = 2;
    c['[["X",2,3],["X","O","X"],[7,"O",9]]'] = 2;
    c['[["X",2,3],[4,"O","X"],[7,"O","X"]]'] = 2;
    c['[["X",2,3],[4,"O","X"],["X","O",9]]'] = 2;
    c['[["X",2,3],[4,"O",6],["X",8,9]]'] = 4;
    c['[["X",2,3],[4,"O",6],["X",8,9]]'] = 4;
    c['[["X","X",3],[4,"O","O"],["X",8,9]]'] = 4;
    c['[["X",2,"X"],[4,"O","O"],["X",8,9]]'] = 4;
    c['[["X","X",3],["O","O",6],["X",8,9]]'] = 6;
    c['[["X",2,"X"],["O","O",6],["X",8,9]]'] = 6;
    c['[["X",2,3],["O","O","X"],["X",8,9]]'] = 2;
    c['[["X","O","X"],["O","O","X"],["X",8,9]]'] = 8;
    c['[["X","O",3],["O","O","X"],["X","X",9]]'] = 9;
    c['[["X","O",3],["O","O","X"],["X",8,"X"]]'] = 8;
    c['[["X",2,3],["O","O",6],["X","X",9]]'] = 6;
    c['[["X",2,3],["O","O",6],["X",8,"X"]]'] = 6;
    c['[["X",2,3],[4,"O",6],[7,"X",9]]'] = 4;
    c['[["X","X",3],["O","O",6],[7,"X",9]]'] = 6;
    c['[["X",2,"X"],["O","O",6],[7,"X",9]]'] = 6;
    c['[["X",2,3],["O","O","X"],[7,"X",9]]'] = 3;
    c['[["X","X","O"],["O","O","X"],[7,"X",9]]'] = 7;
    c['[["X",2,"O"],["O","O","X"],["X","X",9]]'] = 9;
    c['[["X",2,"O"],["O","O","X"],[7,"X","X"]]'] = 7;
    c['[["X",2,3],["O","O",6],[7,"X","X"]]'] = 7;
    c['[["X","X",3],["O","O",6],["O","X","X"]]'] = 3;
    c['[["X",2,"X"],["O","O",6],["O","X","X"]]'] = 6;
    c['[["X",2,3],["O","O","X"],["O","X","X"]]'] = 3;
    c['["X",2,3],[4,"O",6],[7,8,"X"]]'] = 3;
    c['[["X",2,3],[4,"O",6],[7,8,"X"]]'] = 2;
    c['[["X","O",3],["X","O",6],[7,8,"X"]]'] = 8;
    c['[["X","O",3],[4,"O","X"],[7,8,"X"]]'] = 8;
    c['[["X","O",3],[4,"O",6],["X",8,"X"]]'] = 8;
    c['[["X","O",3],[4,"O",6],[7,"X","X"]]'] = 7;
    c['[["X","O","X"],[4,"O",6],["O","X","X"]]'] = 6;
    c['[["X","O",3],["X","O",6],["O","X","X"]]'] = 3;
    c['[["X","O",3],[4,"O","X"],["O","X","X"]]'] = 3;
    c['[[1,"X",3],[4,5,6],[7,8,9]]'] = 5;
    c['[[1,"X","X"],[4,"O",6],[7,8,9]]'] = 1;
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

function iterate(game, choices) {
    if (!choices) {
        choices = [];
    }
    let ac = availableCells(game);
    ac.forEach(a => {
        choices.push(a);
        let copy = clone(game);
        let result = move(copy, a);
        if (result.success) {
            if (result.winner === 'X') {
                console.log({choices});
            }
            assert(() => result.winner === 'O');
        } else {
            iterate(copy, choices);
        }
        choices.pop();
    })
}

(function () {
    let game = newGame();
    iterate(game);
})();
