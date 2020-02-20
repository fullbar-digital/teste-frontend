import React from 'react';
import axios from 'axios';
// import PokemonList from './components/PokemonList';

const api = {
  baseUrl: "https://pokeapi.co/api/v2/pokemon/"
};

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      pokemonData: []
    };
}

componentDidMount() {
axios.get(api.baseUrl) //fetch request
    .then((res) => {
      console.log(res);
      this.setState({ pokemonData: res.data.results });
    });
}

  render() {
    const { pokemonData } = this.state;
  return (
    <div className="App">
      {pokemonData.map((results) => (
      <div>

      <p>{results.name}</p>
      <p>{results.url}</p>
      
      </div>
    )
    )}
    </div>
  )
}}

export default App;
