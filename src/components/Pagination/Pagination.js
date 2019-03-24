// Core
import React, { PureComponent } from 'react';

// Instruments
import styles from './Pagination.module.scss';

export default class Pagination extends PureComponent {
  render() {
    const { currentPage, openPage } = this.props;
    const pageLink = (currentPage <= 2) ? 1 : currentPage - 1;

    return (
      <div className={styles.Pagination}>
        <button type="button" onClick={() => openPage(1)} disabled={currentPage === 1}>{'<< First'}</button>
        <button type="button" onClick={() => openPage(currentPage - 1)} disabled={currentPage === 1}>{'< Prev'}</button>
        <button type="button" onClick={() => openPage(pageLink)} disabled={currentPage === 1}>{pageLink}</button>
        <button type="button" onClick={() => openPage(pageLink + 1)} disabled={currentPage !== 1}>{pageLink + 1}</button>
        <button type="button" onClick={() => openPage(pageLink + 2)}>{pageLink + 2}</button>
        <button type="button" onClick={() => openPage(currentPage + 1)}>{'Next >'}</button>
      </div>
    );
  }
}

// TODO add propTypes
