import { createContext, useState } from "react";

export const FilterAndPaginationContext = createContext();

const FilterAndPaginationProvider = ({ children }) => {
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
