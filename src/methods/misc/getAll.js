const get = require('../../fetch/fetch');

/** Returns an Array containing all of their names.
 * @param {'item'|'pokemon'|'ability'|'type'|'move'|'nature'} type
 * @returns {Promise<Array>} */
module.exports = async function getAll(type = 'pokemon') {
    let count = (await get(`${type}?offset=0&limit=1`)).count;
    let data = await get(`${type}?offset=0&limit=${count}`)
    if (data !== undefined) return data.results.map(i => i.name);
    return undefined;
}