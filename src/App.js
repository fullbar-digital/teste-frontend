import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
