const get = require('../../fetch/fetch');
const { formatPokemon, format } = require('../../utils/utils');

/** Determines whether the pokemon can learn a move.
 * @param {String} pokemon @param {String} move 
 * @returns {Boolean} */
module.exports = async function canLearn(pokemon, move) {
    let pokeCall = await formatPokemon(pokemon);
    let moveCall = format(move);
    let pokeData = await get(`pokemon/${pokeCall}`);
    let moveData = await get(`move/${moveCall}`)
    if (pokeData !== undefined && moveData !== undefined)
        return pokeData['moves'].map(mv => mv.move.name).includes(moveData.name);
    return undefined;
}