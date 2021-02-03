import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {pokemonUrlReducer} from './modules/pokeUrl/reducer'

const reducers = combineReducers({
  pokeUrl: pokemonUrlReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;