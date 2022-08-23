import { useEffect, useState } from "react";
import { Header, Loading, Card, Modal, Info, Filter } from "../components";
import { Header, Loading, Card, Modal, Info } from "../components";
import "./style.scss";

export const Pokedex = () => {
  const [details, setDetails] = useState({});
  const [pokemons, setPokemons] = useState([]); // Lista dos pokemons
  const [loading, setLoading] = useState(true); // Variável condicional que mostra o loading enquanto há requisição
  const [modalIsVisible, setModalIsVisible] = useState(false); // Variável condicional que mostra o loading enquanto há requisição
  const [filters, setFilters] = useState({}) // Valores dinâmicos
  const [staticFilters, setStaticFilters] = useState({}) // Valores estáticos

  // Função que seta os valores estáticos e dinâmicos
  // Essa função é utilizada para adquirir dados do componente Filter
  const dataFilter = (obj) => {
    if (!obj) return console.log('Erro na função dataFilter')
    if('quantity' in obj) return setStaticFilters(obj)
    setFilters(obj)
  }

  useEffect(() => {
    // Requisição dos pokemons
    fetch(urlPokedex)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [filters.from, staticFilters.quantity]);

  // Renderiza a lista de Pokemons - Pokédex
  function renderPokedex() {
    return (
      <ul
        className="pokedex__list"
        style={{ minHeight: loading ? "200px" : "auto" }}
      >
        {pokemons.map((pokemon, index) => {
          index = index + 1; // Rota da pokedex não possui valor 0
          return (
            <li key={index}>
              <Card
                id={index}
                img={imgPokemon(functions.minThreeNums(index))}
                func={openModal}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  const openModal = (obj) => {
    setDetails(obj); // Objeto com os detalhes do Pokemon
    setModalIsVisible(true); // Deixa a Modal visivel
  };

  const closeModal = () => {
    setModalIsVisible(false); // Fecha a modal
  };

  return (
    <>
      {modalIsVisible && (
        <Modal title={details.name} closeFunc={() => closeModal()}>
          <Info details={details} />
        </Modal>
      )}
      <main id="pokedex" className="container">
        <Header title={"Pokédex"} />
        <Filter filters={dataFilter} />
        {loading ? <Loading /> : renderPokedex()}
      </main>
    </>
  );
};
