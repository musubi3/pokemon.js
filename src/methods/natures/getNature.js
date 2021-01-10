const get = require('../../fetch/get/get');
const { getLang } = require('../../utils/Variables');

/** Returns an Object that contains the increased and decreased stat caused by the nature.
 * @param {'hardy'|'bold'|'modest'|'calm'|'timid'|'lonely'|'docile'|'mild'|'gentle'|'hasty'|'adamant'|'impish'|'bashful'|'careful'|'rash'|'jolly'|'naughty'|'lax'|'quirky'|'naive'|'brave'|'relaxed'|'quiet'|'sassy'|'serious'} nature
 * @returns {Promise<JSON>} */
module.exports = async function getNature(nature) {
    if (isNaN(nature)) {
        let natureData = await get(`nature/${nature.toLowerCase()}`);
        if (natureData !== undefined) {
            let data = {};
            data.name = natureData.name;
            data.decreased_stat = natureData.decreased_stat.name;
            data.increased_stat = natureData.increased_stat.name;
            data.names = natureData.names.map(n => { return { language: n.language.name, name: n.name } });
            if (data.decreased_stat === null) data.decreased_stat = 'n/a';
            if (data.increased_stat === null) data.increased_stat = 'n/a';
            if (getLang().length) {
                data.name = data.names.filter(n => n.language === getLang())[0].name;
                if (data.name !== undefined) data.name = data.name.name
                else data.name = '';
                delete data.names;
            }
            return data;
        }
    }
    return undefined;
}