const get = require('../../utils/get');
/** Returns the amount of pokemon candy needed to evolve.
 * @param {String} pokemon 
 * @returns {Promise<Number>} */
module.exports = async function candyToEvolve(pokemon) {
    if (pokemon.includes('alolan')) pokemon = pokemon.replace('alolan', '').trim();
    else if (pokemon.includes('galarian')) pokemon = pokemon.replace('galarian', '').trim();
    else if (pokemon.includes('alola')) pokemon = pokemon.replace('alola', '').trim();
    else if (pokemon.includes('galar')) pokemon = pokemon.replace('galar', '').trim();
    let pokeData = await get('pokemon_candy_to_evolve.json');
    const dt = [];
    for (const item of Object.values(pokeData)) { dt.push(...item) }
    let data = dt.filter(pkm => pkm.pokemon_name.toLowerCase() === pokemon.toLowerCase() && pkm.form === 'Normal');
    if (data.length) return data[0].candy_required;
    return undefined;
}