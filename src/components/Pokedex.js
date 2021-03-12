import React, { Component } from 'react'

import '../components/Pokedex.scss'

import axios from 'axios';

//import ReactPaginate from 'react-paginate';

import PokedexItens from '../components/pokemonItens/PokemonsItens';
import FilterItens from '../components/FilterItens/FilterItens';

export default class Pokedex extends Component {


    state = { 
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9',
        urlPokemonItem: 'https://pokeapi.co/api/v2/pokemon-form/',
        pokemons: [],
        pokemon: null

    }

  
    componentDidMount() {
        this.getPokemons();
        
    }

    handleCallback = (childData) =>{

        
            axios.get(this.state.urlPokemonItem + childData)
              .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon });
              })
        

    }
    
    getPokemons() {
        axios.get(this.state.url)
          .then(res => {
            const pokemons = res.data['results'];
            this.setState({ pokemons });
          })
    }

    render() {

        const {pokemon} = this.state;

        return (
            <div className="main">
                <FilterItens pokemon={pokemon} ></FilterItens>
                <div className="pokemons">
                    <PokedexItens pokemonsItens={this.state.pokemons} parentCallback={this.handleCallback}></PokedexItens>
                </div>
            </div>
        )
    }
}
