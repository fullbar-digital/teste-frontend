import React, { Component } from 'react'

import './FilterItens.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class FilterItens extends Component {

    padz(n, length) {
        var str = '' + n;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    getImage(index) {
        index++;
        index = this.padz(index, 3);
        //return 'https://play-lh.googleusercontent.com/EDYskRd9dnqmKfQP5KxjJHj5NgbWDiS9zceSmfYRgeDaQRQnaiRyZIQNeoX5AIIZ5VY=s180-rw';
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;
    }
    
    render() {
       
        const pokemon = this.props.pokemon;
        
        return (
            <div className="filter">
                <div className="box">
                <LazyLoadImage 
                            id={pokemon.name}
                            alt={pokemon.name}
                            height={215}
                            src={this.getImage(pokemon.id)} // use normal <img> attributes as props
                            effect="blur"
                            width={215} />
                </div>
            </div>
        )
    }
}
