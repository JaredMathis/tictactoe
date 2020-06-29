const newGame = require("./newGame");
const assert = require("./assert");

module.exports = availableCells;

function availableCells(game) {
    let result = [];

    let index = 1;
    game.forEach(row => {
        row.forEach(col => {
            if (col !== 'X' && col !== 'O') {
                result.push(index);
            }
            index++;
        })
    })

    return result;
}

(function () {
    let game = newGame();
    let actual = availableCells(game);
    // console.log({actual});
    let expected = [1,2,3,4,5,6,7,8,9];
    assert(() => JSON.stringify(actual) === JSON.stringify(expected));
})();

(function () {
    let game = newGame();
    game[1][1] = 'X';
    let actual = availableCells(game);
    // console.log({actual});
    let expected = [1,2,3,4,6,7,8,9];
    assert(() => JSON.stringify(actual) === JSON.stringify(expected));
})();