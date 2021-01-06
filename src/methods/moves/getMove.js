const get = require('../../fetch/fetch');
const { typeLogos } = require('../../utils/Constants');
const { format, formatPokemon } = require('../../utils/utils');

/** @param {String} name */
module.exports = async function getMove(name) {
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
                    language: e.language,
                    short_effect: e.short_effect.replace('$effect_chance', moveData.effect_chance)
                }
            });
        }
        moveData['type'] = { name: moveData['type'].name, logo: typeLogos.get(moveData['type'].name) }
        delete moveData['effect_chance'];
        return moveData;
    } else {
        call = await formatPokemon(name);
        let pokeData = await get(`pokemon/${call}`);
        if (pokeData !== undefined) return pokeData['moves'].map(mv => mv.move.name);
        return undefined;
    }
}