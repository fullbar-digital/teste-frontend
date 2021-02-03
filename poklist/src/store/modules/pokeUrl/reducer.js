import {GET_POKEMON_URL} from './actionsType' 

export const pokemonUrlReducer = (state=[], action) => {
    switch (action.type) {
        case GET_POKEMON_URL:
            
            return [...state, action.pokeURL];
    
        default:
            return state;
    }
}