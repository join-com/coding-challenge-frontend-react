import React, { Component } from 'react';
import { compose } from 'redux';

import withIncidents from '../../containers/Incidents';
import Incident from '../../components/Incident';

class Home extends Component {
  componentWillMount() {
    this.props.getIncidentsList({
      incident_type: 'theft',
    });
  }

  render() {
    const { list } = this.props.incidents;
    return (
      <>
        <Incident.List items={list} />
      </>
    );
  }
};

export default compose(withIncidents)(Home);