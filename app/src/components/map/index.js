import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const MapComponent = ({ lat, lon, accessToken, containerStyle, style, zoom }) => {
  const Map = ReactMapboxGl({ accessToken: accessToken })
  return (
    <Map containerStyle={containerStyle} style={style} center={[lat, lon]} zoom={[zoom]} className="mx-2">
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[lat, lon]} />
      </Layer>
    </Map>
  )
}

export default MapComponent
