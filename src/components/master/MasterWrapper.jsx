import React, { Component } from 'react';

import Master from './Master';

const dataPagination = {
  page: 1,
  per_page: 10,
};

const dataFilters = {
  incident_type: 'theft',
  proximity: 'Berlin',
  proximity_square: 50,
};

class MasterWrapper extends Component {
  componentDidMount() {
    const {
      fetchData,
    } = this.props;

    const defaultParams = {
      ...dataPagination,
      ...dataFilters,
    };

    fetchData(defaultParams);
  }

  render() {
    return (
      <Master
        {...this.props}
      />
    );
  }
}

export default MasterWrapper;
