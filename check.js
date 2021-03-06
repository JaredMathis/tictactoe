const assert = require("./assert");

module.exports = check;

function check(game) {
    let result;
    result = checkRow(game, 0); if (result.success) return result;
    result = checkRow(game, 1); if (result.success) return result;
    result = checkRow(game, 2); if (result.success) return result;

    result = checkCol(game, 0); if (result.success) return result;
    result = checkCol(game, 1); if (result.success) return result;
    result = checkCol(game, 2); if (result.success) return result;

    result = checkDiag1(game); if (result.success) return result;
    result = checkDiag2(game); if (result.success) return result;

    return result;
}

function checkDiag2(game) {
    let slots = [
        game[0][2], 
        game[1][1], 
        game[2][0], 
    ];
    return winner(slots);
}

function checkDiag1(game) {
    let slots = [
        game[0][0], 
        game[1][1], 
        game[2][2], 
    ];
    return winner(slots);
}

function checkCol(game, col) {
    let slots = [
        game[0][col], 
        game[1][col], 
        game[2][col], 
    ];
    return winner(slots);
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
        [1,2,'X'],
        [4,'X',6],
        ['X',8,9]
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'X');
})();
(function () {
    let result = check([
        ['X',2,3],
        [4,'O',6],
        [7,8,'X']
    ]);
    assert(() => result.success === false);
})();
(function () {
    let result = check([
        [1,2,'X'],
        [4,5,'X'],
        [7,8,'X']
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'X');
})();
(function () {
    let result = check([
        [1,'O',3],
        [4,'O',6],
        [7,'O',9]
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'O');
})();
(function () {
    let result = check([
        ['X',2,3],
        ['X',5,6],
        ['X',8,9]
    ]);
    assert(() => result.success === true);
    assert(() => result.winner === 'X');
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