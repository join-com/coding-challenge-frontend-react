import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Content,
  Image,
  Title,
  Address
} from './styled'

import bikeImage from 'assets/img/bike.png'

const BikeItem = ({ item }) => (
  <Container>
    <Image src={item.media.image_url_thumb || bikeImage} alt='Bike img' />
    <Content>
      <Link to={`/bike/${item.id}`}>
        <Title>{item.title}</Title>
      </Link>
      <p>{item.description || 'No description'}</p>
      <Address>{item.address || 'No address'}</Address>
    </Content>
  </Container>
)

export default BikeItem
