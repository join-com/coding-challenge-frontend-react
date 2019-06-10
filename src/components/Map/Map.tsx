import React from 'react';
import { GOOGLE_MAP_API_KEY } from '../../constants/main';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import { Coordinates } from '../../types';
import styled from '@emotion/styled';

type MapProps = {
  center?: Coordinates;
  defaultZoom?: number;
};

const Container = styled.div`
  height: 400px;
  margin-bottom: 12px;
`;

const WrappedMap = withScriptjs(
  withGoogleMap(({ center, defaultZoom = 12 }: MapProps) => (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={center}>
      <Marker position={center} />
    </GoogleMap>
  ))
);

const Map: React.FC<MapProps> = props => {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAP_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<Container />}
      mapElement={<div style={{ height: `100%` }} />}
      {...props}
    />
  );
};

export default Map;
