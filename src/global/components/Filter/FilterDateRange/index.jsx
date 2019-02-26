import React from 'react';

import PropTypes from 'prop-types';
import filterType from '../types/filter';

import { bemCls } from '../../../utils/ClassNameHelpers';

import InputDate from '../../Inputs/InputDate';

import './css/FilterDateRange.css';

const FilterDateRange = ({
  filter, value, className, handleFiltersChange,
}) => {
  if (filter) {
    const {
      name, type, label, placeholder,
    } = filter;

    return (
      <div className={`FilterDateRange ${className}`}>
        <InputDate
          className={`FilterDateRange ${className} ${
            bemCls(`FilterDateRange ${className}`, `__${name}`)}`}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={handleFiltersChange}
        />
      </div>
    );
  }
  return null;
};

export default FilterDateRange;

FilterDateRange.propTypes = {
  filter: filterType,
  value: PropTypes.string,
  className: PropTypes.string,
  handleFiltersChange: PropTypes.func,
};

FilterDateRange.defaultProps = {
  filter: null,
  value: '',
  className: '',
  handleFiltersChange: () => {},
};
