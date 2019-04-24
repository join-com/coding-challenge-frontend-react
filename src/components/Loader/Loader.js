import React from 'react'
import { Spin } from 'antd'

import { Container } from './styled'

const Loader = () => (
  <Container>
    <Spin tip='Loading...' />
  </Container>
)

export default Loader
