<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://i.postimg.cc/Sx7sKrmx/pokemon.png" width="546" alt="pokemon.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://img.shields.io/npm/v/pokemon.js.svg?color=brightgreen" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src = "https://img.shields.io/npm/dt/pokemon.js.svg?maxAge=3600" alt="NPM Downloads"/></a>
    <a href="https://david-dm.org/musubi3/pokemon.js"><img src="https://status.david-dm.org/gh/musubi3/pokemon.js.svg" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/pokemon.js/"><img src="https://nodei.co/npm/pokemon.js.png" alt="npm installinfo" /></a>
  </p>
</div>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example)
    - [Methods](#methods)
- [Links](#links)
    - [Dependecies](#dependencies)

## About

pokemon.js is a [Node.js](https://nodejs.org) module that makes interacting with [PokeAPI](https://pokeapi.co/) easier.

## Installation

**Node.js 12.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

`npm install pokemon.js`

## Example Usage

```js
const Pokemon = require('pokemon.js');

Pokemon.getPokemon('pikachu').then(pokeData => console.log(pokeData));
```
### Methods

- **`getPokemon(pokemon)`**:  
Returns data for the pokemon in JSON format
- **`getType(pokemon | type)`**:  
Returns an Array of the pokemon's types or returns data for the type in JSON format
- **`getAbility(pokemon | ability)`**:  
Returns an Array of the pokemon's abilities or returns data for the ability in JSON format
- **`getSprites(pokemon)`**:  
Returns an Object that contains the sprites for the pokemon
- **`getStats(pokemon)`**:  
Returns an Object that contains the stats for the pokemon
- **`getForms(pokemon)`**:  
Returns an Array of the forms for the pokemon
- **`getEvolutionLine(pokemon)`**:  
Returns an Array of the evolution line of the pokemon
- **`canLearn(pokemon)`**:
Determines whether the pokemon can learn a move, retruning true or false
- **`getMove(pokemon | move)`**:  
Returns an Array of the moves the pokemon learns or data on the move in JSON fromat
- **`getItem(item)`**:  
Returns data on the item in JSON format

## Links

- [GitHub](https://github.com/musubi3/pokemon.js.git)

### Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch)

