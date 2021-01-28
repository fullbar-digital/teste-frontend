import { createContext, useState } from "react";

export const PokemonDetailContext = createContext();

const PokemonDetailProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState({});

  return (
    <PokemonDetailContext.Provider value={{ pokemonDetail, setPokemonDetail }}>
      {children}
    </PokemonDetailContext.Provider>
  );
};

export default PokemonDetailProvider;
