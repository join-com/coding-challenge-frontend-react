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
      name, type, labelFrom, labelTo, placeholderFrom, placeholderTo,
    } = filter;

    return (
      <div className={`FilterDateRange ${className}`}>
        <InputDate
          className={`FilterDateRange ${className} ${
            bemCls(`FilterDateRange ${className}`, `__${name}From`)}`}
          name={`${name}From`}
          type={type}
          label={labelFrom}
          placeholder={placeholderFrom}
          value={value.from}
          onChange={handleFiltersChange}
        />
        <InputDate
          className={`FilterDateRange ${className} ${
            bemCls(`FilterDateRange ${className}`, `__${name}To`)}`}
          name={`${name}To`}
          type={type}
          label={labelTo}
          placeholder={placeholderTo}
          value={value.to}
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
  value: PropTypes.shape({
    from: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    to: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  className: PropTypes.string,
  handleFiltersChange: PropTypes.func,
};

FilterDateRange.defaultProps = {
  filter: null,
  value: {
    from: '',
    to: '',
  },
  className: '',
  handleFiltersChange: () => {},
};
