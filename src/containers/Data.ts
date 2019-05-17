import {connect} from 'react-redux'
import { Dispatch } from 'redux'

import { AppState } from '../modules/interfaces'
import DataComponent from '../components/Data'

const mapStateToProps = (state : AppState) => ({
  data: state.data,
  isLoading: state.isLoading,
  error: (state.error !== undefined) && (state.error.field === 'request'),
  page: state.filters.page,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({

})

const DataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);

export default DataContainer;
