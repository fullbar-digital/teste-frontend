import { useEffect, useState } from "react";
import { Header, Loading, Card, Modal, Info, Filter } from "../components";
import { app } from '../../assets/script/scripts'
import "./style.scss";

export const Pokedex = () => {
  const [details, setDetails] = useState({}); // Variável que retorna os detalhes do Pokemon clicado
  const [pokemons, setPokemons] = useState([]); // Lista dos pokemons
  const [loading, setLoading] = useState(true); // Variável condicional que mostra o loading enquanto há requisição
  const [modalIsVisible, setModalIsVisible] = useState(false); // Variável condicional que mostra o loading enquanto há requisição
  const [filters, setFilters] = useState({}) // Valores dinâmicos
  const [staticFilters, setStaticFilters] = useState({}) // Valores estáticos
  const [pages, setPages] = useState({})

  // Função que seta os valores estáticos e dinâmicos
  // Essa função é utilizada para adquirir dados do componente Filter
  const dataFilter = (obj) => {
    if (!obj) return console.log('Erro na função dataFilter')
    if('quantity' in obj) return setStaticFilters(obj)
    setFilters(obj)
  }

  const getAswer = (url = app.urlPokedex(filters.from, staticFilters.quantity)) => {
    // Requisição dos pokemons
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { results, next, previous } = data
        setPokemons(results)
        setPages({next: next, previous: previous})
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }
  
  useEffect(() => {
    getAswer()
  }, [filters.from, staticFilters.quantity]);

  // Renderiza a lista de Pokemons - Pokédex
  function renderPokedex() {
    return (
      <ul
        className="pokedex__list"
      >
        {pokemons.map((pokemon, index) => {
          index = index + 1; // Rota da pokedex não possui valor 0
          return (
            <li key={index}>
              <Card
                urlPokemon={pokemon.url}
                func={openModal}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  // Abre o componente Modal
  const openModal = (obj) => {
    setDetails(obj); // Objeto com os detalhes do Pokemon
    setModalIsVisible(true); // Deixa a Modal visivel
  };

  // Fecha o componente Modal
  const closeModal = () => {
    setModalIsVisible(false); // Fecha a modal
  };

  const GroupBtn = () => {
    return (
      <>
        <div className="group-btn__container">
          <button onClick={() => {getAswer(pages.previous)}} disabled={pages.previous === null} >anterior</button>
          <button onClick={() => {getAswer(pages.next)}} disabled={!pages.next === null} >depois</button>
        </div>
      </>
    )
  }

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
        {loading ? <Loading />
          :
          <>
            {renderPokedex()}
            <GroupBtn />
          </>}
      </main>
    </>
  );
};
