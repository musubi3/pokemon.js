const get = require('../../utils/get');
/** Returns pokemon that could potentially be ditto.
 * @returns {Promise<Array>} */
module.exports = async function possibleDitto() {
    let dittoPkm = await get('possible_ditto_pokemon.json');
    return Object.values(dittoPkm).map(pkm => pkm.name);
}