import React from 'react';

import paginationType from './types/pagination';
import paginationDefaults from './defaults/pagination';

import I18n from '../../../utils/I18n';

import './PaginationTotal.css';

const PaginationTotal = ({ dataPagination }) => {
  if (dataPagination) {
    const {
      totalElements,
    } = dataPagination;

    return (
      <div className="PaginationTotal">
        <div className="PaginationTotal__text">
          {I18n.t('en.pagination.total', { count: totalElements })}
        </div>
      </div>
    );
  }

  return null;
};

export default PaginationTotal;

PaginationTotal.propTypes = {
  dataPagination: paginationType,
};

PaginationTotal.defaultProps = {
  dataPagination: paginationDefaults,
};
