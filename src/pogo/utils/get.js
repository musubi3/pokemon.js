const fetch = require('../../fetch/lib');
const BASE_URL = "https://pogoapi.net/api/v1/"

/** 
 * @param {String} data 
 * @returns {Promise<*>} */
module.exports = async function get(data) {
    let response = await fetch(`${BASE_URL}${data}`);
    return await response.json();
}