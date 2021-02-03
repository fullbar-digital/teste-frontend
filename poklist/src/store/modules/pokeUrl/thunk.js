import axios from 'axios'
import {getAllPokemons} from './actions'

export const getAllPokemonsThunk = (start = 0, ends = 30) =>  (dispatch, getState) => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon?limit=${ends}&offset=${start}`
    try {
        axios.get(pokeURL)
        .then((list) => {
            const results = list.data.results
            const Url = results.map((item) => item.url)
            dispatch(getAllPokemons(Url))
        })
    } catch (error) {
        console.error(error)
    }
}