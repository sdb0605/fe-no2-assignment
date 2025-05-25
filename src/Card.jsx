import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Card.defaultProps = {
  onAdd: null,
  onRemove: null,
};

function Card({ id, name, imgUrl, onAdd, onRemove }) {
  const navigate = useNavigate();

  const handleAddClick = (e) => {
    e.stopPropagation();//클릭 이벤트 중단
    if (onAdd) onAdd({ id, name, imgUrl });
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();//클릭 이벤트 중단
    if (onRemove) onRemove(id);
  };

  const handleNavigate = () => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <CardWrapper onClick={handleNavigate}>
      <PokemonImage src={imgUrl} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No. {id.toString().padStart(3, '0')}</PokemonId>
      {onAdd && <Button onClick={handleAddClick}>추가</Button>}
      {onRemove && <Button onClick={handleRemoveClick}>삭제</Button>}
    </CardWrapper>
  );
}

export default Card;
