import axios from 'axios'
import {getAllPokemonData} from './actions'

export const getAllPokemonDataThunk = () => (dispatch, getState) =>{
    const {pokeUrl} =  getState(state => state.pokeUrl)

    pokeUrl.forEach(url => {
        axios.get(url)
        .then(response => {
            const { name, id, sprites,types, abilities } = response.data
            const { front_default } = sprites
            let pokeTypes = types[0].type.name
            if(types[1]){
                pokeTypes += ' / ' + types[1].type.name
            }
            const mainAbility = abilities[0].ability.name

            const pokemonDataFiltered = {
                name,
                number: id,
                image: front_default,
                type: pokeTypes,
                ability: mainAbility
            }

            dispatch(getAllPokemonData(pokemonDataFiltered))
        })
    });
}