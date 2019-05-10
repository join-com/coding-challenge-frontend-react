import React from 'react'
import { H1, H2 } from '@/ui/typography'
import { Container, PoliceEmblem, TextContainer } from './styled'

export const AppHeader = () => (
  <Container>
    <PoliceEmblem />
    <TextContainer>
      <H1>Police Department of Berlin</H1>
      <H2>Stolen Bykes</H2>
    </TextContainer>
  </Container>
)
