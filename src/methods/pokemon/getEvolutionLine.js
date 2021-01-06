const get = require('../../fetch/fetch');
const fetch = require('node-fetch');
const { formatPokemon } = require('../../utils/utils');

/** Returns an Array of the evolution line of the pokemon
 * @param {String} pokemon */
module.exports = async function getEvolutionLine(pokemon) {
    let call = await formatPokemon(pokemon);
    let pokeData = await get(`pokemon/${call}`);
    if (pokeData !== undefined) {
        let formData = await get(`pokemon-species/${pokeData.id}`);
        if (formData !== undefined) {
            let evoData = await fetch(formData.evolution_chain.url);
            if (evoData && evoData.body.writable) {
                let data = await evoData.json();
                const { chain } = data;
                let line = [];
                line.push(data.chain.species.name);
                if (chain.evolves_to.length) {
                    let second = [];
                    chain.evolves_to.forEach(pkm => second.push(pkm.species.name));
                    if (second.length === 1) line.push(second[0]);
                    else line.push(second);
                    if (chain.evolves_to[0].evolves_to.length) {
                        let third = [];
                        chain.evolves_to[0].evolves_to.forEach(pkm => third.push(pkm.species.name));
                        if (third.length === 1) line.push(third[0]);
                        else line.push(third);
                    }
                }
                return line;
            }
        }
    }
    return undefined;
}