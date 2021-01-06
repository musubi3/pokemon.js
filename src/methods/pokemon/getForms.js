const get = require('../../fetch/fetch');
const { formatPokemon } = require('../../utils/utils');

/** Returns an Array of the forms for the pokemon.
 * @param {String} pokemon */
module.exports = async function getForms(pokemon) {
    let call = await formatPokemon(pokemon);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let formData = await get(`pokemon-species/${pokeData.id}`);
        if (formData !== undefined) {
            return formData.varieties.map(form => {
                return { is_default: form.is_default, name: form.pokemon.name }
            })
        } 
    }
    return undefined;
}