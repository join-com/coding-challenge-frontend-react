import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { LanguageSwitcher } from './languageSwitcher.component';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(LanguageSwitcher);
