import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import { getIncidentsRequest } from './Home.action';

const mapStateToProps = state => ({
  loading: state.homeReducer.request,
  data: state.homeReducer.data,
  error: state.homeReducer.error
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
