import React, { Component } from 'react';
import PokemonList from './PokemonList';

export default class Layout extends Component {
    render() {
        return (
            <div className="row">
                <PokemonList />
                </div>
          
        )
    }
}
