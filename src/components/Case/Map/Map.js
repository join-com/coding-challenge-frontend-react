import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

// Instruments
import styles from './Map.module.scss';

export default class Map extends Component {
  render() {
    const { center } = this.props;

    return (
      <div className={styles.Map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB23QiArAUU74ItBhbCBnc7gmBKXhdXumc' }}
          defaultCenter={center}
          defaultZoom={15}
        >
          <div className={styles.text}>* Incident location</div>
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};
