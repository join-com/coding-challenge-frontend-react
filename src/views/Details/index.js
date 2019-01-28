import React, { Component } from 'react';import { compose } from 'redux';

import withIncidents from '../../containers/Incidents';
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
  
  getCoordinates = async address => {
    try {
      const geo = await Mapbox.get({ address });
      // console.log(geo);
      this.setState({
        coordinates: geo.features[0].geometry.coordinates,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { coordinates } = this.state;
    const { details } = this.props.incidents;

    return details && <Incident.Details {...details} coordinates={coordinates} />;
  }
};

export default compose(withIncidents)(Details);