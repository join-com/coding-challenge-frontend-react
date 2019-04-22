import React from 'react'

import {
  Container,
  Content,
  Image,
  Address
} from './styled'

import bikeImage from '../../../assets/img/bike.png'

const BikeItem = ({item}) => (
  <Container>
    <Image src={item.media.image_url_thumb || bikeImage} alt="Bike img" />
    <Content>
      <h1>{item.title}</h1>
      <p>{item.description || 'No description'}</p>
      <Address>{item.address || 'No address'}</Address>
    </Content>
  </Container>
)

export default BikeItem