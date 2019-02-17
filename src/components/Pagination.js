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

  const getPagesArray = () => {
    let pageList = [];
    for (var i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageList.push(i);
    }
    return pageList;
  };

  return (
    <div className="pagination__list">
      {currentPage > 1 && (
        <div
          className="pagination__item btn"
          onClick={changeToPage.bind(this, 1)}
        >
          « First
        </div>
      )}
      {currentPage > 1 && (
        <div
          className="pagination__item btn"
          onClick={changeToPage.bind(this, currentPage - 1)}
        >
          ‹ Prev
        </div>
      )}
      {getPagesArray().map(index => (
        <div
          key={index}
          className={`pagination__item btn ${
            currentPage === index ? ' current' : ''
          }`}
          onClick={changeToPage.bind(this, index)}
        >
          {index}
        </div>
      ))}
      {currentPage < totalItems / itemsPerPage && (
        <div
          className="pagination__item btn"
          onClick={changeToPage.bind(this, currentPage + 1)}
        >
          Next ›
        </div>
      )}
      {currentPage < totalItems / itemsPerPage && (
        <div
          className="pagination__item btn"
          onClick={changeToPage.bind(
            this,
            Math.ceil(totalItems / itemsPerPage)
          )}
        >
          Last »
        </div>
      )}
    </div>
  );
};

export default pagination;
