import filter_data from "../utils/filter_data.js";
import get from "../utils/get.js";

/** Returns data on the generation in JSON format.
 * @param {Number} generation
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_generation(generation, fields = []) {
    const data = await get(`generation/${generation}`);

    return data ? filter_data(data, fields) : null;
}