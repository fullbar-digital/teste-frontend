import React, { Component } from 'react'

import './PokemonsItens.scss'

//import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class PokemonsItens extends Component {



    pad_with_zeroes(number, length) {

        var my_string = '' + number;
        while (my_string.length < length) {
            my_string = '0' + my_string;
        }
    
        return my_string;
    
    }



    getImage(index){

        
        index++;

        index = this.pad_with_zeroes(index, 3);

        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;

        //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

    }



    render() {
        return (

             this.props['pokemonsItens'].map((pokemon, i) => 
            <div key={i} className="pokemon-item" >
                <div className="pokemon-img"><img src={this.getImage(i)} alt={pokemon.name} /></div>
                 <div className="pokemon-name center-hozintal">{pokemon.name}</div>
                 </div>)

        )
    }
}
