import React from 'react';

import dataItemType from '../types/dataItem';

import DataStateNotifier from '../../global/components/DataStateNotifier';

import DetailHeader from './DetailHeader';
import DetailInfos from './DetailInfos';

const Detail = ({
  item, ...otherProps
}) => (
  <DataStateNotifier
    {...otherProps}
  >
    <div className="Detail">
      <DetailHeader />
      <DetailInfos item={item} />
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
