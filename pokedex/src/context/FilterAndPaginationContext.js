import { createContext, useContext, useEffect, useState } from "react";
import { GetPokemonsContext } from "./GetPokemonsContext";

export const FilterAndPaginationContext = createContext();

const FilterAndPaginationProvider = ({ children }) => {
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const { pokemons } = useContext(GetPokemonsContext);
  const [filterPokemon, setFilterPokemon] = useState({
    initialPokemon: "",
    finalPokemon: "",
    amountOfPokemonPerPage: "",
    pagination: "",
  });

  useEffect(() => {
    setPokemonFiltered(pokemons);
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
