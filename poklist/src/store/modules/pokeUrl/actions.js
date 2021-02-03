import {GET_POKEMON_URL} from './actionsType'

export const getAllPokemons = (pokeURL) => {
    return {type: GET_POKEMON_URL, pokeURL}
}