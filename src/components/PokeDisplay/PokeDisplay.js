import React, { Component } from 'react'

import './PokeDisplay.scss'


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
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;
        }
    }

    getImgLaze(pokemon) {
        if (!pokemon) {
            return (<LazyLoadImage
                wrapperClassName={`pokedisplay-lazy`}
                id={52}
                alt={'?'}
                height={215}
                src={this.getImage(51)}
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




    render() {

        const pokemon = this.props.pokemon;

        let name = !pokemon ? '' : pokemon.name;
        let id = !pokemon ? '' : pokemon.id;

        return (

            <aside className="display">
                <div className="box">
                    {this.getImgLaze(pokemon)}
                     <h2>{id} - <span>{name}</span></h2>
                    {this.getType(pokemon)}
                </div>
            </aside>
        )


    }
}
