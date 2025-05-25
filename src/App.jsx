import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SelectedPokemonsProvider } from './contexts/ContextPokemonAPI.jsx';

import Home from './Home.jsx';
import Dex from './Dex.jsx';
import CardDetail from './CardDetail.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <SelectedPokemonsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<CardDetail />} />
        </Routes>
      </SelectedPokemonsProvider>
    </BrowserRouter>
  );
}
