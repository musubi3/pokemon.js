import get from '../utils/get.js'

/** Returns an Array of the pokemon's types or returns data for the type in JSON format.
 * @param {String | Number} type_name 
 * @returns {Promise<Array> | Promise<JSON>} */
export default async function get_type(type_name) {
    return await get(`type/${type_name}`)
}