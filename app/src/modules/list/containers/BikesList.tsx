import * as React from 'react'
import * as RR from 'react-redux'

import { BikeShortInfo } from '../components'
import { selectors } from '../../../redux'
import { Incident } from '../../../api'

export const BikesList: React.FC = () => {
  const incidents = (RR as any).useSelector(selectors.incidentsArray) as Incident[]
  return (
    <div>
      {incidents.map((incident) => (
        <BikeShortInfo key={incident.id} incident={incident} />
      ))}
    </div>
  )
}
