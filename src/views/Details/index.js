import React, { Component } from 'react';
import { compose } from 'redux';

import withLoading from '../../containers/Loading';
import withIncidents from '../../containers/Incidents';

import Loader from '../../components/Loader';
import Incident from '../../components/Incident';

import Mapbox from '../../services/mapbox';

class Details extends Component {
  state = {
    coordinates: null,
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getIncidentsDetails({ id });
  }

  componentWillReceiveProps(nextProps) {
    const { incidents } = this.props;
    const { details } = nextProps.incidents;

    if (!incidents.details && details && details.address) {
      this.getCoordinates(details.address);
    }
  }

  componentWillUnmount() {
    this.props.clearIncidentsDetails();
  }
  
  getCoordinates = async address => {
    try {
      const geo = await Mapbox.get({ address });
      const coordinates = geo.features[0].center || geo.features[0].geometry.coordinates;
      const validCoord = coord => (-90 <= coord >= 90); /* eslint-disable-line */
      
      if (validCoord(coordinates[0]) && validCoord(coordinates[1])) {
        this.setState({ coordinates });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { coordinates } = this.state;
    const { details } = this.props.incidents;

    return this.props.loading && details
        ? <Loader />
        : <Incident.Details {...details} coordinates={coordinates} />;
  }
};

export default compose(withIncidents, withLoading)(Details);