import get from '../utils/get.js'

/** Returns an Array of the pokemon's abilities or returns data for the ability in JSON format.
 * @param {String | Number} ability_name
 * @returns {Promise<Array> | Promise<JSON>} */
export default async function get_ability(ability_name) {
    ability_name = ability_name.includes(" ") ? ability_name.replaceAll(" ", "-") : ability_name;
    return await get(`ability/${ability_name}`)
}