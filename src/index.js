
module.exports = {
    getPokemon: require('./methods/pokemon/getPokemon'),
    getType: require('./methods/pokemon/getType'),
    getAbility: require('./methods/pokemon/getAbility'),
    getSprites: require('./methods/pokemon/getSprites'),
    getStats: require('./methods/pokemon/getStats'),
    getForms: require('./methods/pokemon/getForms'),
    getEvolutionLine: require('./methods/pokemon/getEvolutionLine.js'),
    canLearn: require('./methods/pokemon/canLearn'),
    getMove: require('./methods/moves/getMove'),
    getItem: require('./methods/items/getItem'),
    getAll: require('./methods/misc/getAll'),
    getNature: require('./methods/natures/getNature'),
    getGeneration: require('./methods/misc/getGeneration'),
    getRegion: require('./methods/misc/getRegion'),
    setLanguage: require('./methods/language/setLanguage'),
    getLanguage: require('./methods/language/getLanguage'),
    /** Pokemon Go Methods */
    pogo: require('./pogo')
}