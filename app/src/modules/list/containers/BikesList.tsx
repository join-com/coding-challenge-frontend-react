import * as React from 'react'
import * as RR from 'react-redux'

import { BikeShortInfo } from '../components'
import { selectors } from '../../../redux'
import { Incident } from '../../../api'
import { EmptyState } from '../../common'
import { Matching } from '../redux/ui'

export const BikesList: React.FC = () => {
  const { keys = [] } = (RR as any).useSelector(selectors.currentMatching) as Matching
  const allIncidents = (RR as any).useSelector(selectors.incidentsArray) as Incident[]
  const incidents = allIncidents.filter(({ id }) => keys.indexOf(id) > -1)
  if (incidents.length === 0) {
    return <EmptyState />
  }
  return (
    <div>
      {incidents.map((incident) => (
        <BikeShortInfo key={incident.id} incident={incident} />
      ))}
    </div>
  )
}
