import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../../../utils/I18n';

import Button from '../Button';

import './css/FilterSubmitButton.css';

const FilterSubmitButton = ({ className }) => (
  <Button
    className={`FilterSubmitButton ${className}`}
    text={I18n.t('en.filter.filter')}
    iconName="filter"
    type="submit"
  />
);

export default FilterSubmitButton;

FilterSubmitButton.propTypes = {
  className: PropTypes.string,
};

FilterSubmitButton.defaultProps = {
  className: '',
};
