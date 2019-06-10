import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import IncidentPage from '../pages/IncidentPage';

import { Action, fetchIncidents } from '../../actions';

import { StoreState } from '../../store';

import 'antd/dist/antd.css';

type AppProps = {
  dispatch: ThunkDispatch<StoreState, any, Action>;
};

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.dispatch(fetchIncidents());
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/incident/:id" component={IncidentPage} />
      </Router>
    );
  }
}

export default connect()(App);
