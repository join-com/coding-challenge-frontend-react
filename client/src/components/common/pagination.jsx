import React from "react";

export default (props) => {
  const {
    loading,
    showPrevLink,
    showNextLink,
    currentPageNumber,
    handlePrevClick,
    handleNextClick,
  } = props;
  return (
    <div className="nav-link-container d-flex justify-content-center align-items-center">
      <a
        href="#"
        className={`nav-link btn btn-primary ${showPrevLink ? "show" : "hide"} 
        ${loading ? "greyed-out" : ""}`}
        onClick={handlePrevClick}
      >
        Prev
      </a>
      <a href="#" className="nav-link btn btn-primary">
        {currentPageNumber}
      </a>
      <a
        href="#"
        className={`nav-link btn btn-primary ${showNextLink ? "show" : "hide"} 
        ${loading ? "greyed-out" : ""}`}
        onClick={handleNextClick}
      >
        Next
      </a>
    </div>
  );
};
