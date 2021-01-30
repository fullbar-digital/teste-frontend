import { createContext, useState } from "react";

export const PokeDetailContext = createContext();

const PokeDetailProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState({});

  return (
    <PokeDetailContext.Provider
      value={{
        pokemonDetail,
        setPokemonDetail,
      }}
    >
      {children}
    </PokeDetailContext.Provider>
  );
};

export default PokeDetailProvider;
