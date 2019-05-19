import {connect} from 'react-redux'
import { Dispatch } from 'redux'

import { AppState, Filters } from '../modules/interfaces'
import FiltersComponent from '../components/Filters'
import { fetchDataAction } from '../modules/actions'

const mapStateToProps = (state : AppState) => ({
  filters: state.filters,
  isLoading: state.isLoading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (params: Filters) => dispatch(fetchDataAction(params))
})

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersComponent);

export default FiltersContainer;
