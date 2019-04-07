/* eslint-env jest */

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

// Instruments
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const IncidentPointer = styled.div`
    color: red;
    font-size: 14px;
    font-weight: bold;
    background-color: rgba(255, 0, 0, 0.1);
    padding: 4px;
    border-radius: 4px;
    display: inline-block;
`;

export default class Map extends Component {
  render() {
    const { center } = this.props;

    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB23QiArAUU74ItBhbCBnc7gmBKXhdXumc' }}
          defaultCenter={center}
          defaultZoom={15}
        >
          <IncidentPointer>* Incident location</IncidentPointer>
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};
