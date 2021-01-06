const get = require('../../fetch/fetch');
const { formatPokemon } = require('../../utils/utils');

/** Returns an Object that contains the stats for the pokemon
 * @param {String} pokemon */
module.exports = async function getStats(pokemon) {
    let call = await formatPokemon(pokemon);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let stats = {};
        pokeData.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
        return stats;
    }
    return undefined;
}