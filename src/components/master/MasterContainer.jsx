import React from 'react';
import { connect, Provider } from 'react-redux';

import store from '../../store';

import {
  fetchData,
  resetDataError,
  onPageNumberChange,
} from '../../actions/data';

import {
  getData,
  getDataPagination,
  getDataFiltersParams,
  getDataError,
  getDataLoading,
} from '../../reducers/data';

import MasterWrapper from './MasterWrapper';

const mapStateToProps = state => ({
  data: getData(state),
  dataPagination: getDataPagination(state),
  dataFiltersParams: getDataFiltersParams(state),
  dataError: getDataError(state),
  dataLoading: getDataLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchData(params)),
  resetDataError: () => dispatch(resetDataError()),
  onPageNumberChange: params => dispatch(onPageNumberChange(params)),
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
