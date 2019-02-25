import React from 'react';
import PropTypes from 'prop-types';

import I18n from '../../../utils/I18n';

import Button from '../Button';

import './css/PaginationNext.css';

const PaginationNext = ({
  totalPages, pageNumber, onPageNumberChange,
}) => {
  if (totalPages > 1 && pageNumber < totalPages) {
    return (
      <Button
        className="PaginationNext__button"
        text={I18n.t('en.pagination.next')}
        params={{ pageNumber: pageNumber + 1 }}
        onClick={onPageNumberChange}
      />
    );
  }
  return null;
};

export default PaginationNext;

PaginationNext.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageNumberChange: PropTypes.func,
};

PaginationNext.defaultProps = {
  totalPages: 0,
  pageNumber: 1,
  onPageNumberChange: () => {},
};
