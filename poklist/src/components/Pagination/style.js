import styled from 'styled-components'

export const NavContainer = styled.nav`
  margin: 25px 0; 
  ul{
    display: flex;

    li{
      list-style: none;
      background-color: #000;
      min-width:32px;
      padding: 8px;
      margin-right:5px;
      border-radius: 5px;
      background-color: #fff;
      text-align: center;
        color:#120C96;
        text-decoration: none;
        font-size: 13px;
        font-weight:700;
        cursor: pointer;

    }
    .currentPage {
      background-color: #120C96;
      color: #fff;
    }
    li:hover {
      background-color: #120C96;
      color: #fff;
    }

  }
` 