import React, { Component } from 'react';

import {
  historyPush,
} from '../../global/utils/UrlHelpers';

import Master from './Master';

const filterParams = {
  incident_type: 'theft',
  proximity: 'Berlin',
  proximity_square: 100,
};

class MasterWrapper extends Component {
  constructor() {
    super();
    this.handleOnPageNumberChange = this.handleOnPageNumberChange.bind(this);
  }

  componentDidMount() {
    const {
      fetchData, dataPageNumber, dataPagination,
    } = this.props;

    const { per_page } = dataPagination;

    const paginationParams = {
      page: dataPageNumber,
      per_page,
    };

    const defaultParams = {
      ...paginationParams,
      ...filterParams,
    };

    fetchData(defaultParams);
    historyPush('/bikes', defaultParams);
  }

  handleOnPageNumberChange({ pageNumber }) {
    const {
      fetchData, dataPagination, onPageNumberChange,
    } = this.props;

    const { per_page } = dataPagination;

    const paginationParams = {
      page: pageNumber,
      per_page,
    };

    const queryParams = {
      ...paginationParams,
      ...filterParams,
    };

    onPageNumberChange({ page: pageNumber });
    fetchData(queryParams);
    historyPush('/bikes', queryParams);
  }

  render() {
    return (
      <Master
        {...this.props}
        onPageNumberChange={this.handleOnPageNumberChange}
      />
    );
  }
}

export default MasterWrapper;
