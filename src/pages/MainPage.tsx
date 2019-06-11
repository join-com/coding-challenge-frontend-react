import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import color from '../constants/colors';

import { fetchIncidents } from '../actions/fetchIncidents';

import Filter from '../components/Filter/Filter';
import Results from '../components/Results/Results';
import Page from '../components/Page/Page';
import { Icon, Spin } from 'antd';

import { StoreState, Dispatch } from '../store';
import { Incident, RequestStatus } from '../types';
import { RouteComponentProps } from 'react-router';
import { RESULTS_PER_PAGE } from '../constants/main';
import objectToArray from '../utils/objectToArray';

const SpinnerWrapper = styled.div`
  padding-top: 42px;
  text-align: center;
`;

const ErrorBlock = styled.div`
  color: ${color.red};
`;

interface MainPageProps extends RouteComponentProps {
  curPage: number;
  curPageResults: Array<Incident>;
  incidentsLoadingStatus: RequestStatus;
  dispatch: Dispatch;
  totalResultsCount: number;
}

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.dispatch(fetchIncidents());
  }

  renderResults() {
    const {
      curPage,
      curPageResults = [],
      incidentsLoadingStatus,
      totalResultsCount
    } = this.props;

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
        return (
          <Results
            curPage={curPage}
            curPageResults={curPageResults}
            totalCount={totalResultsCount}
          />
        );
      }
    }
  }

  render() {
    return (
      <Page>
        <Filter history={this.props.history} />

        {this.renderResults()}
      </Page>
    );
  }
}

const getCurPageElems = (incidents: Array<any>, page: number) =>
  incidents.slice(RESULTS_PER_PAGE * (page - 1), RESULTS_PER_PAGE * page);

const mapStateToProps = (storeState: StoreState, ownProps: MainPageProps) => {
  const incidentsArray = objectToArray(storeState.incidents.byId).reverse();
  const { page, query, startDate, endDate } = queryString.parse(
    ownProps.location.search
  );

  const curPage = +(page || 1);
  const normalizedQuery = query && (query as string).toLowerCase();

  const filteredIncidents = incidentsArray.filter(incident => {
    return (
      !(
        normalizedQuery &&
        incident.title.toLowerCase().indexOf(normalizedQuery) == -1
      ) &&
      !(startDate && startDate >= incident.incidentDate) &&
      !(endDate && endDate <= incident.incidentDate)
    );
  });

  return {
    curPage,
    totalResultsCount: filteredIncidents.length,
    curPageResults: getCurPageElems(filteredIncidents, curPage),
    incidentsLoadingStatus: storeState.incidents.loadingStatus
  };
};

export default connect(mapStateToProps)(MainPage);
