import Card from "../Card";
import { CardFieldContainer } from "./style";
import { useSelector } from 'react-redux'

const CardField = () => {
  const pokemonData = useSelector(state => state.pokemonData)

  const crescentOrder = (a, b) => {
    return a.number - b.number
  }

  const pokemonDataREfined = pokemonData.sort(crescentOrder)
  // console.log(pokemonDataREfined)

  return (
    <CardFieldContainer>
    {pokemonDataREfined.map(({image, name, number, type}) => {
      return (
        <Card
        key={number}
        image={image}
        name={name}
        number={number}
        type={type}
      />
      )
    })}
      
      
    </CardFieldContainer>
  );
};

export default CardField;
