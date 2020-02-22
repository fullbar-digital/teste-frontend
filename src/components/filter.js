import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div class="filter">
                <h4>Pokémon Inicial</h4>
                <input type="search" class="" placeholder=""></input>

                <h4>Pokémon Final</h4>
                <input type="search" class="" placeholder=""></input>

                <h4>Pokémons por página</h4>
                <select id="ppp">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>

                <h4>Modo de exibição</h4>
                <select id="exibicao">
                    <option>Scroll Infinito</option>
                    <option>Paginação</option>
                </select>

                <br></br>
                <br></br>
                <button>Aplicar filtro</button>
            </div>
        )
    }
}
