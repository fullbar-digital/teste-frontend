import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const PokemonFilter = ({ onFilterChange }) => {
  const [initialPokemon, setInitialPokemon] = useState(1);
  const [finalPokemon, setFinalPokemon] = useState(898);
  const [perPage, setPerPage] = useState(20);
  const [paginationType, setPaginationType] = useState('infinite-scroll');

  const handleApplyFilter = () => {
    onFilterChange({ initialPokemon, finalPokemon, perPage, paginationType });
  };

  const handleInitialPokemonChange = event => {
    setInitialPokemon(event.target.value);
  };

  const handleFinalPokemonChange = event => {
    setFinalPokemon(event.target.value);
  };

  const handlePerPageChange = event => {
    setPerPage(event.target.value);
  };

  const handlePaginationTypeChange = event => {
    setPaginationType(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <TextField
        label="Initial Pokemon"
        type="number"
        value={initialPokemon}
        onChange={handleInitialPokemonChange}
        inputProps={{ min: 1, max: finalPokemon }}
      />
      <TextField
        label="Final Pokemon"
        type="number"
        value={finalPokemon}
        onChange={handleFinalPokemonChange}
        inputProps={{ min: initialPokemon, max: 898 }}
      />
      <Select value={perPage} onChange={handlePerPageChange} sx={{ mx: 2 }}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <Select
        value={paginationType}
        onChange={handlePaginationTypeChange}
        sx={{ mx: 2 }}
      >
        <MenuItem value="infinite-scroll">Scroll Infinito</MenuItem>
        <MenuItem value="pagination">Paginação</MenuItem>
      </Select>
      <Button variant="contained" onClick={handleApplyFilter}>
        Aplicar Filtro
      </Button>
    </Box>
  );
};

PokemonFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default PokemonFilter;
