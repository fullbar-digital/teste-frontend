import styled from 'styled-components'
import bgImage from '../assets/bg_body.png'

export const Container = styled.div`
    width: 100vw;
    max-width:100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #424242 ;
    background-image: url(${bgImage}) ;
`