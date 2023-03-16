import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../fonts/fonts.css';

const validationSchema = yup.object({
  initialPokemon: yup
    .number()
    .min(1, 'O número mínimo é 1')
    .max(
      yup.ref('finalPokemon'),
      'O número inicial não pode ser maior que o número final',
    )
    .required('Campo obrigatório'),
  finalPokemon: yup
    .number()
    .min(
      yup.ref('initialPokemon'),
      'O número final não pode ser menor que o número inicial',
    )
    .max(1008, 'O número máximo é 1008')
    .required('Campo obrigatório'),
});

const PokemonFilter = ({ onFilterChange }) => {
  const formik = useFormik({
    initialValues: {
      initialPokemon: 1,
      finalPokemon: 1008,
      perPage: 20,
      paginationType: 'infinite-scroll',
    },
    validationSchema,
    onSubmit: values => {
      onFilterChange(values);
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <TextField
            fullWidth
            id="initialPokemon"
            name="initialPokemon"
            label="Inicial"
            type="tel"
            value={formik.values.initialPokemon}
            onChange={formik.handleChange}
            error={
              formik.touched.initialPokemon &&
              Boolean(formik.errors.initialPokemon)
            }
            helperText={
              formik.touched.initialPokemon && formik.errors.initialPokemon
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <TextField
            fullWidth
            id="finalPokemon"
            name="finalPokemon"
            label="Final"
            type="tel"
            value={formik.values.finalPokemon}
            onChange={formik.handleChange}
            error={
              formik.touched.finalPokemon && Boolean(formik.errors.finalPokemon)
            }
            helperText={
              formik.touched.finalPokemon && formik.errors.finalPokemon
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="perPage-label">Por Página</InputLabel>
            <Select
              labelId="perPage-label"
              id="perPage"
              name="perPage"
              value={formik.values.perPage}
              label="Pokémons por página"
              onChange={formik.handleChange}
            >
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="paginationType-label">Paginacao</InputLabel>
            <Select
              labelId="paginationType-label"
              id="paginationType"
              name="paginationType"
              value={formik.values.paginationType}
              label="Paginação"
              onChange={formik.handleChange}
            >
              <MenuItem value="infinite-scroll">Infinite Scroll</MenuItem>
              <MenuItem value="pagination">Paginação</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Button fullWidth color="primary" variant="contained" type="submit">
            Aplicar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
PokemonFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default PokemonFilter;
