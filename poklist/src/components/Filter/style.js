import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  border-bottom: 2px solid #f0f0f0;
  height: 107px;

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
        font-weight: 700;
      margin-bottom: 10px;
      }

      input {
        width: 63px;
        padding: 5px;

        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 18px;

        letter-spacing: 2px;

        background-color: #919191;
      }
    }
  }
  .selects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;

    label {
      width:150px;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    select {
      width: 63px;
      padding: 5px;

      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 18px;

      background-color: #919191;
      letter-spacing: 2px;
    }
    .pagination {
      width: 150px;
      background-color: #919191;
    }
  }

  button {
    width: 120px;
    height: 60px;
    background-color: #369143;
    color: #f5f5f5;
    padding: 5px;

    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 18px;

    letter-spacing: 2px;

    :active {
      background-color: #f5f5f5;
      color: #369143;
    }
  }
`;
