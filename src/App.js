import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
