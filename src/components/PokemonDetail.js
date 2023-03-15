import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PokemonDetail = ({ match }) => {
  const name = match.params?.name || '';
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemonData(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [name]);

  if (!name) {
    return <div>No data found</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemonData) {
    return <div>No data found</div>;
  }

  const { id, height, weight, types, abilities, stats } = pokemonData;

  return (
    <div>
      <h2>{`${id}. ${name}`}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        style={{ maxWidth: '100%' }}
      />
      <h3>Details:</h3>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Types: {types.map(type => type.type.name).join(', ')}</p>
      <p>
        Abilities: {abilities.map(ability => ability.ability.name).join(', ')}
      </p>
      <h3>Stats:</h3>
      <ul>
        {stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PokemonDetail;
