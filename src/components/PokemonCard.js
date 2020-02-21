import React, { Component } from 'react';
import styled from 'styled-components';


//new styled component

// const Sprite = styled.img`
//     width: 10px;
//     height: 10px;
// `;

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };

    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
        this.setState({ name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex });
    }
    render() {
        return (
            <div className="card">
                <h1 className="card-header">Número: {this.state.pokemonIndex}</h1>
                <div className="card-body">
                    <h1 className="card-header">Pokémon: {this.state.name}</h1>
                </div>
                {/* <Sprite className="imagem" src={this.state.imageUrl} /> */}
                <img className="imagem" src={this.state.imageUrl} />
                
            </div>
        )
    }
}
