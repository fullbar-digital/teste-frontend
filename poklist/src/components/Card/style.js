import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: ${(props) => (props.highlighted ? "300px" : "220px")};

  border-radius: 5px;
  overflow: hidden;
  margin: 15px;

  background-color: #fff3;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

  figure {
    width: 100%;
    background-color: #616161;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #f5f5f5;
  }

  h2 {
    font-size: 18px;
  }
  .pokeProfile {
    width: 100%;
    height: 120px;
    padding: 10px 13px;
    background: #232323;
    color: #f5f5f5;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    .typeContainer{
      display: flex;
      width: 100%;
    }
  }

  p {
    font-size: 15px;
    .infoTitle {
      font-weight: 700;
    }
  }
`;

export const TypeContainer = styled.span`
  background-color: ${(props) => {
    console.log(props);
    switch (props.type) {
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
  }};

  height: 23px;
  width: 70px;

  font-weight: 700;
  font-size: 13px;
  margin-left: 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  width: 150px;
`;

export default ImageContainer;
