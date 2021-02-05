import { useRef, useCallback } from "react";
import Card from "../Card";
import { CardFieldContainer } from "./style";

const CardField = ({
  pokemonList,
  infinity = false,
  currentPage,
  pokePerPage,
  totalPokes,
  paginate,
  pokePages,
  updatePage,
}) => {
  const numberOfPages = Math.ceil(totalPokes / pokePerPage);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      observer.current && observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentPage < numberOfPages) {
          paginate(currentPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [currentPage, numberOfPages, paginate]
  );

  return (
    <CardFieldContainer>
      {infinity ? (
        <>
          {console.log(pokemonList)}
          {pokemonList.map(
            ({ image, name, number, type, ability, height, weight }, index) => {
              return pokemonList.length === index + 1 ? (
                <div ref={lastBookElementRef} key={number}>
                  <Card
                    image={image}
                    name={name}
                    number={number}
                    type={type}
                    ability={ability}
                    height={height}
                    weight={weight}
                  />
                </div>
              ) : (
                <Card
                  key={number}
                  image={image}
                  name={name}
                  number={number}
                  type={type}
                  ability={ability}
                  height={height}
                  weight={weight}
                />
              );
            }
          )}
        </>
      ) : (
        <>
          {pokemonList.map(
            ({ image, name, number, type, ability, height, weight }) => {
              return (
                <Card
                  key={number}
                  image={image}
                  name={name}
                  number={number}
                  type={type}
                  ability={ability}
                  height={height}
                  weight={weight}
                />
              );
            }
          )}
        </>
      )}
    </CardFieldContainer>
  );
};

export default CardField;
