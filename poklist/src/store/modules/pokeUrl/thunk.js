import axios from "axios";
import { getAllPokemons } from "./actions";

export const getAllPokemonsThunk = (URL) => async (dispatch, getState) => {
  const {pokeUrl} = getState()
  const pokeUrlSize = pokeUrl.length
  const nationalDexSize = 898
  
  const pokeURL = URL || "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const recursiveLoop = (UrlList, list) =>{
    dispatch(getAllPokemons(UrlList))
    const nextURL = list.data.next
    dispatch(getAllPokemonsThunk(nextURL));
  }

  const setTheFinalPokes = (UrlList, nationalDexSize) => {
    const listToAdd = []
    for(let i = nationalDexSize ; i >  pokeUrlSize; i--){
      const addIndex = nationalDexSize - i
      listToAdd.push(UrlList[addIndex])
    }
    dispatch(getAllPokemons(listToAdd))
    
  }
  
  try {
    await axios.get(pokeURL)
      .then((list) => {
        const results = list.data.results;
        const UrlList = results.map((item) => item.url);
        
        pokeUrlSize + UrlList.length < nationalDexSize ? 
          recursiveLoop(UrlList, list) : 
          setTheFinalPokes(UrlList, nationalDexSize)
      });
  } catch (error) {
    console.error(error);
  }
};
