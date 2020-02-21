import React, { Component } from 'react';
import PokemonList from './PokemonList';

export default class Layout extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                <PokemonList />
                </div>
            </div>
        )
    }
}
