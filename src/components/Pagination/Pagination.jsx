import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button/Button";

function Pagination({ currentPage, pages, changeUi }) {
  const totalPages = pages.length;
  const disablePrev = currentPage === 0;
  const disableNext = totalPages - 1 === currentPage;
  const setCurrentPage = value => {
    return changeUi({ name: "currentPage", value });
  };
  return (
    <Fragment>
      {pages.length > 0 && (
        <div>
          <Button disabled={disablePrev} onClick={() => setCurrentPage(0)}>
            « First
          </Button>
          <Button disabled={disablePrev} onClick={() => setCurrentPage(currentPage - 1)}>
            ‹ Prev
          </Button>
          {pages.map(page => (
            <Button disabled={currentPage === page - 1} onClick={() => setCurrentPage(page - 1)} key={page}>
              {page}
            </Button>
          ))}
          <Button disabled={disableNext} onClick={() => setCurrentPage(currentPage + 1)}>
            Next ›
          </Button>
          <Button disabled={disableNext} onClick={() => setCurrentPage(totalPages - 1)}>
            Last »
          </Button>
        </div>
      )}
    </Fragment>
  );
}

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number),
  currentPage: PropTypes.number.isRequired,
  changeUi: PropTypes.func.isRequired
};
Pagination.defaultProps = {
  pages: []
};

export default Pagination;
