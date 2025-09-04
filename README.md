<div align="left">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://i.postimg.cc/Sx7sKrmx/pokemon.png" width="546" alt="pokemon.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://img.shields.io/npm/v/pokemon.js.svg?color=brightgreen" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/pokemon.js"><img src = "https://img.shields.io/npm/dt/pokemon.js.svg?maxAge=3600" alt="NPM Downloads"/></a>
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
import Pokemon from 'pokemon.js';

Pokemon.get_pokemon('zorua').then(console.log);
```
### Methods

**`get_pokemon(pokemon)`**:  
Returns data for the pokémon in JSON format.

**`get_type(type)`**:  
Returns data for the type in JSON format.

**`get_ability(ability)`**:  
Returns data for the ability in JSON format.

**`get_evolution_line(pokemon)`**:  
Returns an Array that contains the evolution line of the pokémon.

**`get_move(move)`**:  
Returns data on the move in JSON format.
**`get_nature(nature)`**:  
Returns an Object that contains the increased and decreased stat caused by the nature.

**`get_item(item)`**:  
Returns data on the item in JSON format.

**`get_generation(generation)`**:  
Returns data on the generation in JSON format.

## Links

- [GitHub](https://github.com/musubi3/pokemon.js.git)
- [PokéAPI](https://pokeapi.co/)

