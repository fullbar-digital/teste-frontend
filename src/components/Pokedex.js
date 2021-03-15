import React, { Component, Suspense } from 'react'

import './Pokedex.scss'

import axios from 'axios';

//import ReactPaginate from 'react-paginate';

import PokedexItens from './pokemonItens/PokemonsItens';
import PokeDisplay  from './PokeDisplay/PokeDisplay';

export default class Pokedex extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        urlPokemonItem: 'https://pokeapi.co/api/v2/pokemon-form/',
        pokemons: [],
        pokemon: null,
        offset:0,
        perpage: 5
    }

    handleCallback = (childData) => {
        axios.get(this.state.urlPokemonItem + childData)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon });
            })
    }


    componentDidMount(){
        this.getPokemons()
    }


    changePerPage = (event) => {

        let perpage;
        perpage = event.target.value;
        this.setState({ perpage });
        setTimeout(() => { this.getPokemons() }, 100);
    }

    proximaPagina = () => {

        let offset;

        offset = (parseInt(this.state.offset, 10) + parseInt(this.state.perpage, 10));

        console.log("state offset: "+this.state.offset);
        console.log("state perpage: "+this.state.perpage);
        console.log(offset);

        this.setState({offset: offset});

        setTimeout(() => { this.getPokemons() }, 100);

        this.getLazy();

    }

    anteriorPagina = () => {

        let offset;

        offset = (parseInt(this.state.offset, 10) - parseInt(this.state.perpage, 10));

        console.log("state offset: "+this.state.offset);
        console.log("state perpage: "+this.state.perpage);
        console.log(offset);

        this.setState({offset: offset});

        setTimeout(() => { this.getPokemons() }, 100);

        this.getLazy();

    }

    getLazy(){
        let pokelazy = document.getElementsByClassName('poke-lazy');
        for(var i = 0; i < pokelazy.length; i++){
            pokelazy[i].classList.add('poke-lazy-active')
        }
    }


    getPokemons() {

        let url = this.state.url + `?offset=${this.state.offset}&limit=${this.state.perpage}`;
        console.log(url)
        axios.get(url)
            .then(res => {
                const pokemons = res.data['results'];
                this.setState({ pokemons });
            })
    }

    render() {

        const { pokemon } = this.state;

        return (
            <div className="main">
                <div className="top">
                    <h2>Filtros</h2>
                    <div>
                        <label>
                            Quantos itens por vez?
          <select value={this.state.perpage} onChange={this.changePerPage}>
                                <option ></option>
                                <option value="0">selecione</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </label>
                    </div>
                </div>
                <PokeDisplay pokemon={pokemon} ></PokeDisplay>
                <aside className="pokemons">
                <Suspense fallback={<div>Loading...</div>}>
                    <PokedexItens pokemonsItens={this.state.pokemons} parentCallback={this.handleCallback}></PokedexItens>
                    </Suspense>
                </aside>
                
                <footer>
                { this.state.perpage !== 0 && this.state.offset !== 0 ? <button onClick={this.anteriorPagina}>Anterior</button> : ''}
                { this.state.perpage !== 0 ? <button onClick={this.proximaPagina}>Próxima</button> : ''}
                </footer>
                
            </div>
        )
    }
}
