import React from 'react'

import LogoImage from './logo.png'

import {
  Container,
  Logo
} from './styled'

const Header = () => (
  <Container>
    <Logo src={LogoImage} alt="logo" />
    <div>
      <h1>Police Department of Berlin</h1>
      <h3>Stolen Bikes</h3>
    </div>
  </Container>
)

export default Header
