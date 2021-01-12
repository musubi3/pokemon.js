const get = require('../../utils/get');
/**
 * @param {String} pokemon 
 * @returns {Promise<Number>} */
module.exports = async function getMaxCP(pokemon) {
    let pkm = pokemon.toLowerCase();
    let pokeData = await get('pokemon_max_cp.json');
    if (pkm.includes('alola'))
        var data = pokeData.filter(p => pkm.replace('alola', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Alola');
    else if (pkm.includes('alolan'))
        var data = pokeData.filter(p => pkm.replace('alolan', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Alola');
    else if (pkm.includes('galar'))
        var data = pokeData.filter(p => pkm.replace('galar', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Galarian');
    else if (pkm.includes('galarian'))
        var data = pokeData.filter(p => pkm.replace('galarian', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Galarian');
    else var data = pokeData.filter(p => pkm === p.pokemon_name.toLowerCase() && p.form === 'Normal');
    if (data.length) return data[0].max_cp;
    return undefined;
}