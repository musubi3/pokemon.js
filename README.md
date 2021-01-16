<div align="left">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://i.postimg.cc/Sx7sKrmx/pokemon.png" width="546" alt="pokemon.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://img.shields.io/npm/v/pokemon.js.svg?color=brightgreen" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src = "https://img.shields.io/npm/dt/pokemon.js.svg?maxAge=3600" alt="NPM Downloads"/></a>
    <a href="https://github.com/musubi3/pokemon.js/actions"><img src="https://github.com/musubi3/pokemon.js/workflows/Testing/badge.svg" alt="Build Status" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/pokemon.js/"><img src="https://nodei.co/npm/pokemon.js.png" alt="npm installinfo" /></a>
  </p>
</div>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)
    - [Methods](#methods)
- [Links](#links)

## About

pokemon.js is a [Node.js](https://nodejs.org) module that makes interacting with [PokéAPI](https://pokeapi.co/) easier.

## Installation

**Node.js 12.0.0 or newer is required.**  
No dependencies are required.

`npm install pokemon.js`  

## Example Usage

```js
const Pokemon = require('pokemon.js');

Pokemon.setLanguage('english');

Pokemon.getPokemon('pikachu').then(console.log);
```
### Methods

- **`getPokemon(pokemon)`**:  
Returns data for the pokémon in JSON format.
- **`getType(pokemon | type)`**:  
Returns an Array that contains the pokémon's type(s) or returns data for the type in JSON format.
- **`getAbility(pokemon | ability)`**:  
Returns an Array that contains the pokémon's abilities or returns data for the ability in JSON format.
- **`getSprites(pokemon)`**:  
Returns an Object that contains the sprites for the pokémon.
- **`getStats(pokemon)`**:  
Returns an Object that contains the stats for the pokémon.
- **`getForms(pokemon)`**:  
Returns an Array that contains the forms for the pokémon.
- **`getEvolutionLine(pokemon)`**:  
Returns an Array that contains the evolution line of the pokémon.
- **`canLearn(pokemon)`**:  
Determines whether the pokémon can learn a move, retruning true or false.
- **`getMove(pokemon | move)`**:  
Returns an Array that contains the moves the pokémon learns or data on the move in JSON format.
- **`getNature(nature)`**:  
Returns an Object that contains the increased and decreased stat caused by the nature.
- **`getItem(item)`**:  
Returns data on the item in JSON format.
- **`getRegion(region)`**:  
Returns data on the region in JSON format.
- **`getGeneration(generation)`**:  
Returns data on the generation in JSON format.
- **`getAll(type)`**:  
Returns an Array that contains the names of all the specified type.
- **`setLanguage(language)`**:  
Sets the language to the language you prefer if available.
- **`getLanguage()`**  
Returns the current language.

## Links

- [GitHub](https://github.com/musubi3/pokemon.js.git)
- [PokéAPI](https://pokeapi.co/)
- [PoGoAPI](https://pogoapi.net/documentation/)

