import { useContext } from "react";
import { PokemonDetailContext } from "../../context/PokemonDetailContext";
import "./style.scss";

const PokemonDetail = () => {
  const { pokemonDetail } = useContext(PokemonDetailContext);
  return (
    <section>

      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetail.id}.png`}
        alt=""
      />
      <div className="detail">
        
      </div>
    </section>
  );
};

export default PokemonDetail;
