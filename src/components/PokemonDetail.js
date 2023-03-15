import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const PokemonDetail = () => {
  const name = window.location.pathname.split('/')[2];
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

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          height="auto"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" component="h1" align="center">
              {`${capitalize(name)}`}
            </Typography>
            <Typography variant="h5" component="h2">
              Details:
            </Typography>
            <Typography variant="body1" component="p">
              Height: {height}
            </Typography>
            <Typography variant="body1" component="p">
              Weight: {weight}
            </Typography>
            <Typography variant="body1" component="p">
              Types: {types.map(type => type.type.name).join(', ')}
            </Typography>
            <Typography variant="body1" component="p">
              Abilities:{' '}
              {abilities.map(ability => ability.ability.name).join(', ')}
            </Typography>
            <Typography variant="h5" component="h2">
              Stats:
            </Typography>
            <ul>
              {stats.map(stat => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;
