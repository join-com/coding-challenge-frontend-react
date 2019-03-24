// Core
import React from 'react';
import { createBrowserHistory } from 'history';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';

// Components
import Main from './Main/Main';
import Case from './Case/Case';

const App = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/case/:caseId?" component={Case} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
