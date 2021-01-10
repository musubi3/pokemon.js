const get = require('../../fetch/get/get');
const { format } = require('../../utils/utils');
const { getLang } = require('../../utils/Variables');

/** Returns data on the item in JSON format.
 * @param {String} item 
 * @returns {Promise<JSON>} */
module.exports = async function getMove(item) {
    if (isNaN(item)) {
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
                itemData['name'] = itemData['names'].filter(n => n.language === getLang())[0];
                if (itemData['effect_entry'] === undefined) itemData['effect_entry'] = [{ effect: '', language: getLang(), short_effect: '' }];
                if (itemData.name !== undefined) itemData.name = itemData.name.name
                else itemData.name = '';
                delete itemData['names'];
                delete itemData['effect_entries'];
            }
            delete itemData['sprites'];
            delete itemData['flavor_text_entries'];
            return itemData
        }
    }
    return undefined;
}