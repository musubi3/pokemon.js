import get from '../utils/get.js'

/** Returns an Object that contains the increased and decreased stat caused by the nature.
 * @param {'hardy'|'bold'|'modest'|'calm'|'timid'|'lonely'|'docile'|'mild'|'gentle'|'hasty'|'adamant'|'impish'|'bashful'|'careful'|'rash'|'jolly'|'naughty'|'lax'|'quirky'|'naive'|'brave'|'relaxed'|'quiet'|'sassy'|'serious'} nature_name
 * @returns {Promise<JSON>} */
export default async function get_nature(nature_name) {
    pokemon = pokemon.includes(" ") ? pokemon.replaceAll(" ", "-") : pokemon;
    return await get(`nature/${nature_name}`);
}