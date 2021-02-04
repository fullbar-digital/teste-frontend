import { lazy, Suspense } from "react";
import { CardContainer } from "./style";
// import ImageContainer from "./style"

const LazyImage = lazy(() => import("./style"));

const Card = ({ image, number, name, type }) => {
  return (
    <CardContainer>
      <Suspense fallback={<div>Loading</div>}>
        <LazyImage src={image} alt={name} />
      </Suspense>
      <h2>
        {number}# - {name}
      </h2>
      <p>{type}</p>
    </CardContainer>
  );
};

export default Card;
// imagem, número, nome e tipo
