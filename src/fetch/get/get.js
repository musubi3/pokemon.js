const { isValid } = require('../../utils/utils');
const fetch = require('../fetch/lib');
const BASE_URL = "https://pokeapi.co/api/v2/"

/** @param {String} data */
module.exports = async function get(data) {
    let response = await fetch(`${BASE_URL}${data}`);
    let json = await isValid(response);
    if (json) return json;
    return undefined;
}