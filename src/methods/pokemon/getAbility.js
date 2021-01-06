const get = require('../../fetch/fetch');
const { format, formatPokemon } = require('../../utils/utils');

/** @param {String} name */
module.exports = async function getAbility(name) {
    let call = await formatPokemon(name);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        return pokeData.abilities.map(abl => {
            return {
                name: abl.ability.name,
                is_hidden: abl.is_hidden
            }
        })
    } else {
        call = format(name);
        let abilityData = await get(`ability/${call}`);
        if (abilityData !== undefined) {
            delete abilityData['flavor_text_entries'];
            abilityData['pokemon'] = abilityData['pokemon'].map(pkm => {
                return { pokemon: pkm.pokemon.name, is_hidden: pkm.is_hidden }
            });
            abilityData['names'] = abilityData['names'].map(n => { return { language: n.language.name, name: n.name } });
            return abilityData;
        }
        return undefined;
    }
}