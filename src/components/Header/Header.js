import React from 'react'

import LogoImage from './logo.png'

import {
  Container,
  Logo,
  Content,
  Title,
  Subtitle
} from './styled'

const Header = () => (
  <Container>
    <Logo src={LogoImage} alt="logo" />
    <Content>
      <Title>Police Department of Berlin</Title>
      <Subtitle>Stolen Bikes</Subtitle>
    </Content>
  </Container>
)

export default Header
