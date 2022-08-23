import "./style.scss";
import { functions, app } from "../../assets/script/scripts";
import { useEffect, useState } from "react";
import { Image } from "../Image";

export const Card = ({ urlPokemon, func }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição detalhes do Pokemon
    fetch(urlPokemon)
      .then((response) => response.json())
      .then((data) => setInfoPokemon(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [urlPokemon]);

  // Mostra o tipo do Pokemon
  function renderAbilities() {
    return infoPokemon.types.map((res, index) => {
      const { name } = res.type;
      return <li key={index} className={`card__information__abilities-each ${name}`}>{name}</li>;
    });
  }

  // Objeto de exportação
  // Dados que são transferidos para o componente Pokedex
  // E depois para o component Info
  const obj = {
    name: infoPokemon.name,
    height: infoPokemon.height,
    weight: infoPokemon.weight,
    stats: infoPokemon.stats,
    base_experience: infoPokemon.base_experience,
    // Possui condicional, pois antes da requisição o valor é setado como undefined
    img: infoPokemon.id && app.imgPokemon(functions.minThreeNums(infoPokemon.id))
  };

  return (
    <>
      {!loading && (
        <div onClick={() => func(obj)} className="card">
          <Image parentHeight={'215px'} src={app.imgPokemon(functions.minThreeNums(infoPokemon.id))} alt={`Imagem do pokemon ${infoPokemon.name}`} />
          <div className="card__information">
            <span className="card__information__id">
              nº {functions.minThreeNums(infoPokemon.id)}
            </span>
            <span className="card__information__name">{infoPokemon.name}</span>
            <ul className="card__information__abilities">
              {renderAbilities()}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
