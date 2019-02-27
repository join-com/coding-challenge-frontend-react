import React, { Component } from 'react';

import PropTypes from 'prop-types';
import dataItemType from '../types/dataItem';

import I18n from '../../utils/I18n';

import DataStateNotifier from '../../global/components/DataStateNotifier';
import { getItemById } from '../../global/utils/FormatHelpers';

import Detail from './Detail';

class DetailWrapper extends Component {
  componentDidMount() {
    const {
      id, data, fetchDataById,
    } = this.props;

    const item = getItemById(id, data);

    if (!item) fetchDataById({ id });
  }

  render() {
    const {
      id, data, ...otherProps
    } = this.props;

    const { dataLoading } = otherProps;

    const item = getItemById(id, data);

    if (item) {
      return (
        <Detail
          {...this.props}
          item={{
            ...item,
            location: item.address,
          }}
        />
      )
    }

    return (
      <DataStateNotifier
        {...otherProps}
        dataError={!dataLoading
          ? I18n.t('en.route.notFound')
          : ''
        }
      />
    );
  }
}

export default DetailWrapper;

DetailWrapper.propTypes = {
  id: PropTypes.number,
  data: PropTypes.arrayOf(dataItemType),
  dataLoading: PropTypes.string,
  dataError: PropTypes.string,
  resetDataError: PropTypes.func,
  fetchDataById: PropTypes.func,
};

DetailWrapper.defaultProps = {
  id: NaN,
  data: [],
  dataLoading: '',
  dataError: '',
  resetDataError: () => {},
  fetchDataById: () => {},
};
