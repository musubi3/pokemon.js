const get = require('../../fetch/get/get');
const { getLang } = require('../../utils/Variables');
/** Returns data on the generation in JSON format.
 * @param {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} generation
 * @returns {Promise<JSON>} */
module.exports = async function getGeneration(generation) {
    if (!isNaN(generation)) {
        generation = parseInt(generation);
        let genData = await get(`generation/${generation}`);
        if (genData !== undefined) {
            genData.names = genData.names.map(n => { return { language: n.language.name, name: n.name } });
            genData.games = genData.version_groups.map(g => g.name);
            genData.types = genData.types.map(t => t.name);
            genData.pokemon_species = genData.pokemon_species.map(p => p.name);
            genData.moves = genData.moves.map(m => m.name);
            genData.main_region = genData.main_region.name;
            genData.abilities = genData.abilities.map(a => a.name);
            delete genData.id
            delete genData.version_groups;
            if (getLang().length) {
                genData.name = genData.names.filter(n => n.language === getLang())[0];
                if (genData.name !== undefined) genData.name = genData.name.name
                else genData.name = '';
                delete genData.names;
            }
            return genData;
        }
    }
    return undefined;
}