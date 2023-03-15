import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
} from '@mui/material';

const PokemonFilter = ({ onFilterChange }) => {
  const [initialPokemon, setInitialPokemon] = useState('');
  const [finalPokemon, setFinalPokemon] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [paginationType, setPaginationType] = useState('infinite-scroll');

  const handleInitialPokemonChange = event => {
    const inputNumber = event.target.value;
    if (inputNumber && inputNumber > 0 && inputNumber <= 898) {
      setInitialPokemon(inputNumber);
    } else {
      setInitialPokemon('');
    }
  };

  const handleFinalPokemonChange = event => {
    const inputNumber = event.target.value;
    if (inputNumber && inputNumber > 0 && inputNumber <= 898) {
      setFinalPokemon(inputNumber);
    } else {
      setFinalPokemon('');
    }
  };

  const handlePerPageChange = event => {
    setPerPage(event.target.value);
  };

  const handlePaginationTypeChange = event => {
    setPaginationType(event.target.value);
  };

  const handleApplyFilter = () => {
    onFilterChange({
      initialPokemon: parseInt(initialPokemon, 10),
      finalPokemon: parseInt(finalPokemon, 10),
      perPage,
      paginationType,
    });
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}
    >
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Initial Pokémon</InputLabel>
        <TextField
          value={initialPokemon}
          onChange={handleInitialPokemonChange}
          type="number"
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Final Pokémon</InputLabel>
        <TextField
          value={finalPokemon}
          onChange={handleFinalPokemonChange}
          type="number"
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Per Page</InputLabel>
        <Select
          value={perPage}
          onChange={handlePerPageChange}
          variant="outlined"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Pagination Type</InputLabel>
        <Select
          value={paginationType}
          onChange={handlePaginationTypeChange}
          variant="outlined"
        >
          <MenuItem value="infinite-scroll">Infinite Scroll</MenuItem>
          <MenuItem value="pagination">Pagination</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleApplyFilter}>
        Apply
      </Button>
    </Box>
  );
};

PokemonFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default PokemonFilter;
