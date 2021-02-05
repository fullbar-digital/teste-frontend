import { useState } from "react";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { CardContainer, TypeContainer } from "./style";
// import ImageContainer from "./style"

const LazyImage = lazy(() => import("./style"));

const Card = ({ image, number, name, type, ability, height, weight }) => {
  const [highlighted, setHighlighted] = useState(false);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };




  return (
    <CardContainer
      highlighted={highlighted}
      onClick={() => setHighlighted(!highlighted)}
    >
      <figure>
        <Suspense fallback={<div>Loading</div>}>
          <LazyImage src={image} alt={name} />
        </Suspense>
        <figcaption>
          <h2>
            {number}# - {capitalizeFirstLetter(name)}
          </h2>
        </figcaption>
      </figure>

      <div className="pokeProfile">
        <div className='typeContainer'>
          {type.split(" / ").map((typeGetted, index) => {

            return (
                <TypeContainer type={typeGetted} key={index}>
                  {capitalizeFirstLetter(typeGetted)}
                </TypeContainer>
            );
          })}
        </div>

        {highlighted && (
          <>
            <p> 
              <span className='infoTitle'>Habilidade: </span> {capitalizeFirstLetter(ability)}
            </p>
            <p> 
              <span className='infoTitle'>Altura: </span>
              {height}
            </p>
            <p>
              <span className='infoTitle'>Peso: </span>
              {weight}
            </p>
          </>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
// imagem, número, nome e tipo
