import { useRef, useCallback } from "react";
import Card from "../Card";
import { CardFieldContainer } from "./style";

const CardField = ({ pokemonList, paginationType, currentPage, pokePerPage, totalPokes, paginate }) => {

  const numberOfPages = Math.ceil(totalPokes / pokePerPage);

  const observer = useRef();
  const lastBookElementRef = useCallback( node =>{
   
    observer.current && observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentPage < numberOfPages) {
        paginate(currentPage  + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [currentPage, numberOfPages, paginate]);

  return (
    <CardFieldContainer>
      {paginationType === "infinity" ? (
        <>
        {console.log(pokemonList)}
          {pokemonList.map(({ image, name, number, type }, index) => {
            return pokemonList.length === index + 1 ? (
              
              <div ref={lastBookElementRef} key={number}>
                <Card
                  image={image}
                  name={name}
                  number={number}
                  type={type}
                />
              </div>
            ) : (
              <Card
                key={number}
                image={image}
                name={name}
                number={number}
                type={type}
              />
            );
          })}
        </>
      ) : (
        <>
          {pokemonList.map(({ image, name, number, type }) => {
            return (
              <Card
                key={number}
                image={image}
                name={name}
                number={number}
                type={type}
              />
            );
          })}
        </>
      )}
    </CardFieldContainer>
  );
};

export default CardField;
