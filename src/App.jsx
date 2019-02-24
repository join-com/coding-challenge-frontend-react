import React from 'react';
import { Route, Switch } from 'react-router-dom';

import I18n from './utils/I18n';

import NotFound from './components/404/NotFound';
import MasterPage from './components/master/MasterPage';
import DetailPage from './components/detail/DetailPage';

import './App.css';

const App = () => (
  <div className="App">
    <h1 className="App__header">{I18n.t('en.title')}</h1>
    <Switch>
      <Route
        exact
        path="/"
        render={routerProps => <MasterPage {...routerProps} />}
      />
      <Route
        exact
        path="/:id(\d+)"
        render={routerProps => <DetailPage {...routerProps} />}
      />
      <Route path="/:else" component={NotFound} />
    </Switch>
  </div>
);

export default App;
