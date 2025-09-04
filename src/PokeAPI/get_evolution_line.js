import get from '../utils/get.js'
import get_pokemon_species from './get_pokemon_species.js'

/** Returns data for the given pokémon.
 * @param {String} pokemon Pokémon name or Pokédex #
 * @returns {Promise<Object> | null} */
export default async function get_evolution_line(pokemon) {
    return get_pokemon_species(pokemon).then(SPECIES => {
        if (SPECIES == null)
            return null;

        const EVO_CHAIN = SPECIES.evolution_chain.url.split('/')[6];
        return get(`evolution-chain/${EVO_CHAIN}`);
    });
}