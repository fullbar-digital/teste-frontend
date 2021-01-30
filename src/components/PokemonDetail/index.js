import { useContext } from "react";
import { PokeDetailContext } from "../../context/PokeDetail";
import "./style.scss";

const PokemonDetail = () => {
  const { pokemonDetail } = useContext(PokeDetailContext);

  return (
    <section className="pokemon-detail">
      <div className="pokemon-img-bg">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetail.id}.png`}
          alt={pokemonDetail.name}
          className="pokemon-img"
        />
        <h2 className="name">{pokemonDetail.name.toUpperCase()}</h2>
      </div>
      <div className="detail">
        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Type</p>
          </div>
          <div className="type-content">
            <p className="grass padding-radius">
              {pokemonDetail.types[0].type.name.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Height</p>
          </div>
          <div className="type-content">
            <p className="height padding-radius">{pokemonDetail.height}</p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Weight</p>
          </div>
          <div className="type-content">
            <p className="weight padding-radius">{pokemonDetail.weight}</p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Abilities</p>
          </div>
          <div className="type-content">
            {pokemonDetail.abilities[0].ability.name !== "undefined" ? (
              <p className="overgrow padding-radius">
                {pokemonDetail.abilities[0].ability.name.toUpperCase()}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetail;
