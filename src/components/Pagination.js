import React from 'react';
import './Pagination.css';

const pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  updatePageFn
}) => {
  const changeToPage = pageNumber => {
    updatePageFn({ page: pageNumber });
  };

  return (
    <div className="pagination__list">
      {currentPage > 1 && (
        <div className="pagination__item" onClick={changeToPage.bind(this, 1)}>
          &lt;&lt; First
        </div>
      )}
      {currentPage > 1 && (
        <div
          className="pagination__item"
          onClick={changeToPage.bind(this, currentPage - 1)}
        >
          &lt; Prev
        </div>
      )}

      {currentPage < totalItems / itemsPerPage && (
        <div
          className="pagination__item"
          onClick={changeToPage.bind(this, currentPage + 1)}
        >
          Next &gt;
        </div>
      )}
      {currentPage < totalItems / itemsPerPage && (
        <div
          className="pagination__item"
          onClick={changeToPage.bind(
            this,
            Math.ceil(totalItems / itemsPerPage)
          )}
        >
          Last &gt;&gt;
        </div>
      )}
    </div>
  );
};

export default pagination;
