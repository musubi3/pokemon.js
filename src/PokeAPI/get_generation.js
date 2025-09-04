import get from "../utils/get.js";

/** Returns data on the generation in JSON format.
 * @param {Number} generation
 * @returns {Promise<JSON>} */
export default async function get_generation(generation) {
    return await get(`generation/${generation}`);
}