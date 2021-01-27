import { createContext, useEffect, useState } from "react";

export const GetPokemonsContext = createContext();

const GetPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState({});
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    const getAllPokemons = async () => {
      const pokemonsData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );

      const results = await pokemonsData.json();
      setPokemons(results);
    };

    getAllPokemons();
  }, [limit]);

  return (
    <GetPokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};

export default GetPokemonsProvider;
