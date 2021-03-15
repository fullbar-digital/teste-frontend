import React, { Component } from 'react'

import './PokemonsItens.scss'

import axios from 'axios';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

export default class PokemonsItens extends Component {

    state = {
        types: [],
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon: null
    }

    onTrigger = (event) => {

        this.getLazyDisplay();

        this.props.parentCallback(event.target.classList[0]);

        window.scrollTo({top: 0, behavior: 'smooth'});

        event.preventDefault();
    }

    getLazyDisplay(){
        let pokelazy = document.getElementsByClassName('pokedisplay-lazy');
        setTimeout(() => { pokelazy[0].classList.remove('poke-lazy-active') }, 1500);
    }

    getPokemon(url) {
        axios.get(url)
            .then(res => {
                this.setState({ pokemon: res.data });
            })
    }

    render() {

        return (
            
            this.props['pokemonsItens'].map((pokemon, i) =>
                <div key={i} onClick={this.onTrigger} className={`${pokemon.name} pokemon-item`} >
                    <div className={`${pokemon.name} pokemon-img`} >
                        <LazyLoadImage
                            wrapperClassName={`${pokemon.name} poke-lazy`}
                            className={pokemon.name}
                            alt={pokemon.name}
                            height={96}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} // use normal <img> attributes as props
                            effect="blur"
                            delayMethod={'debounce'}
                            width={96} />
                    </div>
                    <div className={`${pokemon.name} pokemon-name center-hozintal`}>{pokemon.name}</div>
                </div>)

        )
    }
}
