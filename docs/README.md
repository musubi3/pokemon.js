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
    <a href="https://www.npmjs.com/package/pokemon.js"><img src="https://nodei.co/npm/pokemon.js.png" alt="npm installinfo" /></a>
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

**`get_pokemon(pokemon, fields=[])`**:  
Returns data for the pokémon in JSON format.

**`get_type(name, is_pokemon=false, fields=[])`**:  
Returns an Array of the pokemon's types or returns data for the type in JSON format.

**`get_ability(name, is_pokemon=false, fields=[])`**:  
Returns an Array of the pokemon's abilities or returns data for the ability in JSON format.

**`get_evolution_line(pokemon, fields=[])`**:  
Returns an Array that contains the evolution line of the pokémon.

**`get_move(move, fields=[])`**:  
Returns data on the move in JSON format.

**`get_nature(nature, fields=[])`**:  
Returns an Object that contains the increased and decreased stat caused by the nature.

**`get_item(item, fields=[])`**:  
Returns data on the item in JSON format.

**`get_generation(generation, fields=[])`**:  
Returns data on the generation in JSON format.

**`get_region(region, fields=[])`**:  
Returns data on the region in JSON format.

**`get_all(type)`**:  
Returns an Array containing names of all the specified resource type.

## Links

- [NPM](https://www.npmjs.com/package/pokemon.js)
- [GitHub](https://github.com/musubi3/pokemon.js.git)
- [PokéAPI](https://pokeapi.co/)

