import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getIncidentsDetails,
  getIncidentsList,
  clearIncidentsDetails,
  applyIncidentsFilters,
} from '../../store/actions';

const mapStateToProps = state  => ({
  incidents: state.incidents,
});

const mapDispatchToProps = dispatch => ({
  getIncidentsList: params => dispatch(getIncidentsList(params)),
  getIncidentsDetails: params => dispatch(getIncidentsDetails(params)),
  applyIncidentsFilters: params => dispatch(applyIncidentsFilters(params)),
  clearIncidentsDetails: () => dispatch(clearIncidentsDetails()),
});

export default function withIncidents(WrappedComponent) {
  class withDrawComponent extends Component {
    render = () => <WrappedComponent {...this.props} />
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withDrawComponent);
}
