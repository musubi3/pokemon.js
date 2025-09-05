import filter_data from '../utils/filter_data.js';
import get from '../utils/get.js'
import get_pokemon_species from './get_pokemon_species.js'

/** Returns data for the given pokémon.
 * @param {String} pokemon Pokémon name or Pokédex #
 * @param {String[]} fields Optional. An array of property names to include in the returned object. 
 * @returns {Promise<Object>} */
export default async function get_evolution_line(pokemon, fields = []) {
    const SPECIES = await get_pokemon_species(pokemon);

    if (!SPECIES)
        return null;

    const EVO_CHAIN = SPECIES.evolution_chain.url.split('/')[6];
    const data = await get(`evolution-chain/${EVO_CHAIN}`);

    return data ? filter_data(data, fields) : null;
}