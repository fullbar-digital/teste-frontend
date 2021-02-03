import axios from "axios";
import { getAllPokemons } from "./actions";

export const getAllPokemonsThunk = (URL) => async (dispatch, getState) => {
  const pokeURL = URL || "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
  try {
    await axios.get(pokeURL).then((list) => {
      const results = list.data.results;
      const Url = results.map((item) => item.url);
      dispatch(getAllPokemons(Url));
      const nextURL = list.data.next;
      if (nextURL) {
        dispatch(getAllPokemonsThunk(nextURL));
      }
    });
  } catch (error) {
    console.error(error);
  }
};
