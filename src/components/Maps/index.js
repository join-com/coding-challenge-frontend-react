import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
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
  
    return (
      <ReactMapGL
        { ...this.props.viewport }
        latitude={latitude}
        longitude={longitude}
        width={this.props.width}
        height={this.props.height}
        mapStyle={this.props.mapStyle}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={this.props.access_token}>
          <MarkerComponent latitude={latitude} longitude={longitude} />
      </ReactMapGL>
    );
  }
}

export default withMaps(Maps);
