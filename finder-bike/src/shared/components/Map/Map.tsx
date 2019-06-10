import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

export interface IGeoCoordinates {
  lat: number;
  lng: number;
}

interface IProps {
  coordinates: IGeoCoordinates;
}

const Marker = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  border: 5px solid #f44336;
  color: red;
  z-index: 999;
`;

const IMapWrapper = styled.div`
  width: 100%;
  height: 50rem;
`;

export const Map: React.FC<IProps> = ({ coordinates }: IProps) => {
  const key = (process && process.env && process.env.REACT_APP_MAP_KEY) || '';

  return (
    <IMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultZoom={14}
        defaultCenter={{ ...coordinates }}
      >
        <Marker {...coordinates} />
      </GoogleMapReact>
    </IMapWrapper>
  );
};
