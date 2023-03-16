import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import LazyLoad from 'react-lazyload';
import PokemonFilter from './PokemonFilter';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    initialPokemon: 1,
    finalPokemon: 898,
    paginationType: 'infinite-scroll',
    perPage: 20,
  });
  const observer = useRef();
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const loadPokemonList = useCallback(
    async (
      url = `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=${
        filter.initialPokemon - 1
      }`,
    ) => {
      try {
        const response = await axios.get(url);
        const { results, next } = response.data;
        if (results) {
          setNextUrl(next);
          const pokemonPromises = results.map(pokemon =>
            axios.get(pokemon.url).then(responseDetail => responseDetail.data),
          );

          const pokemonDataList = await Promise.all(pokemonPromises);
          setPokemonList(prevPokemonList => [
            ...prevPokemonList,
            ...pokemonDataList.filter(
              pokemon =>
                pokemon.id >= filter.initialPokemon &&
                pokemon.id <= filter.finalPokemon,
            ),
          ]);
        }
      } catch (error) {
        console.log(error);
      }
      // setIsLoading(true);
    },
    [filter],
  );

  const handleFilterChange = newFilter => {
    setNextUrl('');
    setPokemonList([]);
    setFilter(newFilter);
    loadPokemonList(
      `https://pokeapi.co/api/v2/pokemon?limit=${newFilter.perPage}&offset=${
        newFilter.initialPokemon - 1
      }`,
    );
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  useEffect(() => {
    if (!document.querySelector('#observer')) {
      return;
    }

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          console.log(nextUrl);
          if (nextUrl) {
            loadPokemonList(nextUrl);
          }
        }
      },
      { threshold: 1 },
    );

    observer.current.observe(document.querySelector('#observer'));
  }, [nextUrl]);

  const handleNextPageClick = useCallback(() => {
    setPokemonList([]);
    if (nextUrl) {
      loadPokemonList(nextUrl);
    }
  }, [nextUrl, loadPokemonList]);

  return (
    <Grid container spacing={2} bgcolor="default">
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ mb: 5, mt: 1, fontFamily: 'Pokemon' }}
        >
          The Ultimate Pokémon List
        </Typography>
        <Grid item xs={12}>
          <PokemonFilter onFilterChange={handleFilterChange} />
        </Grid>
      </Grid>
      {pokemonList.map(pokemon => (
        <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
          <Card>
            <CardActionArea component={Link} to={`/pokemon/${pokemon.name}`}>
              <Typography gutterBottom variant="h6" component="h2" ml={2}>
                #{pokemon.id}
              </Typography>
              <LazyLoad height={250} once>
                <CardMedia
                  component="img"
                  height="250"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                  alt={pokemon.name}
                  sx={{
                    objectFit: 'contain',
                  }}
                />
              </LazyLoad>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${capitalize(pokemon.name)}`}
                </Typography>
                {pokemon.types && (
                  <Typography variant="body1" component="p">
                    {pokemon.types.map(type => type.type.name).join(' ')}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      {filter.paginationType === 'infinite-scroll' && (
        <Grid item xs={12} ref={observer} id="observer">
          {isLoading && (
            <Typography variant="body1" component="p" align="center">
              Loading...
            </Typography>
          )}
        </Grid>
      )}
      {filter.paginationType === 'pagination' && (
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <Button variant="contained" onClick={handleNextPageClick}>
              Próxima Página
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
export default PokemonList;
