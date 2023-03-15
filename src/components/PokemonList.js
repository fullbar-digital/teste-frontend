import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  const loadPokemonList = useCallback(url => {
    setIsLoading(true);

    axios
      .get(url)
      .then(response => {
        const { results, next } = response.data;
        const pokemonPromises = results.map(pokemon =>
          axios.get(pokemon.url).then(responseDetail => responseDetail.data),
        );

        Promise.all(pokemonPromises)
          .then(pokemonDataList => {
            setPokemonList(prevPokemonList => [
              ...prevPokemonList,
              ...pokemonDataList,
            ]);
            setNextUrl(next);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    loadPokemonList('https://pokeapi.co/api/v2/pokemon?limit=18');
  }, [loadPokemonList]);

  useEffect(() => {
    if (isLoading || !nextUrl) {
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Pokémon List
        </Typography>
      </Grid>
      {pokemonList.map(pokemon => (
        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            style={{ maxWidth: '100%' }}
            loading="lazy"
          />
          <Link to={`/pokemon/${pokemon.name}`}>
            <Typography variant="h6" component="p">
              {`#${pokemon.id} - ${pokemon.name}`}
            </Typography>
          </Link>
          {pokemon.types && (
            <Typography variant="body1" component="p">
              Type: {pokemon.types.map(type => type.type.name).join(', ')}
            </Typography>
          )}
        </Grid>
      ))}
      <Grid item xs={12} ref={observer} id="observer">
        {isLoading && (
          <Typography variant="body1" component="p" align="center">
            Loading...
          </Typography>
        )}
      </Grid>
      {nextUrl}
    </Grid>
  );
};

export default PokemonList;
