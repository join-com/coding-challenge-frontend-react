// Core
import React, { PureComponent } from 'react';

// Instruments
import styled from 'styled-components';

// Utils
import callApi from '../../utils/call-api';

// Components
import SearchPanel from '../SearchPanel/SearchPanel';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import IncidentList from '../IncidentList/IncidentList';
import Header from '../Header/Header';

const Wrapper = styled.div`margin: 50px;`;

export default class Main extends PureComponent {
  state = {
    isDataError: false,
    isDataLoading: false,
    incidents: [],
    currentPage: 1,
  };

  async componentDidMount() {
    this.isComponentMounted = true;

    await this.getData();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  getData = async ({ dateFrom, dateTo, query } = {}) => {
    this.setState({
      isDataError: false, isDataLoading: true,
    });

    try {
      const { incidents } = await callApi(
        { occurredAfter: dateFrom, occurredBefore: dateTo, query },
      );
      if (this.isComponentMounted) {
        this.setState({ incidents });
      }
    } catch (error) {
      if (this.isComponentMounted) {
        this.setState({ isDataError: true });
      }
    } finally {
      if (this.isComponentMounted) {
        this.setState({ isDataLoading: false });
      }
    }
  };

  onFind = async ({ dateFrom, dateTo, query }) => {
    this.setState({ currentPage: 1 });
    await this.getData({ dateFrom, dateTo, query });
  };

  openPage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    window.scrollTo(0, 0);
  };

  dataLayout = () => {
    const {
      isDataError, incidents, currentPage, isDataLoading,
    } = this.state;

    if (isDataError) {
      return <ErrorInfo />;
    } if (isDataLoading) {
      return <p>Loading ... </p>;
    }
    return (
      <IncidentList
        incidents={incidents}
        currentPage={currentPage}
        openPage={this.openPage}
      />
    );
  };

  render() {
    const { isDataLoading } = this.state;

    return (
      <Wrapper>
        <Header />

        <SearchPanel onFind={this.onFind} isDataLoading={isDataLoading} />

        {this.dataLayout()}
        <p>v 1.0.0</p>
      </Wrapper>
    );
  }
}
