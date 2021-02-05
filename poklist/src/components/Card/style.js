import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: ${(props) => (props.highlighted ? "300px" : "200px")};

  transform: height 1s;
  margin-right: 15px;

  background-color: #fff3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
  }

  h2 {
    font-size: 18px;
  }
  .types {
    color: #fff;
    background-color: ${props => props.bcType};

    padding: 5px;
    margin-left:10px;
    border-radius:5px;
  }

  p {
    font-size: 13px;
  }
`;

const ImageContainer = styled.img`
  width: 150px;
  background-color: #fff;
`;

export default ImageContainer;
