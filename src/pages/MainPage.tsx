import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { fetchIncidents } from '../actions/fetchIncidents';

import FilterRow from '../components/FilterRow/FilterRow';
import Results from '../components/Results/Results';
import Page from '../components/Page/Page';

import { StoreState } from '../store';
import { Dispatch } from '../store';
import { Incidents } from '../types';

type MainPageProps = {
  incidents?: Incidents;
  dispatch: Dispatch;
  location: {
    search: string;
  };
};

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.dispatch(fetchIncidents());
  }

  render() {
    const { location, incidents } = this.props;
    const page = +(queryString.parse(location.search).page || 1);

    return (
      <Page>
        <FilterRow />
        <Results page={page} incidents={incidents} />
      </Page>
    );
  }
}

const mapStateToProps = ({ incidents }: StoreState) => ({ incidents });

export default connect(mapStateToProps)(MainPage);
