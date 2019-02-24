import React from 'react';
import PropTypes from 'prop-types';

import PaginationTab from './PaginationTab';

import './PaginationFirst.css';

const PaginationFirst = ({
  totalPages, pageNumber, onPageNumberChange,
}) => {
  if (totalPages > 1 && pageNumber > 1) {
    return (
      <div className="PaginationFirst">
        <div className="PaginationFirst__container">
          <PaginationTab
            className="PaginationFirstTab"
            currentPageNumber={1}
            pageNumber={pageNumber}
            onPageNumberChange={onPageNumberChange}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default PaginationFirst;

PaginationFirst.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageNumberChange: PropTypes.func,
};

PaginationFirst.defaultProps = {
  totalPages: 0,
  pageNumber: 1,
  onPageNumberChange: () => {},
};
