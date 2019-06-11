import * as React from 'react'

import { Container } from './Container'
import { Header } from './Header'

export const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)
