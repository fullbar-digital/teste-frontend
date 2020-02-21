import React, { Component } from 'react';
import styled from 'styled-components';


//new styled component

const Sprite = styled.img`
    width: 5em;
    height: 5em;
`;


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
            <div className="card-colocar-css">
                <h5 className="card.header">{this.state.pokemonIndex}</h5>

<Sprite className="imagem" src={this.state.imageUrl}/>

                <div className="card-body">
                    <h6 className="card.header">{this.state.name}</h6>

                </div>


            </div>
        )
    }
}
