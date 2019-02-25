import React from 'react';

import PropTypes from 'prop-types';
import dataItemType from '../types/dataItem';
import filtersValuesType from '../../global/components/Filter/types/filtersValues';

import Filter from '../../global/components/Filter';

import I18n from '../../utils/I18n';

import './css/MasterFilter.css';

const MasterFilter = ({
  data, dataFiltersParams, fetchFilteredData,
}) => {
  const filters = [
    {
      name: 'query',
      type: 'text',
      label: I18n.t('en.filters.query.label'),
      placeholder: I18n.t('en.filters.query.placeholder'),
    },
  ];

  return (
    <Filter
      className="MasterFilter"
      items={data}
      filters={filters}
      dataFiltersParams={dataFiltersParams}
      fetchFilteredData={fetchFilteredData}
    />
  );
};

export default MasterFilter;

MasterFilter.propTypes = {
  data: PropTypes.arrayOf(dataItemType),
  dataFiltersParams: filtersValuesType,
  fetchFilteredData: PropTypes.func,
};

MasterFilter.defaultProps = {
  data: [],
  dataFiltersParams: {},
  fetchFilteredData: () => {},
};
