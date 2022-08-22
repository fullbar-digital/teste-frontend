import "./style.scss";
import { functions, app } from "../../assets/script/scripts";
import { useEffect, useState } from "react";

export const Card = ({ id, img, func }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição detalhes do pokemon
    fetch(app.urlPokemonDetails(id))
      .then((response) => response.json())
      .then((data) => setInfoPokemon(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Mostra o tipo do Pokemon
  function renderAbilities() {
    return infoPokemon.types.map((res, index) => {
      const { name } = res.type;
      return <li key={index}>{name}</li>;
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
    img: img,
  };

  return (
    <>
      {!loading && (
        <div onClick={() => func(obj)} className="card">
          <img src={img} alt={`Imagem do pokemon ${infoPokemon.name}`} />
          <div className="card__information">
            <span className="card__information__id">
              nº {functions.minThreeNums(id)}
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
