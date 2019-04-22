import React from 'react'
import BikeItem from './BikeItem'

import { List } from './styled'

const BikeList = ({list}) => (
  <List>
    {list.map(item => <BikeItem key={item.id} item={item} />)}
  </List>
)

export default BikeList