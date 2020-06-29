module.exports = assert;

function assert(lambda) {
    let result = lambda();
    if (result !== true) {
        throw new Error('Assert failed: ' + lambda);
    }
}