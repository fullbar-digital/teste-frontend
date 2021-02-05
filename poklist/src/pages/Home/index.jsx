import { useEffect, useState } from "react";
import CardField from "../../components/CardField";
import MainBox from "../../components/MainBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonsThunk } from "../../store/modules/pokeUrl/thunk";
import { getAllPokemonDataThunk } from "../../store/modules/pokeDataList/thunk";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";

const Home = () => {
  const pokemonData = useSelector((state) => state.pokemonData);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(10);
  const [initialPoke, setInitialPoke] = useState(0);
  const [finalPoke, setFinalPoke] = useState(898);
  const [paginationType, setPaginationType] = useState("pages");
  const [pokePages, setPokePages] = useState([])

  useEffect(() => {
    dispatch(getAllPokemonsThunk());
    setTimeout(() => {
      dispatch(getAllPokemonDataThunk());
    }, 2500);
  }, []);


  const crescentOrder = (a, b) => {
    return a.number - b.number;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pokemonInNumericOrder = pokemonData.sort(crescentOrder);

  const lastPokeOnPage = currentPage * pokePerPage;
  const firstPokeOnPage = lastPokeOnPage - pokePerPage;

  const pokemonInARange = pokemonInNumericOrder.slice(initialPoke, finalPoke);
  const pokemonFiltered = pokemonInARange.slice(
    firstPokeOnPage,
    lastPokeOnPage
  );
  console.log(`pokePerPage ${pokePerPage}`)
  
  useEffect(() => {
    setPokePages([...pokePages, ...pokemonFiltered])
    
  }, [currentPage])

  const paginationDecider = (paginationType) => {
  switch (paginationType) {
    case "pages":
      return <>
      <Pagination
      pokesPerPage={pokePerPage}
      totalPokes={pokemonInARange.length}
      paginate={paginate}
      currentPage={currentPage}
    />
    <CardField 
        pokemonList={pokemonFiltered} 
      />
    </>
      

    case  "infinity":
      return <>
        <CardField 
        pokemonList={pokePages} 
        infinity
        currentPage={currentPage}
        pokePerPage={pokePerPage}
        totalPokes={pokemonInARange.length}
        paginate={paginate}
      />
      </>
      
  
    default:
      return <div> Carregando ... </div>
  }
}

  const updatePages = () => setPokePages([...pokePages, ...pokemonFiltered])

  return (
    <MainBox>
      <Filter
        setInitialPoke={setInitialPoke}
        setFinalPoke={setFinalPoke}
        setPokePerPage={setPokePerPage}
        setPaginationType={setPaginationType}
        updatePages={updatePages}
        setPokePages={setPokePages}
      />

      {paginationDecider(paginationType)}

    </MainBox>
  );
};

export default Home;
