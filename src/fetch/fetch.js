const fetch = require('node-fetch');
const BASE_URL = "https://pokeapi.co/api/v2/"

/** @param {String} data */
module.exports = async function get(data) { 
    let response = await fetch(`${BASE_URL}${data}`)
    if (response.body.writable) return await response.json();
    else return undefined;
}