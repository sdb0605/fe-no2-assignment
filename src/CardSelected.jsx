// src/CardSelected.jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PokemonBall from './assets/Data/pokemon-ball.png';
import Card from './Card';

const GridWrapper = styled.div`
  align-self: stretch;
  width: 100%;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #e53935;
  margin-bottom: 1rem;
`;

const BallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  justify-items: center;
`;

const BallBox = styled.div`
  background-color: white;
  width: 50%;
  aspect-ratio: 1 / 1;
  border: 2px dashed #ccc;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BallImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

CardSelected.propTypes = {
  selectedPokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

function CardSelected({ selectedPokemons, onRemove }) {
  const slots = Array.from({ length: 6 });

  return (
    <GridWrapper>
      <Title>나만의 포켓몬</Title>
      <BallGrid>
        {slots.map((_, idx) => {
          const p = selectedPokemons[idx];

          if (p) {
            return (
              <Card key={`selected-${p.id}`} id={p.id} name={p.name} imgUrl={p.imgUrl}
                onRemove={() => onRemove(p.id)}/>
            );
          } else {
            return (
              <BallBox key={`slot-${idx}`}>
                <BallImage src={PokemonBall} alt="Pokeball" />
              </BallBox>
            );
          }
        })}
      </BallGrid>
    </GridWrapper>
  );
}

export default CardSelected;
