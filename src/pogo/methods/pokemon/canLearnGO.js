const get = require('../../utils/get');
/**
 * @param {String} pokemon 
 * @param {String} move 
 * @returns {Promise<Boolean>} */
module.exports = async function canLearnGO(pokemon, move) {
    let pkm = pokemon.toLowerCase();
    let pokeData = await get(`current_pokemon_moves.json`);
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
        const { charged_moves, fast_moves, elite_charged_moves, elite_fast_moves } = data[0];
        const moves = charged_moves.concat(fast_moves, elite_charged_moves, elite_fast_moves).map(mv => mv.toLowerCase());
        return moves.includes(move.toLowerCase());
    }
    return undefined;
}