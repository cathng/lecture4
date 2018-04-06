import React, { Component } from 'react';
import { PokemonSearch, PokemonList } from './containers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      appUsed: false,
      pokemonCards: [],
      pokemonType: ''
    };
  }

  saveTypeToState(type) {

    const pokemonType = this.state.pokemonType;
    if(event.target.checked) {
      this.setState({
        pokemonTypes: pokemonTypes.push(event.target.value)
      })
    } else {

    }
  }

  searchPokemonCardByName(name) {
    const api = 'https://api.pokemontcg.io/v1/cards?page=1&pageSize=30';
    const apiWithName = api + '&name=' + name;
    const apiWithType = apiWithName + '&types=' + this.state.pokemonType;

    this.setState({
      pokemonCards: [],
      pending: true,
      appUsed: true,
    });

    fetch(apiWithType)
    .then(response => response.json())
    .then(data => {
        this.setState({
          pending: false,
          pokemonCards: data.cards
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <PokemonSearch search={(pokemonName) => this.searchPokemonCardByName(pokemonName)}/>
          <PokemonList
            appUsed={this.state.appUsed}
            pending={this.state.pending}
            pokemonCards={this.state.pokemonCards}
            //passed down parameters
          />
        </div>
      </div>
    );
  }
}

export default App;
