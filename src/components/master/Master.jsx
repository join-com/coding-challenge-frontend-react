import React from 'react';

import PropTypes from 'prop-types';
import dataItemType from '../types/dataItem';
import paginationType from '../../global/components/Pagination/types/pagination';
import paginationDefaults from '../../global/components/Pagination/defaults/pagination';

import I18n from '../../utils/I18n';

import DataStateNotifier from '../../global/components/DataStateNotifier';
import Pagination from '../../global/components/Pagination';
import PaginationTotal from '../../global/components/Pagination/PaginationTotal';

import MasterList from './MasterList';

import './css/Master.css';

const Master = ({
  data, dataPagination, onPageNumberChange, ...otherProps
}) => {
  const { dataLoading } = otherProps;

  return (
    <div className="Master">
      <div className="Master__header">
        <h2 className="Master__title">
          {I18n.t('en.data.title')}
        </h2>
      </div>
      <div className="Master__container">
        <DataStateNotifier {...otherProps}>
          {data && !!data.length && !dataLoading
            && (
              <PaginationTotal
                dataPagination={dataPagination}
              />
            )
          }
          {data && !dataLoading
            && (
              <MasterList
                data={data}
              />
            )
          }
          {data && !!data.length && !dataLoading
            && (
              <Pagination
                dataPagination={dataPagination}
                onPageNumberChange={onPageNumberChange}
              />
            )
          }
        </DataStateNotifier>
      </div>
    </div>
  );
};

export default Master;

Master.propTypes = {
  data: PropTypes.arrayOf(dataItemType),
  dataLoading: PropTypes.string,
  dataPagination: paginationType,
  onPageNumberChange: PropTypes.func,
};

Master.defaultProps = {
  data: [],
  dataLoading: '',
  dataPagination: paginationDefaults,
  onPageNumberChange: () => {},
};
