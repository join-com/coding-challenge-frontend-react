import React from 'react'
import Map from '../Map'
import Error from '../Error'
import Loader from '../Loader'
import { stampToDate } from '../../utils/dateUtil'
import { GOOGLE_API_KEY } from 'constants'

import { Title, Label, MapContainer, MapContent } from './styled'

const BikeDescription = ({ isLoading, incident, coordinates, locationError, locationIsLoading }) => {
  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <Title>{incident.title}</Title>
      <Label>Location</Label>
      <p>{incident.address || 'No location'}</p>
      <Label>Date stolen</Label>
      <p>{stampToDate(incident.occurred_at) || 'No date'}</p>
      <Label>Description</Label>
      <p>{incident.description || 'No description'}</p>
      {locationIsLoading && <Loader />}
      {locationError && <Error message={locationError} />}
      {coordinates &&
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<MapContent />}
          containerElement={<MapContainer />}
          mapElement={<MapContent />}
          center={{ lat: coordinates[1], lng: coordinates[0] }}
          position={{ lat: coordinates[1], lng: coordinates[0] }}
        />
      }
    </div>
  )
}

export default BikeDescription
