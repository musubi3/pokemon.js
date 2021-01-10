const get = require('../../fetch/get/get');
const { typeLogos } = require('../../utils/Constants');
const { format, formatPokemon } = require('../../utils/utils');
const { getLang } = require('../../utils/Variables');

/** Returns an Array of the moves the pokemon learns or data on the move in JSON fromat.
 * @param {String} name 
 * @returns {Promise<Array> | Promise<JSON>} */
module.exports = async function getMove(name) {
    if (isNaN(name)) {
        let call = format(name);
        let moveData = await get(`move/${call}`);
        if (moveData !== undefined) {
            delete moveData['flavor_text_entries'];
            delete moveData['machines'];
            delete moveData['contest_combos'];
            delete moveData['contest_effect'];
            delete moveData['contest_type'];
            delete moveData['super_contest_effect'];
            moveData['names'] = moveData['names'].map(n => { return { language: n.language.name, name: n.name } });
            if (moveData.effect_entries[0].effect.includes('$effect_chance')) {
                const effect = moveData.effect_entries;
                moveData['effect_entries'] = effect.map(e => {
                    return {
                        effect: e.effect.replace('$effect_chance', moveData.effect_chance),
                        language: e.language.name,
                        short_effect: e.short_effect.replace('$effect_chance', moveData.effect_chance)
                    }
                });
            }
            moveData['type'] = { name: moveData['type'].name, logo: typeLogos.get(moveData['type'].name) }
            if (getLang().length) {
                moveData['effect_entry'] = moveData['effect_entries'].filter(e => e.language === getLang())[0];
                moveData['name'] = moveData['names'].filter(n => n.language === getLang())[0];
                if (moveData['effect_entry'] === undefined) moveData['effect_entry'] = [{ effect: '', language: getLang(), short_effect: '' }];
                if (moveData.name !== undefined) moveData.name = moveData.name.name
                else moveData.name = '';
                delete moveData['names'];
                delete moveData['effect_entries'];
            }
            delete moveData['effect_chance'];
            return moveData;
        } else {
            call = await formatPokemon(name);
            let pokeData = await get(`pokemon/${call}`);
            if (pokeData !== undefined) return pokeData['moves'].map(mv => mv.move.name);
        }
    }
    return undefined;
}