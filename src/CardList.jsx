import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import MOCK_DATA from './assets/Data/mock.js';

const ListWrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export default function CardList() {
  return (
    <ListWrapper>
      <CardGrid>
        {MOCK_DATA.map((pokemon) => (
          <Card key={pokemon.id} id={pokemon.id} name={pokemon.korean_name} imgUrl={pokemon.img_url} action="add"/>
        ))}
      </CardGrid>
    </ListWrapper>
  );
}
