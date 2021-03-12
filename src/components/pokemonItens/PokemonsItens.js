import React, { Component } from 'react'

import './PokemonsItens.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default class PokemonsItens extends Component {

    onTrigger = (event) => {
        this.props.parentCallback(event.target.id);
        event.preventDefault();
    }

    render() {

        return (
            this.props['pokemonsItens'].map((pokemon, i) =>
                <div key={i} onClick={this.onTrigger} className="pokemon-item" >
                    <div className="pokemon-img">
                        <LazyLoadImage
                            id={pokemon.name}
                            alt={pokemon.name}
                            height={96}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} // use normal <img> attributes as props
                            effect="blur"
                            width={96} />

                        <LazyLoadImage
                            id={pokemon.name}
                            alt={pokemon.name}
                            height={96}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i + 1}.png`} // use normal <img> attributes as props
                            effect="blur"
                            width={96} />

                    </div>
                    <div className="pokemon-name center-hozintal">{pokemon.name}</div>
                </div>)

        )
    }
}
