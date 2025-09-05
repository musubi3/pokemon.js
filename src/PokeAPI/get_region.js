import format_name from "../utils/format";
import get from "../utils/get";

/** Returns data on the region in JSON format.
 * @param {'kanto'|'johto'|'hoenn'|'sinnoh'|'unova'|'kalos'|'alola'|'galar'|'hisui'|'paldea'} region
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<JSON>} */
export default async function get_region(region, fields = []) {
    region = format_name(region);
    const data = await get(`region/${region}`);

    return data ? filter_data(data, fields) : null;
}