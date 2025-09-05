import filter_data from "../utils/filter_data.js";
import format_name from "../utils/format.js";
import get from "../utils/get.js";

/** Returns data on the item in JSON format.
 * @param {String} item_name
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_item(item_name, fields = []) {
    item_name = format_name(item_name);
    const data = await get(`item/${item_name}`);

    return data ? filter_data(data, fields) : null;
}