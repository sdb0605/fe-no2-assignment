import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Card from './Card'
import MOCK_DATA from './assets/Data/mock.js'

const ListWrapper = styled.div`
  width:100%;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 0.5rem;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`

CardList.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default function CardList({ onAdd, onRemove }) {
  return (
    <ListWrapper>
      <CardGrid>
        {MOCK_DATA.map(pokemon => (
          <Card key={pokemon.id} id={pokemon.id} name={pokemon.korean_name} imgUrl={pokemon.img_url}
            onAdd={onAdd}
            onRemove={onRemove}/>
        ))}
      </CardGrid>
    </ListWrapper>
  )
}