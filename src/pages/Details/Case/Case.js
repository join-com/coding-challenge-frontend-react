import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
`

const Description = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`

export default function Case({ item }) {
  return (
    <div>
      <Title>{item.title}</Title>
      <p>
        Stolen {item.occurred_at} at {item.address}
      </p>
      <div>Map</div> {/* TODO implement the map */}
      <Description>Description of incident</Description>
      <p>{item.description}</p>
    </div>
  )
}
