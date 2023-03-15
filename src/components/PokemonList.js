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
import PokemonFilter from './PokemonFilter';

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

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };
  const loadPokemonList = useCallback(
    (
      url = `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=0`,
    ) => {
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
              const filteredPokemonList = pokemonDataList.filter(
                pokemon =>
                  pokemon.id >= filter.initialPokemon &&
                  pokemon.id <= filter.finalPokemon,
              );

              setPokemonList(prevPokemonList => [
                ...prevPokemonList,
                ...filteredPokemonList,
              ]);
              setNextUrl(next);
              setIsLoading(false);
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    },
    [filter],
  );

  useEffect(() => {
    // Limpa a lista de Pokémon quando o filtro é atualizado
    setPokemonList([]);
    setNextUrl('');
    setIsLoading(false);
    // Recarrega a lista de Pokémon com base no novo estado do filtro
    loadPokemonList(
      `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=0`,
    );
  }, [filter, loadPokemonList]);

  useEffect(() => {
    loadPokemonList();
  }, [loadPokemonList]);
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
    const nextPage = nextUrl.split('offset=')[1];
    loadPokemonList(
      `https://pokeapi.co/api/v2/pokemon?limit=${filter.perPage}&offset=${nextPage}`,
    );
  }, [nextUrl, filter.perPage, loadPokemonList]);

  return (
    <Grid container spacing={2} bgcolor="default">
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ mb: 1, mt: 1 }}
        >
          Pokémon List
        </Typography>
        <Grid item xs={12}>
          <PokemonFilter onFilterChange={handleFilterChange} />
        </Grid>
      </Grid>
      {pokemonList.map(pokemon => (
        <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
          <Card>
            <CardActionArea component={Link} to={`/pokemon/${pokemon.name}`}>
              <CardMedia
                component="img"
                height="250"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  #{pokemon.id} - {pokemon.name}
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
