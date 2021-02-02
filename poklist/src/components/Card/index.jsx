import { CardContainer } from "./style"

const Card = ({ image, number, name, type}) => {
    return(
        <CardContainer>
            <img src={image} alt={name}/>
            <h2>{number}# - {name}</h2>
            <p>{type}</p>
        </CardContainer>
    )
}

export default Card
// imagem, número, nome e tipo