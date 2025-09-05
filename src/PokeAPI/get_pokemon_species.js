import filter_data from '../utils/filter_data.js';
import format_name from '../utils/format.js';
import get from '../utils/get.js'

/** Returns data for the given pokémon.
 * @param {String} pokemon Pokémon name or Pokédex #
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_pokemon_species(pokemon, fields = []) {
    pokemon = format_name(pokemon);
    const data = await get(`pokemon-species/${pokemon}`);

    return data ? filter_data(data, fields) : null;
}