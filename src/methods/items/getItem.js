const get = require('../../fetch/fetch');
const { format } = require('../../utils/utils');
const { getLang } = require('../../utils/Variables');

/** Returns data on the item in JSON format.
 * @param {String} item 
 * @returns {JSON} */
module.exports = async function getMove(item) {
    let call = format(item);
    let itemData = await get(`item/${call}`);
    if (itemData !== undefined) {
        itemData['names'] = itemData['names'].map(n => { return { language: n.language.name, name: n.name } });
        itemData['sprite'] = itemData['sprites'].default;
        itemData['effect_entries'] = itemData['effect_entries'].map(e => {
            return {
                effect: e.effect,
                language: e.language.name,
                short_effect: e.short_effect
            }
        });
        if (getLang().length) {
            itemData['effect_entry'] = itemData['effect_entries'].filter(e => e.language === getLang())[0];
            itemData['name'] = itemData['names'].filter(n => n.language === getLang())[0].name;
            delete itemData['names'];
            delete itemData['effect_entries'];
        }
        delete itemData['sprites'];
        delete itemData['flavor_text_entries'];
        return itemData
    }
    return undefined;
}