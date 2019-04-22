import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Title } from './styled'

const NotFound = () => (
  <Container>
    <Title>Page not found</Title>
    <Link to="/">Back to homepage</Link>
  </Container>
)

export default NotFound