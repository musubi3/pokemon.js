const get = require('../../utils/get');
/**
 * @param {String} pokemon 
 * @returns {Promise<JSON>} */
module.exports = async function getStatsGO(pokemon) {
    let pkm = pokemon.toLowerCase();
    if (pkm.split(' ').includes('mega')) {
        let pokeData = await get(`mega_pokemon.json`);
        if (pokeData !== undefined) {
            let data = pokeData.filter(p => p.mega_name.toLowerCase() === pkm);
            if (data.length) {
                const { stats } = data[0];
                return { attack: stats.base_attack, defense: stats.base_defense, stamina: stats.base_stamina }
            }
        }
    } else {
        let pokeData = await get(`pokemon_stats.json`);
        if (pokeData !== undefined) {
            if (pkm.includes('alola'))
                var data = pokeData.filter(p => pkm.replace('alola', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Alola');
            else if (pkm.includes('alolan'))
                var data = pokeData.filter(p => pkm.replace('alolan', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Alola');
            else if (pkm.includes('galar'))
                var data = pokeData.filter(p => pkm.replace('galar', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Galarian');
            else if (pkm.includes('galarian'))
                var data = pokeData.filter(p => pkm.replace('galarian', '').trim() === p.pokemon_name.toLowerCase() && p.form === 'Galarian');
            else var data = pokeData.filter(p => pkm === p.pokemon_name.toLowerCase() && p.form === 'Normal');
            if (data.length) {
                const { base_attack, base_defense, base_stamina } = data[0];
                return { attack: base_attack, defense: base_defense, stamina: base_stamina }
            }
        }
    }
    return undefined;
}