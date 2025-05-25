import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const STORAGE_KEY = 'selectedPokemons';

export const SelectedPokemonsContext = createContext();

export function SelectedPokemonsProvider({ children }) {
  const [selectedPokemons, setSelectedPokemons] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedPokemons));
  }, [selectedPokemons]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      toast.warning('⚠️ 포켓몬은 최대 6마리까지 선택할 수 있습니다.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      toast.warning('⚠️ 이미 선택된 포켓몬입니다.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }
    setSelectedPokemons((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setSelectedPokemons((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <SelectedPokemonsContext.Provider
      value={{ selectedPokemons, addPokemon, removePokemon }}
    >
      {children}
    </SelectedPokemonsContext.Provider>
  );
}
