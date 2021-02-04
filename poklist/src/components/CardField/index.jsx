import Card from "../Card";
import { CardFieldContainer } from "./style";
import { useSelector } from 'react-redux'

const CardField = ({pokemonList}) => {
  

 

  return (
    <CardFieldContainer>
    {pokemonList.map(({image, name, number, type}) => {
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
