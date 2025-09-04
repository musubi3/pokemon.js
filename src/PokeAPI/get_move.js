import get from "../utils/get.js";

/** Returns data on the move in JSON fromat.
 * @param {String} move_name 
 * @returns {Promise<JSON>} */
export default async function get_move(move_name) {
    move_name = move_name.includes(" ") ? move_name.replaceAll(" ", "-") : move_name;
    return await get(`move/${move_name}`);
}