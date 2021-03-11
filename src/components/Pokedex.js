import React, { Component } from 'react'

import '../components/Pokedex.scss'

import axios from 'axios';

import PokedexItens from '../components/pokemonItens/PokemonsItens';

export default class Pokedex extends Component {


    state = { 
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898',
        pokemons: []
    }

    componentDidMount() {
        axios.get(this.state.url)
          .then(res => {
            const pokemons = res.data['results'];
            this.setState({ pokemons });
          })
    } 

    render() {

        return (
            <div className="main">
                <div className="pokemons">
                    <PokedexItens pokemonsItens={this.state.pokemons}></PokedexItens>
                </div>
            </div>
        )
    }
}
