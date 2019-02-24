import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/404/NotFound';
import MasterPage from './components/master/MasterPage';
import DetailPage from './components/detail/DetailPage';

import './App.css';

const App = () => (
  <div className="App">
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
