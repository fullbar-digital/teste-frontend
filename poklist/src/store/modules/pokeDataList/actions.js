import { GET_POKEMON_DATA } from "./actionsType";

export const getAllPokemonData = (pokeList) => {
    return {type: GET_POKEMON_DATA, pokeList}
}