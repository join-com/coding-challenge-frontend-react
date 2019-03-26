import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

// Instruments
import styles from './Map.module.scss';

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.51444,
      lng: 13.3954199,
    },
  };

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

// TODO add propTypes
Map.propTypes = {
  center: PropTypes.object.isRequired,
};
