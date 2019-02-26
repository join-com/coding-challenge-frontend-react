import React from 'react';
import { connect, Provider } from 'react-redux';

import store from '../../store';

import {
  fetchDataById,
  resetDataError,
} from '../../actions/data';

import {
  getData,
  getDataError,
  getDataLoading,
} from '../../reducers/data';

import DetailWrapper from './DetailWrapper';

const mapStateToProps = state => ({
  data: getData(state),
  dataError: getDataError(state),
  dataLoading: getDataLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchDataById: params => dispatch(fetchDataById(params)),
  resetDataError: () => dispatch(resetDataError()),
});

const ConnectedDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailWrapper);

const DetailContainer = props => (
  <Provider store={store}>
    <ConnectedDetailContainer {...props} />
  </Provider>
);

export default DetailContainer;
