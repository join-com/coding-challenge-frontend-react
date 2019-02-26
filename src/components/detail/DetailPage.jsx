import React from 'react';

import { getRouteParams } from '../../global/utils/UrlHelpers';

import DetailContainer from './DetailContainer';

const DetailPage = (props) => {
  const id = getRouteParams(props, 'id', 'number');

  return (
    <DetailContainer
      {...props}
      id={id}
    />
  );
};

export default DetailPage;
