import {useEffect} from 'react'
import CardField from "../../components/CardField";
import MainBox from "../../components/MainBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonsThunk } from "../../store/modules/pokeUrl/thunk";
import {getAllPokemonDataThunk} from "../../store/modules/pokeDataList/thunk"

const Home = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector(state => state.pokemonData)
  
  setTimeout(() => {
    
  console.log(pokemonData)
  }, 5000);

  useEffect(() => {
      dispatch(getAllPokemonsThunk())
      setTimeout(() => {
        dispatch(getAllPokemonDataThunk())
      }, 3000); 
  },[])

  return (
    <MainBox>
      <CardField />
    </MainBox>
  );
};

export default Home;
