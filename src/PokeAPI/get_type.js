import filter_data from '../utils/filter_data.js';
import format_name from '../utils/format.js';
import get from '../utils/get.js'

/** Returns an Array of the pokémon's types or returns data for the type in JSON format.
 * @param {String | Number} name The type or pokémon name.
 * @param {boolean} is_pokemon Optional. Default is false.
 * @param {String[]} fields Optional. An array of property names to include in the returned object.
 * @returns {Promise<Object> | Promise<Array>} */
export default async function get_type(name, is_pokemon = false, fields = []) {
    name = format_name(name);
    const data = is_pokemon ? await get(`pokemon/${name}`) : await get(`type/${name}`);
    
    if (is_pokemon)
        return data ? data['types'] : null;

    return data ? filter_data(data, fields) : null;
}