// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Instruments
import styled from 'styled-components';

// Constants
import { CASES_ON_PAGE } from '../../constants/pages';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr 3fr;
  grid-column-gap: 10px;
`;

const Button = styled.button`
  margin: 10px;
`;

const Columns = styled.div`
  text-align: center;
`;

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
    openPage(this.getTotalPages());
  };

  getTotalPages = () => {
    const { totalRecords } = this.props;
    return Math.ceil(totalRecords / CASES_ON_PAGE);
  };

  render() {
    const { currentPage, openPage } = this.props;
    const pages = new Array(this.getTotalPages()).fill(0).map((v, i) => i + 1);

    return (
      <Wrapper>
        <Columns>
          <Button type="button" name="button-first" onClick={this.openFirstPage} disabled={currentPage === 1}>{'<< First'}</Button>
          <Button type="button" name="button-prev" onClick={this.openPreviousPage} disabled={currentPage === 1}>{'< Prev'}</Button>
        </Columns>

        <Columns>
          { pages.map(pageIndex => <Button type="button" onClick={() => openPage(pageIndex)} disabled={currentPage === pageIndex} key={pageIndex}>{pageIndex}</Button>) }
        </Columns>

        <Columns>
          <Button type="button" name="button-next" onClick={this.openNextPage} disabled={currentPage === pages.length}>{'Next >'}</Button>
          <Button type="button" name="button-last" onClick={this.openLastPage} disabled={currentPage === pages.length}>{'Last >>'}</Button>
        </Columns>
      </Wrapper>
    );
  }
}

Pagination.propTypes = {
  // TODO add check must be equal or bigger 0
  totalRecords: PropTypes.number.isRequired,
  openPage: PropTypes.func.isRequired,

  // TODO add check must be bigger 0
  currentPage: PropTypes.number.isRequired,
};
