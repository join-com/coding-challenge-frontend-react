import * as React from 'react'
import useRouter from 'use-react-router'
import * as RR from 'react-redux'

import { selectors } from '../../../redux'
import { Incident } from '../../../api'
import { formatDate } from '../../../utils'

declare global {
  interface Window {
    google: any
  }
}

export const IncidentDetails: React.FC = () => {
  const {
    match: { params },
  } = useRouter<{ key: string }>()
  const key = parseInt(params.key)
  const incident = (RR as any).useSelector((state: any) =>
    selectors.incident(state, key),
  ) as Incident
  React.useLayoutEffect(() => {
    new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })
  }, [])
  return (
    <div>
      <h1>{incident.title}</h1>
      <small>
        Stolen <i>{formatDate(incident.occurred_at * 1000)}</i>
        {incident.location_description && (
          <>
            at <i>{incident.location_description}</i>
          </>
        )}
      </small>
      <div id="map" style={{ width: '80%', height: 300, marginTop: 20 }}></div>
      <p>{incident.description}</p>
    </div>
  )
}
