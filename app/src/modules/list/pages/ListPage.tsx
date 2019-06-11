import * as React from 'react'

import { Content } from '../../common'
import { BikesList, Filters } from '../containers'
import { useActions } from '../../../hooks'

export const ListPage: React.FC = () => {
  const actions = useActions()
  React.useEffect(() => {
    actions.listRequest.start()
  }, [actions])
  return (
    <Content>
      <Filters />
      <BikesList />
    </Content>
  )
}
