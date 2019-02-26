import React from 'react';
import { Link } from 'react-router-dom';

import dataItemType from '../types/dataItem';

import I18n from '../../utils/I18n';

import './css/DetailHeader.css';

const DetailHeader = ({
  item, ...otherProps
}) => {
  if (item) {
    const { id } = item;

    return (
      <div className="DetailHeader">
        <div className="DetailHeader__container">
          <h2 className="DetailHeader__title">
            {I18n.t('en.data.title', { id })}
          </h2>
          <Link
            className="DetailHeader__back Button"
            to="/bikes"
          >
            {I18n.t('en.actions.back')}
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

export default DetailHeader;

DetailHeader.propTypes = {
  item: dataItemType,
};

DetailHeader.defaultProps = {
  item: {},
};
