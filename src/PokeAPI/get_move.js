import filter_data from "../utils/filter_data.js";
import format_name from "../utils/format.js";
import get from "../utils/get.js";

/** Returns data on the move in JSON fromat.
 * @param {String} move_name 
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_move(move_name, fields = []) {
    move_name = format_name(move);
    const data = await get(`move/${move_name}`);

    return data ? filter_data(data, fields) : null;
}