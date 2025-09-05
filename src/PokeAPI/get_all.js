import get from "../utils/get.js";

/** Returns an Array containing names of all the given resource type.
 * @param {'item'|'pokemon'|'ability'|'type'|'move'|'nature'|'region'} type
 * @returns {Promise<Array>} */
export default async function get_all(type = 'pokemon') {
    const data = await get(`${type}?limit=100000&offset=0`);

    return data ? data['results'].map(i => i.name) : null;
}