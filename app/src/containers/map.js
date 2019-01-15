import React, { Component } from 'react'
import MapComponent from '../components/map'
import config from '../config/base'
const mapboxConfig = config.mapbox
const accessToken = mapboxConfig.accessToken

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
      const [features] = response.features
      const [lat, lon] = features.center
      this.setState({ lat, lon })
    })
  }

  render() {
    if (!this.state.lat) {
      return null
    }
    return (
      <MapComponent
        lat={this.state.lat}
        lon={this.state.lon}
        accessToken={accessToken}
        zoom={mapboxConfig.zoom}
        containerStyle={mapboxConfig.containerStyle}
        style={mapboxConfig.style}
      />
    )
  }
}

export default MapHandler
