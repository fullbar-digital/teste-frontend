import React, { PureComponent } from 'react'

import logo from '../img/logo.png'

export default class Header extends PureComponent {
    render() {
        return (
            <header>
                <img height={50} src={logo} alt="Pokémon" />
            </header>
        )
    }
}
