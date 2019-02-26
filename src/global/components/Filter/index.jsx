import React, { Component } from 'react';

import PropTypes from 'prop-types';
import filterType from './types/filter';
import filtersValuesType from './types/filtersValues';

import {
  initFiltersValues,
  formatDataFiltersParamsToValues,
  formatFiltersValuesToDataParams,
} from './utils/FilterHelpers';

import Filter from './Filter';

class FilterWrapper extends Component {
  constructor(props) {
    super(props);

    const { filters, dataFilters } = props;
    const filtersValues = {
      ...initFiltersValues(filters),
      ...formatDataFiltersParamsToValues(dataFilters, filters),
    };

    this.state = {
      filtersValues,
    };

    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.handleClearFilters = this.handleClearFilters.bind(this);
    this.handleSubmitFilters = this.handleSubmitFilters.bind(this);
  }

  handleFiltersChange(key, value) {
    const { filtersValues } = this.state;
    const newFiltersValues = {
      ...filtersValues,
      [key]: value,
    };

    this.setState({ filtersValues: newFiltersValues });
  }

  handleSubmitFilters(event) {
    event.preventDefault();

    const { filters, fetchFilteredData } = this.props;
    const { filtersValues } = this.state;

    const data = formatFiltersValuesToDataParams(filtersValues, filters);
    fetchFilteredData(data);
  }

  handleClearFilters() {
    const { fetchFilteredData } = this.props;
    fetchFilteredData({});

    this.setState({ filtersValues: {} });
  }

  render() {
    const { filtersValues } = this.state;
    return (
      <Filter
        {...this.props}
        filtersValues={filtersValues}
        handleFiltersChange={this.handleFiltersChange}
        handleClearFilters={this.handleClearFilters}
        handleSubmitFilters={this.handleSubmitFilters}
      />
    );
  }
}

export default FilterWrapper;

FilterWrapper.propTypes = {
  filters: PropTypes.arrayOf(filterType),
  dataFilters: filtersValuesType,
  fetchFilteredData: PropTypes.func,
};

FilterWrapper.defaultProps = {
  filters: [],
  dataFilters: {},
  fetchFilteredData: () => {},
};
