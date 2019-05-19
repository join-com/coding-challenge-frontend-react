import {connect} from 'react-redux'
import { Dispatch } from 'redux'

import { AppState } from '../modules/interfaces'
import PaginationComponent from '../components/Pagination'

const mapStateToProps = (state : AppState) => ({
  isLoading: state.isLoading,
  total: state.data.length,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // onSubmit: (params: Filters) => dispatch(fetchDataAction(params))
});

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);

export default PaginationContainer;
