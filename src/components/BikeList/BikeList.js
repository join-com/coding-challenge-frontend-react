import React from 'react'
import BikeItem from './BikeItem'

const BikeList = ({list}) => (
  <ul>
    {list.map(item => <BikeItem key={item.id} item={item} />)}
  </ul>
)

export default BikeList