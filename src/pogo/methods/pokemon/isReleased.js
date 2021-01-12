const get = require('../../utils/get');
/** Determines if the pokemon is in Pokemon Go, returning true or false appropriately.
 * @param {String} pokemon 
 * @returns {Promise<Boolean>} */
module.exports = async function isReleased(pokemon) {
    if (pokemon.includes('alolan')) pokemon = pokemon.replace('alolan', '').trim();
    else if (pokemon.includes('galarian')) pokemon = pokemon.replace('galarian', '').trim();
    else if (pokemon.includes('alola')) pokemon = pokemon.replace('alola', '').trim();
    else if (pokemon.includes('galar')) pokemon = pokemon.replace('galar', '').trim();
    let released = await get('released_pokemon.json');
    let data = Object.values(released).filter(pkm => pkm.name.toLowerCase() === pokemon.toLowerCase())
    if (data.length) return true;
    return false;
}