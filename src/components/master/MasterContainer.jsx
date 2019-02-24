import React from 'react';
import { connect, Provider } from 'react-redux';

import store from '../../store';

import {
  fetchData,
  resetDataError,
} from '../../actions/data';

import {
  getData,
  getDataError,
  getDataLoading,
} from '../../reducers/data';

import MasterWrapper from './MasterWrapper';

const mapStateToProps = state => ({
  data: getData(state),
  dataError: getDataError(state),
  dataLoading: getDataLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchData(params)),
  resetDataError: () => dispatch(resetDataError()),
});

const ConnectedMasterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterWrapper);

const MasterContainer = props => (
  <Provider store={store}>
    <ConnectedMasterContainer {...props} />
  </Provider>
);

export default MasterContainer;
