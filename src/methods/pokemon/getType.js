const { formatPokemon, format } = require('../../utils/utils');
const get = require('../../fetch/fetch');
const { typeLogos } = require('../../utils/Constants');

/** @param {String} name */
module.exports = async function getType(name) {
    let call = await formatPokemon(name);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let type = [];
        pokeData.types.forEach(tp => type.push({ name: tp.type.name, logo: typeLogos.get(tp.type.name) }));
        return type;
    } else {
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
            return typeData;
        }
        return undefined;
    }
}