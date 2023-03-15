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
import '../fonts/fonts.css';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    initialPokemon: 1,
    finalPokemon: 898,
    perPage: 20,
    paginationType: 'infinite-scroll',
  });
  const observer = useRef();

  const getFilteredPokemonList = useCallback(
    async results => {
      const pokemonPromises = results.map(pokemon =>
        axios.get(pokemon.url).then(responseDetail => responseDetail.data),
      );

      const pokemonDataList = await Promise.all(pokemonPromises);
      return pokemonDataList.filter(
        pokemon =>
          pokemon.id >= filter.initialPokemon &&
          pokemon.id <= filter.finalPokemon,
      );
    },
    [filter],
  );
  const handleFilterChange = newFilter => {
    setPokemonList([]);
    setFilter(newFilter);
  };

  const loadPokemonList = useCallback(
    (
      url = `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=0`,
    ) => {
      setIsLoading(true);

      axios
        .get(url)
        .then(async response => {
          const { results, next } = response.data;
          const filteredPokemonList = await getFilteredPokemonList(results);

          setPokemonList(prevPokemonList => [
            ...prevPokemonList,
            ...filteredPokemonList,
          ]);
          setNextUrl(next);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    },
    [filter],
  );

  useEffect(() => {
    setPokemonList([]);
    setNextUrl('');
    setIsLoading(false);

    loadPokemonList(
      `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=0`,
    );
  }, [filter, loadPokemonList]);

  useEffect(() => {
    if (!isLoading || !document.querySelector('#observer')) {
      return;
    }

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
        }
      },
      { threshold: 1 },
    );

    observer.current.observe(document.querySelector('#observer'));
  }, [isLoading, nextUrl]);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    loadPokemonList(nextUrl);
  }, [isLoading, nextUrl, loadPokemonList]);

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
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                ml={2}
                mt={2}
              >
                #{pokemon.id}
              </Typography>
              <LazyLoad height={250} once>
                <CardMedia
                  component="img"
                  height="250"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </LazyLoad>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.name}
                </Typography>
                {pokemon.types && (
                  <Typography variant="body1" component="p">
                    Type: {pokemon.types.map(type => type.type.name).join(', ')}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      {filter.paginationType === 'infinite-scroll' && (
        <Grid item xs={12} ref={observer} id="observer" />
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
