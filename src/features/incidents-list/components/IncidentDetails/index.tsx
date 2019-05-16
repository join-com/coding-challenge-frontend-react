import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import { H3 } from '@/ui/typography'
import { AppError } from '@/ui/AppError'
import { GOOGLE_MAPS_API_KEY } from '@/constants'
import { loadSingleIncident } from '@/features/incidents-list/ducks'
import {
  getIncidentById,
  getRequestError,
} from '@/features/incidents-list/selectors'
import { getGeoJson } from '@/features/incidents-list/api'
import { DetailsContainer, MapContainer } from './styled'
import { AppState } from '@/store/state'
import { MapMarker } from '@/features/incidents-list/components/MapMarker'

type RouteProps = {
  match: {
    params: {
      id: number
    }
  }
}

type OwnProps = {
  loadSingleIncident: ({ id }: { id: string }) => void
  requestError: null | string
}

type Props = Incident & RouteProps & OwnProps

type Coordinates = [number, number] | []

type GeoDataError = string | null

const Details = ({
  id,
  title,
  description,
  loadSingleIncident,
  requestError,
  ...props
}: Props) => {
  const [coordinates, updateCoordinates] = useState([] as Coordinates)
  const [geoDataError, setGeoDataError] = useState(null as GeoDataError)

  useEffect(() => {
    if (!id) {
      const idFromRoute = props.match.params.id.toString()

      loadSingleIncident({ id: idFromRoute })
    }
  })

  useEffect(() => {
    if (id) {
      const getCoordinates = async () => {
        const geoCoordinates: [number, number] = await getGeoJson({
          title,
          id,
          description,
          ...props,
        })
          .then(response => response.data.features[0].geometry.coordinates)
          .catch((error) => {
            console.log(error)
            setGeoDataError('Error loading geo data for incident')
          })
        updateCoordinates(geoCoordinates)
      }
      getCoordinates()
    }
  }, [id])

  const [longitude, latitude] = coordinates

  return (
    <DetailsContainer>
      {requestError && <AppError message={requestError} />}
      <H3>{title}</H3>
      <MapContainer>
        {geoDataError && <AppError message={geoDataError} />}
        {latitude && longitude && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
            defaultCenter={{ lat: latitude, lng: longitude }}
            defaultZoom={11}
          >
            <MapMarker
              lat={latitude}
              lng={longitude}
              text="Place of incident"
            />
          </GoogleMapReact>
        )}
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
    }: RouteProps,
  ) => ({
    ...getIncidentById(state, id),
    requestError: getRequestError(state),
  }),
  { loadSingleIncident: loadSingleIncident.request },
)(Details)
