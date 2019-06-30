import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import App from './app.container';
import { DEFAULT_LOCALE, appLocales, translationMessages } from '../i18n';
import { Home } from './home';
import { NotFound } from './notFound';
import { BikeInfo } from './bikeInfo';

export const ROUTES = {
  home: '/',
  notFound: '/404',
  incident: '/incident',
};

class MatchedLanguageComponent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const { match } = this.props;
    // eslint-disable-next-line no-debugger
    return (
      <App>
        <Switch>
          <Route exact path={`${match.path}${ROUTES.home}`} component={Home} />
          <Route path={`${match.path}${ROUTES.incident}/:id`} exact component={BikeInfo} />
          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}

export default class RootContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={DEFAULT_LOCALE} />} />

        <Route path={`/:lang(${appLocales.join('|')})`} component={MatchedLanguageComponent} />

        <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
          <Route component={NotFound} />
        </IntlProvider>
      </Switch>
    );
  }
}
