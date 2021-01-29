import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FilterAndPaginationContext } from "../../context/FilterAndPaginationContext";
import { PokemonDetailContext } from "../../context/PokemonDetailContext";
import Card from "../Card";
import Filters from "../Filters";
import Pagination from "../Pagination";
import "./style.scss";

const GridCard = () => {
  const { pokemonFiltered } = useContext(FilterAndPaginationContext);
  const { setPokemonDetail } = useContext(PokemonDetailContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState();

  useEffect(() => {
    setPostPerPage(Number(pokemonFiltered.pagination.amountOfPokemonPerPage));
  }, [pokemonFiltered]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = pokemonFiltered.pokemons.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const history = useHistory();

  const pageDetail = (pokemon) => {
    setPokemonDetail(pokemon);
    history.push("./detail");
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Filters setCurrentPage={setCurrentPage} />
      <section className="grid-card">
        <div className="card-container">
          <Card pokemonFiltered={currentPosts} pageDetail={pageDetail} />
        </div>
      </section>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={pokemonFiltered.pokemons.length}
        paginate={paginate}
      />
    </>
  );
};

export default GridCard;
