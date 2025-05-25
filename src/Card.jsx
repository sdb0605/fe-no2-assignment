import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { SelectedPokemonsContext } from './contexts/ContextPokemonAPI';

const CardWrapper = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const PokemonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const PokemonName = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const PokemonId = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1.2vh;
`;

function Card({ id, name, imgUrl, action }) {
  const navigate = useNavigate();
  const { addPokemon, removePokemon } = useContext(SelectedPokemonsContext);

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (action === 'add') {
      addPokemon({ id, name, imgUrl });
    } else if (action === 'remove') {
      removePokemon(id);
    }
  };

  const handleNavigate = () => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <CardWrapper onClick={handleNavigate}>
      <PokemonImage src={imgUrl} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No. {id.toString().padStart(3, '0')}</PokemonId>
      {action && (
        <Button onClick={handleActionClick}>
          {action === 'add' ? '추가' : '삭제'}
        </Button>
      )}
    </CardWrapper>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['add', 'remove']),
};

Card.defaultProps = {
  action: null,
};

export default Card;
