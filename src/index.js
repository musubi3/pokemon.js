import get_ability from './PokeAPI/get_ability.js';
import get_evolution_line from './PokeAPI/get_evolution_line.js';
import get_generation from './PokeAPI/get_generation.js';
import get_item from './PokeAPI/get_item.js';
import get_move from './PokeAPI/get_move.js';
import get_pokemon from './PokeAPI/get_pokemon.js';
import get_pokemon_species from './PokeAPI/get_pokemon_species.js';
import get_type from './PokeAPI/get_type.js';
import set_language from './PokeAPI/set_language.js';

const Pokemon = {
    get_pokemon,
    get_pokemon_species,
    get_evolution_line,
    get_type,
    get_ability,
    get_move,
    get_item,
    get_generation
};

const PokeGO = {};

export default {
    Pokemon
};


// export default {
//     getPokemon: require('./methods/pokemon/getPokemon'),
//     getType: require('./methods/pokemon/getType'),
//     getAbility: require('./methods/pokemon/getAbility'),
//     getSprites: require('./methods/pokemon/getSprites'),
//     getStats: require('./methods/pokemon/getStats'),
//     getForms: require('./methods/pokemon/getForms'),
//     getEvolutionLine: require('./methods/pokemon/getEvolutionLine.js'),
//     canLearn: require('./methods/pokemon/canLearn'),
//     getMove: require('./methods/moves/getMove'),
//     getItem: require('./methods/items/getItem'),
//     getAll: require('./methods/misc/getAll'),
//     getNature: require('./methods/natures/getNature'),
//     getGeneration: require('./methods/misc/getGeneration'),
//     getRegion: require('./methods/misc/getRegion'),
//     setLanguage: require('./methods/language/setLanguage'),
//     getLanguage: require('./methods/language/getLanguage'),
//     /** Pokemon Go Methods */
//     pogo: require('./pogo')
// }