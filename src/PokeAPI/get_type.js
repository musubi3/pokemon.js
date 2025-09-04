import get from '../utils/get.js'

/** Returns data for the type in JSON format.
 * @param {String | Number} type_name 
 * @returns {Promise<JSON>} */
export default async function get_type(type_name) {
    return await get(`type/${type_name}`);
}