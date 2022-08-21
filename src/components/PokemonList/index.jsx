import { useEffect, useState } from "react";
import { Header, Loading, Card } from "../components";
import "./style.scss";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]); // Lista dos pokemons
  const [loading, setLoading] = useState(true); // Variável condicional que mostra o loading enquanto há requisição

  // API Pokemon
  const urlPokedex = "https://pokeapi.co/api/v2/pokemon/";
  // API das imagens dos Pokemons
  const imgPokemon = function (id) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  };

  // Função que trata os ids do pokemon
  // Retorna como string é min. 3 números
  function minThreeNums(id) {
    let numberPokemon = id.toString();
    while (numberPokemon.length < 3) numberPokemon = "0" + numberPokemon;
    return numberPokemon;
  }

  useEffect(() => {
    // Requisição dos pokemons
    fetch(urlPokedex)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Renderiza a lista de Pokemons - Pokédex
  function renderPokedex() {
    return (
      <ul
        className="pokedex__list"
        style={{ minHeight: loading ? "200px" : "auto" }}
      >
        {pokemons.map((pokemon, index) => {
          index = index + 1; // Rota da pokedex não possui valor 0
          const { name, url } = pokemon; // Nome do pokemon e url para informações detalhadas
          return (
            <li key={index}>
              <Card
                url={url}
                id={minThreeNums(index)}
                name={name}
                img={imgPokemon(minThreeNums(index))}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <main id="pokedex" className="container">
        <Header title={"Pokédex"} />
        {loading ? <Loading /> : renderPokedex()}
      </main>
    </>
  );
};
