module.exports = printGame;

function printGame(game) {
    printRow(game[0]);
    printEmptyRow();
    printRow(game[1]);
    printEmptyRow();
    printRow(game[2]);
}

function printRow(row) {
    console.log(row.join('|'));
}

function printEmptyRow() {
    console.log(`-----`);
}