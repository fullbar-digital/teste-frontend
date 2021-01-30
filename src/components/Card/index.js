import "./style.scss";
const Card = ({ pokemonFiltered, pageDetail }) => {
  return (
    <>
      {pokemonFiltered.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <div className="card-info-pokemon">
            <img
              className="card-image"
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              loading="lazy"
              alt={pokemon.name}
            />

            <div className="card-info">
              <div className="card-pokemon-number">
                <p className="number">#{pokemon.id}</p>
              </div>
              <h2 className="name">{pokemon.name.toUpperCase()}</h2>
              <p className="type">{pokemon.types[0].type.name.toUpperCase()}</p>
              <button
                className="button-info"
                onClick={() => pageDetail(pokemon)}
              >
                INFO
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
