import { createContext, useEffect, useState } from "react";

export const GetPokemonsContext = createContext();

const GetPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemonsIds = Array.from({ length: 300 }, (_, i) => i + 1);

  const getPokemonUrl = getAllPokemonsIds.map((id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return url;
  });

  const getPokemonRequest = getPokemonUrl.map(async (pokemonData) => {
    const data = await fetch(pokemonData);
    const result = await data.json();
    return await result;
  });

  const getPokemonData = async () => await Promise.all(getPokemonRequest);

  useEffect(() => {
    const setPokemonState = async () => {
      const pokemons = await getPokemonData();
      setPokemons(pokemons)
    };
    setPokemonState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GetPokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};

export default GetPokemonsProvider;
