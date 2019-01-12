import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import config from '../../config/base'

const mapboxConfig = config.mapbox
const accessToken = mapboxConfig.accessToken
const Map = ReactMapboxGl({ accessToken: accessToken })

const MapComponent = ({ lat, lon }) => {
  return (
    <Map
      containerStyle={mapboxConfig.containerStyle}
      style={mapboxConfig.style}
      center={[lat, lon]}
      zoom={[mapboxConfig.zoom]}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[lat, lon]} />
      </Layer>
    </Map>
  )
}

class MapHandler extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addressToGeoCode = address => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}`
    return fetch(url).then(response => response.json())
  }

  componentDidMount() {
    this.addressToGeoCode(this.props.address).then(response => {
      this.setState({
        lat: response.features[0].center[0],
        lon: response.features[0].center[1]
      })
    })
  }

  render() {
    if (!this.state.lat) {
      return null
    }
    return <MapComponent lat={this.state.lat} lon={this.state.lon} />
  }
}

export default MapHandler
