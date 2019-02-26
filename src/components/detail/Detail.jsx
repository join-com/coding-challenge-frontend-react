import React from 'react';

import dataItemType from '../types/dataItem';

import DataStateNotifier from '../../global/components/DataStateNotifier';

import I18n from '../../utils/I18n';

import DetailHeader from './DetailHeader';

import './css/Detail.css';

const Detail = ({
  item, ...otherProps
}) => (
  <DataStateNotifier
    {...otherProps}
  >
    <div className="Detail">
      <DetailHeader item={item} />
    </div>
  </DataStateNotifier>
);

export default Detail;

Detail.propTypes = {
  item: dataItemType,
};

Detail.defaultProps = {
  item: {},
};
