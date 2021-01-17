const get = require('../../fetch/get/get');
const { typeLogos } = require('../../utils/Constants');
const { formatPokemon } = require('../../utils/utils');
const { getLang } = require('../../utils/Variables');

/** Returns data for the pokemon in JSON format.
 * @param {String | Number} pokemon 
 * @returns {Promise<JSON>} */
module.exports = async function getPokemon(pokemon) {
    if (isNaN(pokemon)) var call = await formatPokemon(pokemon);
    else var call = pokemon;
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let speciesData = await get(`pokemon-species/${call}`);
        pokeData['names'] = speciesData['names'].map(n => { return { language: n.language.name, name: n.name } })
        pokeData['genera'] = speciesData['genera'].map(n => { return { language: n.language.name, genus: n.genus } })
        if (getLang().length) {
            pokeData['name'] = pokeData['names'].filter(n => n.language === getLang())[0];
            pokeData['genera'] = pokeData['genera'].filter(n => n.language === getLang())[0];
            if (pokeData.name !== undefined) pokeData.name = pokeData.name.name
            else pokeData.name = '';
            if (pokeData.genera !== undefined) pokeData.genera = pokeData.genera.genus
            else pokeData.genera = '';
            delete pokeData['names'];
        }
        pokeData['pokedex_numbers'] = speciesData['pokedex_numbers'].map(n => { return { entry_number: n.entry_number, name: n.pokedex.name } });
        pokeData['pokedex_text_entries'] = speciesData['flavor_text_entries'].map(f => {
            return {
                flavor_text: f.flavor_text,
                language: f.language.name,
                version: f.version.name,
            };
        });
        pokeData['has_gender_differences'] = speciesData['has_gender_differences'];
        if (speciesData['gender_rate'] !== -1)
            pokeData['gender_rate'] = {
                male: 100 - (speciesData['gender_rate'] / 8 * 100),
                female: speciesData['gender_rate'] / 8 * 100,
                genderless: false
            }
        else pokeData['gender_rate'] = { male: 0, female: 0, genderless: true }
        pokeData['egg_groups'] = speciesData['egg_groups'].map(g => g.name);
        pokeData['is_baby'] = speciesData['is_baby'];
        pokeData['is_legendary'] = speciesData['is_legendary'];
        pokeData['is_mythical'] = speciesData['is_mythical'];
        delete pokeData['location_area_encounters'];
        delete pokeData['order'];
        delete pokeData['forms'];
        delete pokeData['species'];
        delete pokeData['base_experience'];
        pokeData['held_items'] = pokeData['held_items'].map(item => item.item.name);
        pokeData['game_indices'] = pokeData['game_indices'].map(game => game.version.name);
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