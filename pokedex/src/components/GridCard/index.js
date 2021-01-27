import { useContext } from "react";
import { GetPokemonsContext } from "../../context/GetPokemonsContext";
import "./style.scss";

const GridCard = () => {
  const { pokemons } = useContext(GetPokemonsContext);
  const pokemonsData = pokemons.results;

  return (
    <section className="grid-card">
      <div className="card-container">
        {pokemonsData.map((pokemon, index) => (
          <div key={index + 1} className="card">
            <div className="card-info-pokemon">
              <img
                class="card-image"
                src={`https://pokeres.bastionbot.org/images/pokemon/${
                  index + 1
                }.png`}
                alt={pokemon.name}
              />

              <div className="card-info">
                <div className="card-pokemon-number">
                  <p className="number">#{index + 1}</p>
                </div>
                <h2 className="name">{pokemon.name}</h2>
                <p className="type"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridCard;
