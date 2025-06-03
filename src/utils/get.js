import fetch from "node-fetch";

const POKE_BASE_URL = 'https://pokeapi.co/api/v2'
const POGO_BASE_URL = 'https://pogoapi.net/api/v1/'

/** Gets data from the PokeAPI
 * @param {String} endpoint 
 * @param {String} params
 * @param {'POKE' | 'POGO'} api 
 * @returns {Promise<Object> | null} */
export default async function get(endpoint, params='', api='POKE') {
    const BASE_URL = api == 'POKE' ? POKE_BASE_URL : POGO_BASE_URL

    const URL = params ? `${BASE_URL}/${endpoint}?${params}` : `${BASE_URL}/${endpoint}`;

    try {
        const res = await fetch(URL, { method: "GET" });

        if (!res.ok) {
            console.error(`HTTP error! Status: ${res.status}`);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}