import React from 'react';

import PropTypes from 'prop-types';
import dataItemType from '../types/dataItem';

import I18n from '../../utils/I18n';

import DataStateNotifier from '../../global/components/DataStateNotifier';

import MasterList from './MasterList';

const Master = ({
  data, ...otherProps
}) => {
  const { dataLoading } = otherProps;

  return (
    <div className="Master">
      <div className="Master__header">
        <h3 className="Master__title">
          {I18n.t('en.data.title')}
        </h3>
      </div>
      <div className="Master__container">
        <DataStateNotifier {...otherProps}>
          <MasterList
            data={data}
            dataLoading={dataLoading}
          />
        </DataStateNotifier>
      </div>
    </div>
  );
};

export default Master;

Master.propTypes = {
  data: PropTypes.arrayOf(dataItemType),
  dataLoading: PropTypes.string,
};

Master.defaultProps = {
  data: [],
  dataLoading: '',
};
