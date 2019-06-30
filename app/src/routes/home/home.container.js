import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';
import { Form } from 'antd';

import { Home } from './home.component';
import { selectLocalesLanguage } from '../../modules/locales';
import { IncidentsActions } from '../../modules/incidents';
import {
  selectListDomain,
  selectLoadingDomain,
  selectIncidentsErrorDomain,
} from '../../modules/incidents/incidents.selectors';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  list: selectListDomain,
  loading: selectLoadingDomain,
  error: selectIncidentsErrorDomain,
});
export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadList: IncidentsActions.requestBikeThefts,
      selectBikeInfo: IncidentsActions.showBikeDetails,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl,
  withRouter,
  Form.create({ name: 'cases-search' })
)(Home);
