import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import MainPage from '../pages/MainPage';
import IncidentPage from '../pages/IncidentPage';
import UnknownPage from '../pages/UnknownPage';

import { fetchIncidents } from '../../actions';

import store from '../../store';

import 'antd/dist/antd.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchIncidents());
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/incident/:id" component={IncidentPage} />
              <Route component={UnknownPage} />
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
