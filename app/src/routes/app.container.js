import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';

import { App } from './app.component';
import { LocalesActions, selectLocalesLanguage } from '../modules/locales';
import { StartupActions } from '../modules/startup';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLanguage: LocalesActions.setLanguage,
      startup: StartupActions.startup,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(App);
