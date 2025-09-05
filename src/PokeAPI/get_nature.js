import filter_data from '../utils/filter_data.js';
import format_name from '../utils/format.js';
import get from '../utils/get.js'

/** Returns an Object that contains the increased and decreased stat caused by the nature.
 * @param {'hardy'|'bold'|'modest'|'calm'|'timid'|'lonely'|'docile'|'mild'|'gentle'|'hasty'|'adamant'|'impish'|'bashful'|'careful'|'rash'|'jolly'|'naughty'|'lax'|'quirky'|'naive'|'brave'|'relaxed'|'quiet'|'sassy'|'serious'} nature_name
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_nature(nature_name, fields = []) {
    nature_name = format_name(nature_name);
    const data = await get(`nature/${nature_name}`);

    return data ? filter_data(data, fields) : null;
}