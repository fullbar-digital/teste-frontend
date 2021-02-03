import axios from 'axios'
import {getAllPokemonData} from './actions'

export const getAllPokemonDataThunk = () => (dispatch, getState) =>{
    const pokeURL =  getState(state => state.pokeUrl)
    console.log(pokeURL.pokeUrl)
    // pokeURL.forEach(url => {
    //     axios.get(url)
    //     .then(response => console.log(response))
    // });
}