const get = require('../../fetch/get/get');
const { formatPokemon, format } = require('../../utils/utils');

/** Determines whether the pokemon can learn a move.
 * @param {String | Number} pokemon @param {String} move
 * @returns {Promise<Boolean>} */
module.exports = async function canLearn(pokemon, move) {
    if (isNaN(move)) {
        if (isNaN(pokemon)) var pokeCall = await formatPokemon(pokemon);
        else var pokeCall = pokemon;
        let moveCall = format(move);
        let pokeData = await get(`pokemon/${pokeCall}`);
        let moveData = await get(`move/${moveCall}`)
        if (pokeData !== undefined && moveData !== undefined)
            return pokeData['moves'].map(mv => mv.move.name).includes(moveData.name);
    }
    return undefined;
}