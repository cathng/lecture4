import React from 'react';
import { SearchBar } from '../../components';
import './pokemon-search.css';

export const PokemonSearch = (props) => (
  <div className="pokemon-search">
    <div
      className="pokemon-search__title"
    >
      POKÉ CARDS
    </div>
    <SearchBar
      buttonText="search pokemon by name"
      placeholder="pokemon name ex. pikachu"
      search={props.search}
    />
    <select id="pokemonType">
      <option value="1">Fire</option>
      <option value="2" selected="selected">Water</option>
      <option value="3">Ice</option>
    </select>
  </div>
);
