import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/src/css/mapbox-gl.css';

import Pin from '../Pin';
import withMaps from '../../containers/Maps';

const MarkerComponent = props => (
  <Marker { ...props }>
    <Pin />
  </Marker>
);

class Maps extends Component {
  render() {
    const [ latitude, longitude ] = this.props.coordinates;
    const viewport = { ...this.props.viewport, latitude, longitude };

    return (
      <MapGL
        {...viewport}
        width={this.props.width}
        height={this.props.height}
        mapStyle={this.props.mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={this.props.access_token} >
          <MarkerComponent latitude={viewport.latitude} longitude={viewport.longitude} />
      </MapGL>
    );
  }
}

export default withMaps(Maps);
