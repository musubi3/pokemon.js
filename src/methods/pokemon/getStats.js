const get = require('../../fetch/get/get');
const { formatPokemon } = require('../../utils/utils');

/** Returns an Object that contains the stats for the pokemon.
 * @param {String | Numbe} pokemon
 * @returns {Promise<JSON>} */
module.exports = async function getStats(pokemon) {
    if (isNaN(pokemon)) var call = await formatPokemon(pokemon);
    else var call = pokemon;
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let stats = {};
        pokeData.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
        return stats;
    }
    return undefined;
}