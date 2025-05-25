import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import CardSelected from './CardSelected.jsx';
import CardList from './CardList.jsx';

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
  return (
    <Container>
      <ToastContainer />
      <CardSelected />
      <CardList />
    </Container>
  );
}
