import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchIncidents } from '../../actions';

import MainPage from '../pages/MainPage';
import IncidentPage from '../pages/IncidentPage';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
            <Route path="/" exact component={MainPage} />
            <Route path="/incident/:id" component={IncidentPage} />
          </Router>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
