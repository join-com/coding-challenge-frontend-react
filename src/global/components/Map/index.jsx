import React, { Component } from 'react';

import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import ReactGoogleMapLoader from 'react-google-maps-loader';

import I18n from '../../../utils/I18n';

import DataStateNotifier from '../DataStateNotifier';

import Map from './Map';

const {
  REACT_APP_GOOGLE_SERVICES_API_KEY,
} = process.env;

class MapWrapper extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      geocodingError: null,
    };
    this.onGeocodeSuccess = this.onGeocodeSuccess.bind(this);
    this.onGeocodeError = this.onGeocodeError.bind(this);
  }

  geocodeByLocation(isGoogleMaps) {
    const { location } = this.props;
    const { latitude, longitude } = this.state;

    if (location && isGoogleMaps
      && !latitude && !longitude) {
      geocodeByAddress(location)
        .then(results => getLatLng(results[0]))
        .then(this.onGeocodeSuccess)
        .catch(this.onGeocodeError);
    }
  }

  onGeocodeSuccess(latLng) {
    this.setState({
      latitude: latLng.lat,
      longitude: latLng.lng,
      geocodingError: null,
    });
  }

  onGeocodeError(geocodingError) {
    this.setState({
      latitude: 0,
      longitude: 0,
      geocodingError,
    });
  }

  render() {
    const { latitude, longitude, geocodingError } = this.state;

    return (
      <ReactGoogleMapLoader
        params={{
          key: REACT_APP_GOOGLE_SERVICES_API_KEY,
          libraries: 'places,geometry',
          language: 'en',
        }}

        render={googleMaps => {
          if (geocodingError) {
            return (
              <DataStateNotifier
                dataError={geocodingError ? I18n.t('en.map.geocodingError') : ''}
              />
            );
          } else if (!latitude && !longitude) {
            this.geocodeByLocation(googleMaps);
          } else if (!!googleMaps) {
            return (
              <Map
                {...this.props}
                latitude={latitude}
                longitude={longitude}
              />
            );
          }
          return null;
        }}
      />
    );
  }
}

export default MapWrapper;
