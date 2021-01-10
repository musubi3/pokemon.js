const { formatPokemon, format } = require('../../utils/utils');
const get = require('../../fetch/get/get');
const { typeLogos } = require('../../utils/Constants');
const { getLang } = require('../../utils/Variables');

/** Returns an Array of the pokemon's types or returns data for the type in JSON format.
 * @param {String | Number} name 
 * @returns {Promise<Array> | Promise<JSON>} */
module.exports = async function getType(name) {
    if (isNaN(name)) var call = await formatPokemon(name);
    else var call = name;
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let type = [];
        pokeData.types.forEach(tp => type.push({ name: tp.type.name, logo: typeLogos.get(tp.type.name) }));
        return type;
    } else if (isNaN(name)) {
        call = format(name);
        let typeData = await get(`type/${call}`);
        if (typeData !== undefined) {
            delete typeData['flavor_text_entries'];
            typeData['pokemon'] = typeData['pokemon'].map(pkm => pkm.pokemon.name);
            typeData['names'] = typeData['names'].map(n => { return { language: n.language.name, name: n.name } });
            typeData['moves'] = typeData['moves'].map(mv => mv.name);
            typeData['damage_relations'] = {
                double_damage_from: typeData['damage_relations'].double_damage_from.map(tp => tp.name),
                double_damage_to: typeData['damage_relations'].double_damage_to.map(tp => tp.name),
                half_damage_from: typeData['damage_relations'].half_damage_from.map(tp => tp.name),
                half_damage_to: typeData['damage_relations'].half_damage_to.map(tp => tp.name),
                no_damage_from: typeData['damage_relations'].no_damage_from.map(tp => tp.name),
                no_damage_to: typeData['damage_relations'].no_damage_to.map(tp => tp.name)
            }
            typeData['logo'] = typeLogos.get(typeData['name']);
            if (getLang().length) {
                typeData['name'] = typeData['names'].filter(n => n.language === getLang())[0];
                if (typeData.name !== undefined) typeData.name = typeData.name.name
                else typeData.name = '';
                delete typeData['names'];
            }
            return typeData;
        }
    }
    return undefined;
}