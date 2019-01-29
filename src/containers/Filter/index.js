import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  applyIncidentsFilters,
} from '../../store/actions';

import Filter from '../../components/Filter';

function mapStateToProps(state) {
  return {
    filter: state.incidents.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyIncidentsFilters: params => dispatch(applyIncidentsFilters(params)),
  };
}

class FilterContainer extends Component {
  onChange = e => {
    const { target: { name, value }} = e;

    this.props.applyIncidentsFilters({
      [name]: value,
      page: 0,
    });
  }

  render() {
    return (
      <Filter onChange={this.onChange} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
