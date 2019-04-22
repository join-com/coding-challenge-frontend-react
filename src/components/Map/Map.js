import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      center={props.center}
    >
      {props.isMarkerShown && <Marker position={props.position} />}
    </GoogleMap>
  ))
)

export default Map