import { createContext, useState } from "react";

export const FilterAndPaginationContext = createContext();

const FilterAndPaginationProvider = ({ children }) => {
  const [filterPokemon, setFilterPokemon] = useState({
    initialPokemon: "",
    finalPokemon: "",
    amountOfPokemonPerPage: "",
    pagination: "",
  });

  const [pokemonFilteres, setPokemonFiltered] = useState([]);
  return (
    <FilterAndPaginationContext.Provider
      value={{
        filterPokemon,
        setFilterPokemon,
        pokemonFilteres,
        setPokemonFiltered,
      }}
    >
      {children}
    </FilterAndPaginationContext.Provider>
  );
};

export default FilterAndPaginationProvider;
