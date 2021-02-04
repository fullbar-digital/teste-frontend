import {useEffect, useState} from 'react'
import CardField from "../../components/CardField";
import MainBox from "../../components/MainBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonsThunk } from "../../store/modules/pokeUrl/thunk";
import {getAllPokemonDataThunk} from "../../store/modules/pokeDataList/thunk"
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';

const Home = () => {
  const pokemonData = useSelector(state => state.pokemonData)
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(10)
  const [initialPoke, setInitialPoke] = useState(0)
  const [finalPoke, setFinalPoke] = useState(898)

  useEffect( () => {
      dispatch(getAllPokemonsThunk())
      setTimeout(() => {
        dispatch(getAllPokemonDataThunk())
      }, 2500); 
  },[])

  const crescentOrder = (a, b) => {
    return a.number - b.number
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const pokemonInNumericOrder = pokemonData.sort(crescentOrder)

  const lastPokeOnPage = currentPage * pokePerPage
  const firstPokeOnPage = lastPokeOnPage - pokePerPage

  const pokemonInARange = pokemonInNumericOrder.slice(initialPoke,finalPoke)
  const pokemonFiltered = pokemonInARange.slice(firstPokeOnPage,lastPokeOnPage)

  return (
    <MainBox>
    <Filter
      setInitialPoke={setInitialPoke}
      setFinalPoke={setFinalPoke}
      setPokePerPage={setPokePerPage}
    />
    <Pagination
      pokesPerPage={pokePerPage}
      totalPokes={pokemonInARange.length}
      paginate={paginate}
      currentPage={currentPage}
    />
      <CardField pokemonList={pokemonFiltered} />
    </MainBox>
  );
};

export default Home;
