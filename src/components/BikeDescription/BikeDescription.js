import React from 'react'
import Map from '../Map'
import { stampToDate } from '../../utils/dateUtil'

import { Title, Label, MapContainer, MapContent } from './styled'

const BikeDescription = ({incident, coordinates}) => {
  if (!Object.keys(incident).length) {
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
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCh3IccYne8EWyPRhxg7AUANOXkF8kcjA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<MapContent />}
        containerElement={<MapContainer />}
        mapElement={<MapContent />}
        center={{ lat: coordinates[1], lng: coordinates[0]}}
        position={{ lat: coordinates[1], lng: coordinates[0]}}
      />
    </div>
  )
}

export default BikeDescription