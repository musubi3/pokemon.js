const get = require('../fetch/get/get');

module.exports = {
    /** @param {String} name */
    async formatPokemon(name) {
        if (name.split(' ').length > 1) {
            let words = name.split(' ').map(w => w.toLowerCase());
            if (words.length === 2) {
                name = `${words[1]}-${words[0]}`;
                let test = await get(`pokemon/${name}`);
                if (test === undefined) name = `${words[0]}-${words[1]}`;
            } else if (words[2]) name = name + `-${words[2]}`;
            return name.toLowerCase();
        }
        return name.toLowerCase();
    },
    /** @param {String} name */
    format(name) {
        if (name.split(' ').length > 1) {
            let words = name.split(' ').map(w => w.toLowerCase());
            name = `${words[0]}-${words[1]}`;
            if (words[2]) name = name + `-${words[2]}`;
            return name.toLowerCase();
        }
        return name.toLowerCase();
    }
}