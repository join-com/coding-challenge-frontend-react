import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../../../utils/I18n';

import Button from '../Button';

import './css/FilterClearButton.css';

const FilterClearButton = ({ className, handleClearFilters }) => (
  <Button
    className={`FilterClearButton ${className}`}
    text={I18n.t('en.filter.clearFilters')}
    iconName="remove"
    onClick={handleClearFilters}
  />
);

export default FilterClearButton;

FilterClearButton.propTypes = {
  className: PropTypes.string,
  handleClearFilters: PropTypes.func,
};

FilterClearButton.defaultProps = {
  className: '',
  handleClearFilters: () => {},
};
