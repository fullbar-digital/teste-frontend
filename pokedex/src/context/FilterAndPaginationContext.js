import { createContext, useState } from "react";

export const FilterAndPaginationContext = createContext();

const FilterAndPaginationProvider = ({ children }) => {
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState({
    initialPokemon: "",
    finalPokemon: "",
    amountOfPokemonPerPage: "",
    pagination: "",
  });

  const limit = filterPokemon.amountOfPokemonPerPage;
  const total = filterPokemon.finalPokemon - filterPokemon.initialPokemon;

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
