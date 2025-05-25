import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Dex from './Dex.jsx'
import CardDetail from './CardDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
