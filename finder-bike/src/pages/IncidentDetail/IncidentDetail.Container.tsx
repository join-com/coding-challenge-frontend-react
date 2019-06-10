import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IncidentDetail from './IncidentDetail';
import { getIncidentDetailRequest } from './IncidentDetail.action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loading: state.incidentDetailReducer.request,
  data: state.incidentDetailReducer.data,
  error: state.incidentDetailReducer.error
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getIncident: getIncidentDetailRequest
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IncidentDetail)
);
