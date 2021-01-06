const get = require('../../fetch/fetch');
const { format } = require('../../utils/utils');

/** Returns data on the item in JSON format
 * @param {String} item */
module.exports = async function getMove(item) {
    let call = format(item);
    let itemData = await get(`item/${call}`);
    if (itemData !== undefined) {
        itemData['names'] = itemData['names'].map(n => { return { language: n.language.name, name: n.name } });
        itemData['sprite'] = itemData['sprites'].default;
        delete itemData['sprites'];
        delete itemData['flavor_text_entries'];
        return itemData
    }
    return undefined;
}