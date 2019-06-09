import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Action, fetchIncidents } from '../../actions';

import { StoreState } from '../../store';

import Page from '../Page/Page';
import FilterRow from '../FilterRow/FilterRow';
import Results from '../Results/Results';

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
      <Page>
        <FilterRow />
        <Results />
      </Page>
    );
  }
}

export default connect()(App);
