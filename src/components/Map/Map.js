import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 50.82729, lng: 4.46197 }}
    />
  ))
)

export default Map