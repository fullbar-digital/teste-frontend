import { useContext, useEffect } from "react";
import { FilterAndPaginationContext } from "../../context/FilterAndPaginationContext";
import { GetPokemonsContext } from "../../context/GetPokemonsContext";
import Filters from "../Filters";
import "./style.scss";

const GridCard = () => {
  const { pokemons } = useContext(GetPokemonsContext);
  const {
    pokemonFilteres,
    setPokemonFiltered,
    filterPokemon,
    setFilterPokemon,
  } = useContext(FilterAndPaginationContext);

  const initialPokemons = () => {
    const pokemonData = pokemons.filter(
      (pokemon) =>
        pokemon.id >= filterPokemon.initialPokemon &&
        pokemon.id <= filterPokemon.finalPokemon
    );
    return pokemonData;
  };

  useEffect(() => {
    setFilterPokemon({
      initialPokemon: 1,
      finalPokemon: 10,
      amountOfPokemonPerPage: 10,
      pagination: "scroll",
    });
    setPokemonFiltered(initialPokemons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight
    ) {
      return;
    }

    const pokemonData = pokemons.filter(
      (pokemon) =>
        pokemon.id >= filterPokemon.initialPokemon &&
        pokemon.id <= ++filterPokemon.finalPokemon
    );
    setPokemonFiltered(pokemonData);
  };

  return (
    <>
      <Filters />
      <section className="grid-card">
        <div className="card-container">
          {pokemonFilteres.map((pokemon) => (
            <div key={pokemon.id} className="card">
              <div className="card-info-pokemon">
                <img
                  className="card-image"
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                  loading="lazy"
                  alt={pokemon.name}
                />

                <div className="card-info">
                  <div className="card-pokemon-number">
                    <p className="number">#{pokemon.id}</p>
                  </div>
                  <h2 className="name">{pokemon.name.toUpperCase()}</h2>
                  <p className="type">
                    {pokemon.types[0].type.name.toUpperCase()}
                  </p>
                  <button className="button-info">INFO</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GridCard;
