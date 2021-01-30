import { createContext, useContext, useEffect, useState } from "react";
import { GetPokemonsContext } from "./GetPokemonsContext";

export const FilterAndPaginationContext = createContext();

const FilterAndPaginationProvider = ({ children }) => {
  const { pokemons } = useContext(GetPokemonsContext);
  const [pokemonFiltered, setPokemonFiltered] = useState({
    pokemons: [],
    pagination: {},
  });
  const [filterPokemon, setFilterPokemon] = useState({
    initialPokemon: "",
    finalPokemon: "",
    amountOfPokemonPerPage: "",
    pagination: "",
  });

  useEffect(() => {
    setPokemonFiltered({
      pokemons: pokemons,
      pagination: {
        amountOfPokemonPerPage: 300,
      },
    });
  }, [pokemons]);

  return (
    <FilterAndPaginationContext.Provider
      value={{
        pokemonFiltered,
        setPokemonFiltered,
        filterPokemon,
        setFilterPokemon,
      }}
    >
      {children}
    </FilterAndPaginationContext.Provider>
  );
};

export default FilterAndPaginationProvider;
