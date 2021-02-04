import axios from "axios";
import { getAllPokemons } from "./actions";

export const getAllPokemonsThunk = (URL) => async (dispatch, getState) => {
  const {pokeUrl} = getState()
  const pokeUrlSize = pokeUrl.length
  const nationalDexSize = 898
  
  const pokeURL = URL || "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  
  const recursiveLoop = (Url, list) =>{
    dispatch(getAllPokemons(Url))
    const nextURL = list.data.next
    if (nextURL) {
      dispatch(getAllPokemonsThunk(nextURL));
    }
  }

  const setTheFinalPokes = (Url, nationalDexSize) => {
    for(let i = nationalDexSize ; i >  pokeUrlSize; i--){
      const addIndex = nationalDexSize - i
      dispatch(getAllPokemons(Url[addIndex]))
    }
    
  }

  try {
    await axios.get(pokeURL)
      .then((list) => {
        const results = list.data.results;
        const Url = results.map((item) => item.url);

        pokeUrlSize + Url.length < nationalDexSize ? 
          recursiveLoop(Url, list) : 
          setTheFinalPokes(Url, nationalDexSize)
      });
  } catch (error) {
    console.error(error);
  }
};
