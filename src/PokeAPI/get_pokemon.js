import get from '../utils/get.js'

/** Returns data for the given pokémon.
 * @param {String} pokemon Pokémon name or Pokédex #
 * @returns {Promise<Object> | null} */
export default async function get_pokemon(pokemon) {
    pokemon = pokemon.includes(" ") ? pokemon.replaceAll(" ", "-") : pokemon;
    return await get(`pokemon/${pokemon}`)
}