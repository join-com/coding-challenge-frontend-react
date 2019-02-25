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
    this.fetchFilteredData = this.fetchFilteredData.bind(this);
  }

  componentDidMount() {
    const {
      fetchData, dataPageNumber, dataPagination, dataFiltersParams,
    } = this.props;

    const { per_page } = dataPagination;

    const paginationParams = {
      page: dataPageNumber,
      per_page,
    };

    const defaultParams = {
      ...paginationParams,
      ...filterParams,
      ...dataFiltersParams,
    };

    fetchData(defaultParams);
    historyPush('/bikes', defaultParams);
  }

  handleOnPageNumberChange({ pageNumber }) {
    const {
      fetchData, dataPagination, dataFiltersParams, onPageNumberChange,
    } = this.props;

    const { per_page } = dataPagination;

    const paginationParams = {
      page: pageNumber,
      per_page,
    };

    const queryParams = {
      ...paginationParams,
      ...filterParams,
      ...dataFiltersParams,
    };

    onPageNumberChange({ page: pageNumber });
    fetchData(queryParams);
    historyPush('/bikes', queryParams);
  }

  fetchFilteredData(dataFiltersParams) {
    const {
      fetchData, dataPagination,
    } = this.props;

    const { per_page } = dataPagination;

    const paginationParams = {
      page: 1,
      per_page,
    };

    const queryParams = {
      ...paginationParams,
      ...filterParams,
      ...dataFiltersParams,
    };

    fetchData(queryParams);
    historyPush('/bikes', queryParams);
  }

  render() {
    return (
      <Master
        {...this.props}
        onPageNumberChange={this.handleOnPageNumberChange}
        fetchFilteredData={this.fetchFilteredData}
      />
    );
  }
}

export default MasterWrapper;
