import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;

  fieldset {
    display: flex;
    border: none;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      align-items: center;
      label {
        font-size: 15px;
      }
      input {
        width: 63px;
        padding: 5px;

        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 18px;

        letter-spacing: 2px;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;

    select {
      width: 63px;
      padding: 5px;

      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 18px;

      letter-spacing: 2px;
    }
  }

  button{
      width: 250px;
      background-color: #4CBF32;
      color: #FFF;
      padding: 5px;

      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 18px;

      letter-spacing: 2px;
  }
`;
