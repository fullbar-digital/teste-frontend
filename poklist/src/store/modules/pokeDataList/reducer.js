import { GET_POKEMON_DATA } from "./actionsType";

export const getAllPokemonDataReducer = (state = [], action) => {
    switch (action.type) {
        case GET_POKEMON_DATA:
            
            return [...state, action.pokeList];
    
        default:
            return state;
    }
}