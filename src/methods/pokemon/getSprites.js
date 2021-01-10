const get = require('../../fetch/get/get');
const { formatPokemon } = require('../../utils/utils');

/** Returns an Object that contains the sprites for the pokemon.
 * @param {String | Number} pokemon
 * @returns {Promise<JSON>} */
module.exports = async function getSprites(pokemon) {
    if (isNaN(pokemon)) var call = await formatPokemon(pokemon);
    else var call = pokemon;
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) return pokeData.sprites;
    return undefined; 
}