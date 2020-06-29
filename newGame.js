const assert = require("./assert");

module.exports = newGame;

function newGame() {
    let index = 1;
    let result = [];
    let boardSize = 3;
    for (let i = 0; i < boardSize; i++) {
        result.push([]);
        for (let j = 0; j < boardSize; j++) {
            result[i].push(index);
            index++;
        }
    }
    return result;
}

(function () {
    let actual = newGame();
    //console.log(actual)
    let expected = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
    assert(() => JSON.stringify(expected) === JSON.stringify(actual));
})();