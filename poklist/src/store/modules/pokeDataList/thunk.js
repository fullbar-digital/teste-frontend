import axios from 'axios'
import {getAllPokemonData} from './actions'

export const getAllPokemonDataThunk = () => (dispatch, getState) =>{
    const {pokeUrl} =  getState()
    pokeUrl.forEach(url => {
        axios.get(url)
        .then(response => {
            const { name, id, sprites,types, abilities, height, weight } = response.data
            const { front_default, front_shiny } = sprites
            let pokeTypes = types[0].type.name
            if(types[1]){
                pokeTypes += ' / ' + types[1].type.name
            }
            const mainAbility = abilities[0].ability.name

            const pokemonDataFiltered = {
                name,
                number: id,
                image: front_default,
                imageShiny:front_shiny,
                type: pokeTypes,
                ability: mainAbility,
                height,
                weight
            }
            
            dispatch(getAllPokemonData(pokemonDataFiltered))
            
        })
    });
}