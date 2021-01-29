import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPokemonsContext } from "../../context/GetPokemonsContext";
import "./style.scss";

const PokemonDetail = () => {
  const [detail, setDetail] = useState([]);
  const { pokemons } = useContext(GetPokemonsContext);

  const { name } = useParams();

  useEffect(() => {
    const getPokemonDetail = async () => {
      const pokeDetail = pokemons.filter((pokemon) => pokemon.name === name);
      setDetail(pokeDetail);
      console.log(pokeDetail);
    };

    getPokemonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  return (
    detail && (
      <section className="pokemon-detail">
        {/* <div className="pokemon-img-bg">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${detail.id}.png`}
          alt={detail.name}
          className="pokemon-img"
        />
        <h2 className="name">{detail.name.toUpperCase()}</h2>
      </div>
      <div className="detail">
        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Type</p>
          </div>
          <div className="type-content">
            <p className="grass padding-radius">
              {detail.types[0].type.name !== "undefined"
                ? detail.types[0].type.name.toUpperCase()
                : ""}
            </p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Height</p>
          </div>
          <div className="type-content">
            <p className="height padding-radius">{detail.height}</p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Weight</p>
          </div>
          <div className="type-content">
            <p className="weight padding-radius">{detail.weight}</p>
          </div>
        </div>

        <div className="type-group">
          <div className="type-poke">
            <p className="type-title">Abilities</p>
          </div>
          <div className="type-content">
            {detail.abilities[0].ability.name !== "undefined" ? (
              <p className="overgrow padding-radius">
                {detail.abilities[0].ability.name.toUpperCase()}
              </p>
            ) : null}
          </div>
        </div>
      </div> */}
      </section>
    )
  );
};

export default PokemonDetail;
