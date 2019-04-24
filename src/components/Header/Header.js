import React from 'react'
import { Link } from 'react-router-dom'

import LogoImage from 'assets/img/logo.png'

import {
  Container,
  Logo,
  Content,
  Title,
  Subtitle
} from './styled'

const Header = () => (
  <Container>
    <Link to='/'>
      <Logo src={LogoImage} alt='logo' />
    </Link>
    <Content>
      <Title>Police Department of Berlin</Title>
      <Subtitle>Stolen Bikes</Subtitle>
    </Content>
  </Container>
)

export default Header
