import get from "../utils/get.js";

/** Returns an Array of the moves the pokemon learns or data on the move in JSON fromat.
 * @param {String} move_name 
 * @returns {Promise<Array> | Promise<JSON>} */
export default async function get_move(move_name) {
    move_name = move_name.includes(" ") ? move_name.replaceAll(" ", "-") : move_name;
    return await get(`move/${move_name}`);
}