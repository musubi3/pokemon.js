const get = require('../../fetch/fetch');
const { format, formatPokemon } = require('../../utils/utils');
const { getLang } = require('../../utils/Variables');

/** Returns an Array of the pokemon's abilities or returns data for the ability in JSON format.
 * @param {String} name 
 * @returns {Array | JSON} */
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
            abilityData['effect_entries'] = abilityData['effect_entries'].map(e => {
                return {
                    effect: e.effect,
                    language: e.language.name,
                    short_effect: e.short_effect
                }
            });
            abilityData['names'] = abilityData['names'].map(n => { return { language: n.language.name, name: n.name } });
            if (getLang().length) {
                abilityData['effect_entry'] = abilityData['effect_entries'].filter(e => e.language === getLang())[0];
                abilityData['name'] = abilityData['names'].filter(n => n.language === getLang())[0].name;
                delete abilityData['names'];
                delete abilityData['effect_entries'];
            }
            return abilityData;
        }
        return undefined;
    }
}