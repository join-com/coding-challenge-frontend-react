import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../../../utils/I18n';

import Button from '../Button';

import './css/PaginationPrev.css';

const PaginationPrev = ({
  totalPages, pageNumber, onPageNumberChange,
}) => {
  if (totalPages > 1 && pageNumber > 1) {
    return (
      <Button
        className="PaginationPrev__button"
        text={I18n.t('en.pagination.prev')}
        params={{ pageNumber: pageNumber - 1 }}
        onClick={onPageNumberChange}
      />
    );
  }
  return null;
};

export default PaginationPrev;

PaginationPrev.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageNumberChange: PropTypes.func,
};

PaginationPrev.defaultProps = {
  totalPages: 0,
  pageNumber: 1,
  onPageNumberChange: () => {},
};
