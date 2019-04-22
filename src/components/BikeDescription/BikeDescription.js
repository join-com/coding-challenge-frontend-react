import React from 'react'
import Map from '../Map'

import { Title, Label, MapContainer, MapContent } from './styled'

const BikeDescription = ({incident}) => {
  if (!Object.keys(incident).length) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <Title>{incident.title}</Title>
      <Label>Location</Label>
      <p>{incident.address || 'No location'}</p>
      <Label>Date stolen</Label>
      <p>1213</p>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCh3IccYne8EWyPRhxg7AUANOXkF8kcjA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<MapContent />}
        containerElement={<MapContainer />}
        mapElement={<MapContent />}
      />
    </div>
  )
}

export default BikeDescription