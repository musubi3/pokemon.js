import get_ability from "../src/PokeAPI/get_ability.js";
import get_evolution_line from "../src/PokeAPI/get_evolution_line.js";
import get_move from "../src/PokeAPI/get_move.js";
import get_type from "../src/PokeAPI/get_type.js";
import get from "../src/utils/get.js";

const test = await get_move('protect')

console.log(test)