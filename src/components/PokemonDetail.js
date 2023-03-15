import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
} from '@mui/material';

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
    <Paper elevation={3}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} justifyContent="center">
          <Typography variant="h3" component="h1" align="center">
            #{id} {`${capitalize(name)}`}
          </Typography>
          <Box display="flex" justifyContent="center">
            <CardMedia
              component="img"
              height="auto"
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
              alt={name}
              sx={{ objectFit: 'contain' }}
            />
          </Box>
        </Grid>
        <Grid item md={12}>
          <Card
            sx={{
              minWidth: 275,
            }}
          >
            <CardContent>
              <Grid container spacing={2} justifyContent="center">
                <Grid item md={6}>
                  <Typography
                    variant="h4"
                    component="h2"
                    mb={2}
                    justifyContent="center"
                  >
                    Details
                  </Typography>

                  <Typography variant="body1" component="p" mb={1}>
                    Height: {height}
                  </Typography>

                  <Typography variant="body1" component="p" mb={1}>
                    Weight: {weight}
                  </Typography>

                  <Typography variant="body1" component="p" mb={1}>
                    Types: {types.map(type => type.type.name).join(', ')}
                  </Typography>

                  <Typography variant="body1" component="p" mb={1}>
                    Abilities:{' '}
                    {abilities.map(ability => ability.ability.name).join(', ')}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h2"
                    mb={2}
                    justifyContent="center"
                  >
                    Stats
                  </Typography>

                  {stats.map(stat => (
                    <Typography
                      variant="body1"
                      component="p"
                      key={stat.stat.name}
                      mb={1}
                    >
                      {stat.stat.name}: {stat.base_stat}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PokemonDetail;
