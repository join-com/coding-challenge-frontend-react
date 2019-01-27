import React, { Component } from 'react';

import config from '../../config';

export default function withMaps(WrappedComponent) {
  const mapboxConfig = {
    mapStyle: 'mapbox://styles/mapbox/dark-v9',
    width: '100%',
    height: '300px',
    viewport: {
      zoom: 15,
      bearing: 0,
      pitch: 0
    },
    ...config.mapbox,
  };

  class withMapsComponent extends Component {
    
    render = () => <WrappedComponent {...this.props} { ...mapboxConfig } />
  }

  return withMapsComponent;
}