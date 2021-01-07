const Pokemon = require('../src');

Pokemon.getForms('charizard').then(console.log);

Pokemon.getAll('region').then(console.log);

Pokemon.setLanguage('english');
Pokemon.getAbility('prankster').then(console.log);

Pokemon.setLanguage('spanish');
Pokemon.getItem('life orb').then(console.log);

Pokemon.setLanguage('french');
Pokemon.getMove('ice beam').then(console.log);

Pokemon.setLanguage('italian');
Pokemon.getRegion('unova').then(console.log);

Pokemon.setLanguage('japanese');
Pokemon.getGeneration('4')

Pokemon.setLanguage('chinese-simplified');
Pokemon.getPokemon('pikachu').then(console.log);