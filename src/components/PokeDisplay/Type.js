import React, { Component } from 'react'


export default class Type extends Component {



    render() {

        return (
            this.props['pokemonsItens'].map((type, i) =>
                <div key={i}>{type.type.name}</div>
            )

        )
    }
}
