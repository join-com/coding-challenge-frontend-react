// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Instruments
import styles from './Pagination.module.scss';

// Constants
import { CASES_ON_PAGE } from '../../constants/pages';

export default class Pagination extends PureComponent {
  openFirstPage = () => {
    const { openPage } = this.props;
    openPage(1);
  };

  openPreviousPage = () => {
    const { currentPage, openPage } = this.props;
    openPage(currentPage - 1);
  };

  openNextPage = () => {
    const { currentPage, openPage } = this.props;
    openPage(currentPage + 1);
  };

  openLastPage = () => {
    const { openPage } = this.props;
    openPage(this.getTotalPages);
  };

  getTotalPages = () => {
    const { totalRecords } = this.props;
    return Math.ceil(totalRecords / CASES_ON_PAGE);
  };

  render() {
    const { currentPage, openPage } = this.props;
    const pages = new Array(this.getTotalPages()).fill(0).map((v, i) => i + 1);

    return (
      <div className={styles.Pagination}>
        <button type="button" onClick={this.openFirstPage} disabled={currentPage === 1}>{'<< First'}</button>
        <button type="button" onClick={this.openPreviousPage} disabled={currentPage === 1}>{'< Prev'}</button>

        { pages.map(pageIndex => <button type="button" onClick={() => openPage(pageIndex)} disabled={currentPage === pageIndex} key={pageIndex}>{pageIndex}</button>) }

        <button type="button" onClick={this.openNextPage} disabled={currentPage === pages.length}>{'Next >'}</button>
        <button type="button" onClick={this.openLastPage} disabled={currentPage === pages.length}>{'Last >>'}</button>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  openPage: PropTypes.func.isRequired,

  // TODO add check must be bigger 0
  currentPage: PropTypes.number.isRequired,
};
