import React from 'react';
import PropTypes from 'prop-types';

import PaginationTab from './PaginationTab';

import './PaginationLast.css';

const PaginationLast = ({
  totalPages, pageNumber, onPageNumberChange,
}) => {
  if (totalPages > 1 && pageNumber < totalPages) {
    return (
      <div className="PaginationLast">
        <div className="PaginationLast__container">
          <PaginationTab
            className="PaginationLastTab"
            currentPageNumber={totalPages}
            pageNumber={pageNumber}
            onPageNumberChange={onPageNumberChange}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default PaginationLast;

PaginationLast.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageNumberChange: PropTypes.func,
};

PaginationLast.defaultProps = {
  totalPages: 0,
  pageNumber: 1,
  onPageNumberChange: () => {},
};
