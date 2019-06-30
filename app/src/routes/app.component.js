import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedMessage } from 'react-intl';

import { translationMessages, DEFAULT_LOCALE } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';

export class App extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    match: PropTypes.object.isRequired,
    setLanguage: PropTypes.func.isRequired,
    startup: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setLanguage(this.getLanguage(this.props));
    this.props.startup();
  }

  componentDidUpdate(prevProps) {
    if (this.getLanguage(prevProps) !== this.getLanguage(this.props)) {
      this.props.setLanguage(this.getLanguage(this.props));
    }
  }

  getLanguage = props => props.match.params.lang || DEFAULT_LOCALE;

  render() {
    if (!this.props.language) {
      return null;
    }

    return (
      <IntlProvider
        key={this.props.language}
        locale={this.props.language}
        messages={translationMessages[this.props.language]}
      >
        <Fragment>
          <FormattedMessage {...messages.pageTitle}>
            {pageTitle => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
          </FormattedMessage>

          <GlobalStyle />
          {React.Children.only(this.props.children)}
        </Fragment>
      </IntlProvider>
    );
  }
}
