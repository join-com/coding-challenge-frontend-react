import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import PropTypes from 'prop-types';

import { bemCls } from '../../utils/ClassNameHelpers';

import './Map.css';

const Map = ({
  className, name, latitude, longitude, zoom, geocodeError,
}) => {
  const MapComponent = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  ));

  return (
    <div className={`Map ${className} ${
      bemCls(`Map ${className}`, `__${name}`)}`}
    >
      <MapComponent
        loadingElement={<div className="Map__loading" />}
        containerElement={<div className="Map__mapContainer" />}
        mapElement={<div className="Map__map" />}
      />
    </div>
  );
};

export default Map;

Map.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  geocodeError: PropTypes.instanceOf(Error),
};

Map.defaultProps = {
  className: '',
  name: '',
  latitude: 0,
  longitude: 0,
  zoom: 8,
  geocodeError: null,
};
