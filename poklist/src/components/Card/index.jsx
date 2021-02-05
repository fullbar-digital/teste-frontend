import { useState } from "react";
import { lazy, Suspense } from "react";
import { CardContainer } from "./style";
// import ImageContainer from "./style"

const LazyImage = lazy(() => import("./style"));

const Card = ({ image, number, name, type, ability, height, weight }) => {
  const [highlighted, setHighlighted] = useState(false);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const typeColor = (typing) => {
    switch (typing) {
      case "normal":
        return "#A8A878";

      case "fire":
        return "#F08030";

      case "fighting":
        return "#C03028";

      case "water":
        return "#6890F0";

      case "flying":
        return "#A890F0";

      case "grass":
        return "#78C850";

      case "poison":
        return "#A040A0";

      case "electric":
        return "#F8D030";

      case "ground":
        return "#E0C068";

      case "psychic":
        return "#F85888";

      case "rock":
        return "#B8A038";

      case "ice":
        return "#98D8D8";

      case "bug":
        return "#A8B820";

      case "dragon":
        return "#7038F8";

      case "ghost":
        return "#705898";

      case "dark":
        return "#705848";

      case "steel":
        return "#B8B8D0";

      case "fairy":
        return "#EE99AC";

      default:
        return "#000";
    }
  };

  return (
    <CardContainer
      highlighted={highlighted}
      onClick={() => setHighlighted(!highlighted)}
    >
      <Suspense fallback={<div>Loading</div>}>
        <LazyImage src={image} alt={name} />
      </Suspense>
      <h2>
        {number}# - {capitalizeFirstLetter(name)}
      </h2>

      <p>
        {type.split("/").map((typeGetted, index) => {
          return (
            <span className="types" bcType={typeColor(typeGetted)} key={index}>
              {capitalizeFirstLetter(typeGetted)}
            </span>
          );
        })}
      </p>

      {highlighted && (
        <>
          <p>Habilidade: {capitalizeFirstLetter(ability)}</p>
          <p>Altura: {height}</p>
          <p>Peso{weight}</p>
        </>
      )}
    </CardContainer>
  );
};

export default Card;
// imagem, número, nome e tipo
