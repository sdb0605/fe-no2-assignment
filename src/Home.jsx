// src/PokedexStart.jsx
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import pokemeonLogo from './assets/Data/pokemon-logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`

const Logo = styled.img`
  max-width: 45%;
  height: auto;
`

const StartButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: red;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #c72300;
  }
`

export default function PokedexStart() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('./dex')
  }

  return (
    <Container>
      <Logo src={pokemeonLogo} alt="Pokemeon Logo" />
      <StartButton onClick={handleStart}>
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  )
}
