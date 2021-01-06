let get = require('../src/methods/moves/getMove')
async function test() {
    console.log((await get('lugia')));
}

test();