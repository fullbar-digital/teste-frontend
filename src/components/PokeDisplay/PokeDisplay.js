import React, { Component } from 'react'

import './PokeDisplay.scss'

import pokeball from '../../img/pokeball.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class PokeDisplay extends Component {




    padz(n, length) {
        var str = '' + n;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    getImage(index) {
        index++;
        if (index === 0) {
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
        } else {
            index = this.padz(index, 3);
            //return 'https://play-lh.googleusercontent.com/EDYskRd9dnqmKfQP5KxjJHj5NgbWDiS9zceSmfYRgeDaQRQnaiRyZIQNeoX5AIIZ5VY=s180-rw';
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;
        }
    }

    getImgLaze(pokemon) {
        if (!pokemon) {
            return (<LazyLoadImage
                wrapperClassName={`pokedisplay-lazy`}
                id={0}
                alt={'?'}
                height={215}
                src={pokeball}
                effect="blur"
                delayMethod="debounce"
                width={215} />)

        } else {
            return (<LazyLoadImage
                wrapperClassName={`${pokemon.name} pokedisplay-lazy poke-lazy-active`}
                id={pokemon.name}
                alt={pokemon.name}
                height={215}
                src={this.getImage(pokemon.id - 1)}
                effect="blur"
                delayMethod="debounce"
                width={215} />)

        }

    }

    getType(pokemon) {
        if (!pokemon) {
        } else {
            return (
                pokemon['types'].map((type, i) =>
                    <div key={i} className={`type ${type.type.name}`}  >{type.type.name}</div>
                )
            )

        }
    }


    textToShow(props) {
        if (props.id === 0) {
            return <div><h1>Bem vindo a Pokédex</h1><h2>Escolha o seu pokémon!</h2></div>
        } else {
            return <h2>{props.id} - <span>{props.name}</span></h2>
        }
    }

    render() {

        const pokemon = this.props.pokemon;

        let name = !pokemon ? '' : pokemon.name;
        let id = !pokemon ? 0 : pokemon.id;

        return (

            <aside className="display">
                <div className="box">
                    {this.getImgLaze(pokemon)}
                    <this.textToShow id={id} name={name} />
                    {this.getType(pokemon)}
                </div>
            </aside>
        )


    }
}
