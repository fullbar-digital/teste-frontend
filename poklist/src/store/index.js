import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {pokemonUrlReducer} from './modules/pokeUrl/reducer'
import {getAllPokemonDataReducer} from './modules/pokeDataList/reducer'

const reducers = combineReducers({
  pokeUrl: pokemonUrlReducer,
  pokemonData: getAllPokemonDataReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;