import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import { H3 } from '@/ui/typography'
import { GOOGLE_MAPS_API_KEY } from '@/constants'
import { loadSingleIncident } from '@/features/incidents-list/ducks'
import { getIncidentById } from '@/features/incidents-list/selectors'
import { DetailsContainer, MapContainer } from './styled'
import { AppState } from '@/store/state'

type RouterProps = {
  match: {
    params: {
      id: number
    }
  }
}

type Props = Incident &
  RouterProps & {
    loadSingleIncident: ({ id }: { id: string }) => void
  }

const Details = ({
  id,
  title,
  description,
  loadSingleIncident,
  ...props
}: Props) => {
  useEffect(() => {
    if (!id) {
      const idFromRoute = props.match.params.id.toString()

      loadSingleIncident({ id: idFromRoute })
    }
  })
  return (
    <DetailsContainer>
      <H3>{title}</H3>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        />
      </MapContainer>
      <H3>DESCRIPTION OF INCEDENT</H3>
      <p>{description || 'None'}</p>
    </DetailsContainer>
  )
}

export const IncidentDetails = connect(
  (
    state: AppState,
    {
      match: {
        params: { id },
      },
    }: RouterProps,
  ) => ({
    ...getIncidentById(state, id),
  }),
  { loadSingleIncident: loadSingleIncident.request },
)(Details)
