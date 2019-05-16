import React from 'react'
import { Link } from 'react-router-dom'
import { H1, H2 } from '@/ui/typography'
import { Container, PoliceEmblem, TextContainer } from './styled'

export const AppHeader = () => (
  <Container>
    <Link to="/">
      <PoliceEmblem />
    </Link>
    <TextContainer>
      <H1>Police Department of Berlin</H1>
      <H2>Stolen Bykes</H2>
    </TextContainer>
  </Container>
)
