import get_evolution_line from "../src/PokeAPI/get_evolution_line.js";
import get_pokemon from "../src/PokeAPI/get_pokemon.js";
import get_type from "../src/PokeAPI/get_type.js";

const data = await get_evolution_line('pikachu', ['chain']);

console.log(data);
