import React from 'react';

import PropTypes from 'prop-types';
import filterType from '../types/filter';

import { bemCls } from '../../../utils/ClassNameHelpers';

import InputText from '../../Inputs/InputText';

import './css/FilterText.css';

const FilterText = ({
  filter, value, className, handleFiltersChange,
}) => {
  if (filter) {
    const {
      name, type, label, placeholder,
    } = filter;

    return (
      <div className={`FilterText ${className}`}>
        <InputText
          className={`FilterText ${className} ${
            bemCls(`FilterText ${className}`, `__${name}`)}`}
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

export default FilterText;

FilterText.propTypes = {
  filter: filterType,
  value: PropTypes.string,
  className: PropTypes.string,
  handleFiltersChange: PropTypes.func,
};

FilterText.defaultProps = {
  filter: null,
  value: '',
  className: '',
  handleFiltersChange: () => {},
};
