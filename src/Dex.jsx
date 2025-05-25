import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardSelected from './CardSelected';
import CardList from './CardList';

const STORAGE_KEY = 'selectedPokemons';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default function Dex() {
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

  // 포켓몬 추가 핸들러
  const handleAdd = (pokemon) => {
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

  // 선택된 포켓몬 삭제 핸들러
  const handleRemove = (id) => {
    setSelectedPokemons((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container>
      {/* 토스트 컨테이너 */}
      <ToastContainer />

      {/* 선택된 슬롯 */}
      <CardSelected
        selectedPokemons={selectedPokemons}
        onRemove={handleRemove}
      />

      {/* 전체 포켓몬 리스트 */}
      <CardList onAdd={handleAdd} />
    </Container>
  );
}
