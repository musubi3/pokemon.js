import get from '../utils/get.js'

/** Returns data for the ability in JSON format.
 * @param {String | Number} ability_name
 * @returns {Promise<JSON>} */
export default async function get_ability(ability_name) {
    ability_name = ability_name.includes(" ") ? ability_name.replaceAll(" ", "-") : ability_name;
    return await get(`ability/${ability_name}`);
}