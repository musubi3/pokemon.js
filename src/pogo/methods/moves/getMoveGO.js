const get = require('../../utils/get');
/**
 * @param {String} move 
 * @returns {Promise<JSON>} */
module.exports = async function getMoveGO(move) {
    let moveData = await get('fast_moves.json')
    moveData = moveData.concat(await get('charged_moves.json'));
    let data = moveData.filter(m => m.name.toLowerCase() === move.toLowerCase());
    if (data.length) return data[0];
    return undefined;
}