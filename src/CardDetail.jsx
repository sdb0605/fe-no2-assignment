import React from 'react';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MOCK_DATA from './assets/Data/mock.js';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  
  background: #fff;

  text-align: center;
`;

const BackButton = styled.button`
  display: block;
  margin: 0 auto 1.5rem;

  padding: 0.5rem 1rem;
  background: #e53935;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const PokemonImage = styled.img`
  width: 80%;
  margin-bottom: 1rem;
`;

const PokemonName = styled.h1`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #333;
`;

const TypeList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TypeBadge = styled.span`
  padding: 0.3rem 0.6rem;
  background: #f1f1f1;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
`;

export default function CardDetail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = Number(searchParams.get('id'));
  const pokemon = MOCK_DATA.find((p) => p.id === id);

  if (!pokemon) {
    return (
      <Wrapper>
        <BackButton onClick={() => navigate(-1)}>
          뒤로 가기
        </BackButton>
        <p>존재하지 않는 포켓몬입니다.</p>
      </Wrapper>
    );
  }

  const { name, types, img_url: imgUrl, description } = pokemon;

  return (
    <Wrapper>
      

      <PokemonImage src={imgUrl} alt={name} />
      <PokemonName>
        No. {id.toString().padStart(3, '0')} {name}
      </PokemonName>

      <TypeList>
        {types.map((t) => (
          <TypeBadge key={t}>{t}</TypeBadge>
        ))}
      </TypeList>

      <Description>{description}</Description>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </Wrapper>
  );
}
