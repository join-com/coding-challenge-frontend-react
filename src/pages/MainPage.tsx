import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import color from '../constants/colors';

import { fetchIncidents } from '../actions/fetchIncidents';

import FilterRow from '../components/FilterRow/FilterRow';
import Results from '../components/Results/Results';
import Page from '../components/Page/Page';
import { Icon, Spin } from 'antd';

import { StoreState, Dispatch } from '../store';
import { Incidents, RequestStatus } from '../types';

const SpinnerWrapper = styled.div`
  padding-top: 42px;
  text-align: center;
`;

const ErrorBlock = styled.div`
  color: ${color.red};
`;

type MainPageProps = {
  incidents?: Incidents;
  incidentsLoadingStatus: RequestStatus;
  dispatch: Dispatch;
  location: {
    search: string;
  };
};

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.dispatch(fetchIncidents());
  }

  renderResults() {
    const { location, incidents, incidentsLoadingStatus } = this.props;

    switch (incidentsLoadingStatus) {
      case RequestStatus.FETCHING: {
        return (
          <SpinnerWrapper>
            <Spin
              indicator={<Icon type="loading" style={{ fontSize: 42 }} spin />}
            />
          </SpinnerWrapper>
        );
      }

      case RequestStatus.FAILURE: {
        return <ErrorBlock>Something has gone wrong(</ErrorBlock>;
      }

      default: {
        const page = +(queryString.parse(location.search).page || 1);

        return <Results page={page} incidents={incidents} />;
      }
    }
  }

  render() {
    return (
      <Page>
        <FilterRow />

        {this.renderResults()}
      </Page>
    );
  }
}

const mapStateToProps = (storeState: StoreState) => ({
  incidents: storeState.incidents.byId,
  incidentsLoadingStatus: storeState.incidents.loadingStatus
});

export default connect(mapStateToProps)(MainPage);
