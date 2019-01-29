import React, { Component } from 'react';
import { compose } from 'redux';

import withError from '../../containers/Error';
import withLoading from '../../containers/Loading';
import withIncidents from '../../containers/Incidents';

import Loader from '../../components/Loader';
import Incident from '../../components/Incident';
import ErrorMessage from '../../components/ErrorMessage';

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
      const response = await Mapbox.get({ address });
      const [features] = response.features;
      const validCoord = coord => (-90 >= coord && coord <= 90);

      if (validCoord(features.center[0] && validCoord(features.center[1])))
        this.setState({ coordinates: features.center });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { coordinates } = this.state;
    const { incidents, error } = this.props;

    if (error) {
      return <ErrorMessage error={error} />
    }

    return this.props.loading
      ? <Loader />
      : <Incident.Details {...incidents.details} coordinates={coordinates} />;
  }
};

export default compose(withIncidents, withLoading, withError)(Details);