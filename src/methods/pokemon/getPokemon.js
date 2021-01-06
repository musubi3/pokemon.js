const get = require('../../fetch/fetch');
const { typeLogos } = require('../../utils/Constants');
const { formatPokemon } = require('../../utils/utils');

/** @param {String} pokemon */
module.exports = async function getPokemon(pokemon) {
    let call = await formatPokemon(pokemon);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        delete pokeData['location_area_encounters'];
        delete pokeData['order'];
        pokeData['moves'] = pokeData['moves'].map(mv => mv.move.name);
        pokeData['abilities'] = pokeData['abilities'].map(abl => {
            return {
                name: abl.ability.name,
                is_hidden: abl.is_hidden
            }
        });
        let stats = {};
        pokeData.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
        pokeData['stats'] = stats;
        let type = [];
        pokeData.types.forEach(tp => type.push({ name: tp.type.name, logo: typeLogos.get(tp.type.name) }));
        pokeData['types'] = type;
        return pokeData;
    }
    return undefined;
}