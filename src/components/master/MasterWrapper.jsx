import React, { Component } from 'react';

import PropTypes from 'prop-types';
import dataItemType from '../types/dataItem';
import paginationType from '../../global/components/Pagination/types/pagination';
import paginationDefaults from '../../global/components/Pagination/defaults/pagination';
import filtersValuesType from '../../global/components/Filter/types/filtersValues';

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
      fetchData, data, dataPagination, dataFiltersParams,
    } = this.props;

    const { page, per_page } = dataPagination;

    const paginationParams = {
      page,
      per_page,
    };

    const defaultParams = {
      ...paginationParams,
      ...filterParams,
      ...dataFiltersParams,
    };

    if (!data || data.length < 2) { // one item fetched (coming from detail page for the 1st time)
      fetchData(defaultParams);
    }
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

MasterWrapper.propTypes = {
  data: PropTypes.arrayOf(dataItemType),
  dataLoading: PropTypes.string,
  dataPagination: paginationType,
  dataFiltersParams: filtersValuesType,
  onPageNumberChange: PropTypes.func,
};

MasterWrapper.defaultProps = {
  data: [],
  dataLoading: '',
  dataPagination: paginationDefaults,
  dataFiltersParams: {},
  onPageNumberChange: () => {},
};
