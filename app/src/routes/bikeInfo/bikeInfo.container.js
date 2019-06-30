import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';
import {
  selectSelectedBikeDomain,
  selectLoadingDomain,
  selectIncidentsErrorDomain,
} from '../../modules/incidents/incidents.selectors';
import { IncidentsActions } from '../../modules/incidents';
import { BikeInfo } from './bikeInfo.component';

const mapStateToProps = createStructuredSelector({
  bike: selectSelectedBikeDomain,
  loading: selectLoadingDomain,
  error: selectIncidentsErrorDomain,
});

export const mapDispatchToProps = dispatch => bindActionCreators(IncidentsActions, dispatch);

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(BikeInfo);
