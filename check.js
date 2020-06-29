const assert = require("./assert");

module.exports = check;

function check(game) {
    let result;
    result = checkRow(game, 0); if (result.success) return result;
    result = checkRow(game, 1); if (result.success) return result;
    result = checkRow(game, 2); if (result.success) return result;

    return result;
}

function checkRow(game, row) {
    let slots = game[row];
    return winner(slots);
}

function winner(slots) {
    let w = slots[0];
    if (slots[1] === w && slots[2] === w) {
        return {
            success: true,
            winner: w,
        };
    }
    return { 
        success: false,
    };
}

(function () {
    let result = check([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);
    assert(() => result.success === false);
})();
(function () {
    let result = check([
        [1,2,3],
        [4,5,6],
        ['O','O','O'],
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'O');
})();
(function () {
    let result = check([
        [1,2,3],
        ['X','X','X'],
        [7,8,9]
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'X');
})();
(function () {
    let result = check([
        ['X','X','X'],
        [4,5,6],
        [7,8,9]
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'X');
})();