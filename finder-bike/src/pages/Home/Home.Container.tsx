import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import { getIncidentsRequest } from './Home.action';

const emtyDataSelector = state => {
  return (
    state.homeReducer.data &&
    state.homeReducer.data.length < 1 &&
    !state.homeReducer.loading
  );
};

const hasDataSelector = state => {
  return (
    state.homeReducer.data &&
    state.homeReducer.data.length > 0 &&
    !state.homeReducer.loading
  );
};

const mapStateToProps = state => ({
  loading: state.homeReducer.request,
  data: state.homeReducer.data,
  error: state.homeReducer.error,
  emptyData: emtyDataSelector(state),
  hasData: hasDataSelector(state)
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getIncidents: getIncidentsRequest
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
