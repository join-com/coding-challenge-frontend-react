import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { applyIncidentsFilters } from '../../store/actions';

import Filter from '../../components/Filter';

function mapStateToProps(state) {
  return {
    filter: state.incidents.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyIncidentsFilters: (params, history) => dispatch(applyIncidentsFilters(params, history)),
  };
}

class FilterContainer extends Component {
  onChange = e => {
    const { target: { name, value }} = e;

    this.props.applyIncidentsFilters({
      [name]: value,
      page: 0,
    }, this.props.history);
  }

  render() {
    return (
      <Filter onChange={this.onChange} />
    );
  }
}

export default compose(
  withRouter
)(connect(mapStateToProps, mapDispatchToProps)(FilterContainer));
