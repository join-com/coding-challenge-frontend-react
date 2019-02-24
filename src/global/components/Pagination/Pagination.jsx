import React from 'react';

import PropTypes from 'prop-types';
import paginationType from './types/pagination';
import paginationDefaults from './defaults/pagination';

import PaginationPrev from './PaginationPrev';
import PaginationFirst from './PaginationFirst';
import PaginationTab from './PaginationTab';
import PaginationLast from './PaginationLast';
import PaginationNext from './PaginationNext';

import './Pagination.css';

const Pagination = ({
  dataPagination, onPageNumberChange,
}) => {
  if (dataPagination) {
    const {
      page, totalPages,
    } = dataPagination;

    return (
      <div className="Pagination">
        <div className="Pagination__container">
          <div className="Pagination__tabs">
            <PaginationFirst
              pageNumber={page}
              totalPages={totalPages}
              onPageNumberChange={onPageNumberChange}
            />
            <PaginationPrev
              pageNumber={page}
              totalPages={totalPages}
              onPageNumberChange={onPageNumberChange}
            />
            <PaginationTab
              currentPageNumber={page}
              pageNumber={page}
              onPageNumberChange={onPageNumberChange}
            />
            <PaginationNext
              pageNumber={page}
              totalPages={totalPages}
              onPageNumberChange={onPageNumberChange}
            />
            <PaginationLast
              pageNumber={page}
              totalPages={totalPages}
              onPageNumberChange={onPageNumberChange}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Pagination;

Pagination.propTypes = {
  dataPagination: paginationType,
  onPageNumberChange: PropTypes.func,
};

Pagination.defaultProps = {
  dataPagination: paginationDefaults,
  onPageNumberChange: () => {},
};
