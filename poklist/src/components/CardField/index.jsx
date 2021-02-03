import Card from "../Card";
import { CardFieldContainer } from "./style";

const CardField = () => {
  return (
    <CardFieldContainer>
      <Card
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
        name="Luguia"
        number="249"
        type="Flying/Psychic"
      />
      <Card
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
        name="Infernape"
        number="392"
        type="Fire/Figthing"
      />
    </CardFieldContainer>
  );
};

export default CardField;
