const u = require('wlj-utilities');

u.scope(__filename, context => {
    const requires = [
        './move',
        './newGame',
        './availableCells',
        './printGame',
    ];
    
    let command = `
    browserify ${requires.map(f => '-r ' + f).join(' ')} > web/bundle.js
    `;

    u.merge(context, {command});
    u.executeCommand(command);
})
