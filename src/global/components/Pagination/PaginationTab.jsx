import React from 'react';
import PropTypes from 'prop-types';

import { bemCls } from '../../utils/ClassNameHelpers';

import Button from '../Button';

import './PaginationTab.css';

const PaginationTab = ({
  currentPageNumber, pageNumber, onPageNumberChange,
}) => (
  <Button
    className={`Pagination__tab ${
      bemCls('Pagination__tab', '--active', currentPageNumber === pageNumber)}`}
    text={`${currentPageNumber}`}
    params={{ pageNumber: currentPageNumber }}
    onClick={onPageNumberChange}
  />
);

export default PaginationTab;

PaginationTab.propTypes = {
  pageNumber: PropTypes.number,
  currentPageNumber: PropTypes.number,
  onPageNumberChange: PropTypes.func,
};

PaginationTab.defaultProps = {
  pageNumber: 1,
  currentPageNumber: 1,
  onPageNumberChange: () => {},
};
