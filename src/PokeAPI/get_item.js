import get from "../utils/get.js";

/** Returns data on the item in JSON format.
 * @param {String} item_name
 * @returns {Promise<JSON>} */
export default async function get_item(item_name) {
    item_name = item_name.includes(" ") ? item_name.replaceAll(" ", "-") : item_name;
    return await get(`item/${item_name}`);
}