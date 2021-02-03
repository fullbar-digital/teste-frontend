import {useEffect} from 'react'
import CardField from "../../components/CardField";
import MainBox from "../../components/MainBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonsThunk } from "../../store/modules/pokeUrl/thunk";
import {getAllPokemonDataThunk} from "../../store/modules/pokeDataList/thunk"

const Home = () => {
  const dispatch = useDispatch();
  const pokeURL = useSelector(state => state.pokeUrl)
  
  useEffect(() => {
      dispatch(getAllPokemonsThunk())
      dispatch(getAllPokemonDataThunk())
  },[])
  return (
    <MainBox>
      <CardField />
    </MainBox>
  );
};

export default Home;
