import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 220px;
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

  p {
    font-size: 13px;
  }
`;

const ImageContainer = styled.img`
  width: 150px;
  background-color: #fff;
`;

export default ImageContainer