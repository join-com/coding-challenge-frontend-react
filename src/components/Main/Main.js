// Core
import React, { PureComponent } from 'react';
import callApi from '../../utils/call-api';

// Instruments
import styles from './Main.module.scss';

// Components
import SearchPanel from '../SearchPanel/SearchPanel';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import IncidentList from '../IncidentList/IncidentList';
import Header from '../Header/Header';

export default class Main extends PureComponent {
  state = {
    isDataError: false,
    isDataLoading: false,
    incidents: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async ({ dateFrom, dateTo, query } = {}) => {
    this.setState({
      isDataError: false, isDataLoading: true, dateFrom, dateTo, query,
    });

    try {
      const { incidents } = await callApi({ dateFrom, dateTo, query });
      console.log('data', incidents);
      this.setState({ incidents });
    } catch (error) {
      this.setState({ isDataError: true });
    } finally {
      this.setState({ isDataLoading: false });
    }
  };

  onFind = ({ dateFrom, dateTo, query }) => {
    this.setState({ currentPage: 1 });
    this.getData({ dateFrom, dateTo, query });
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
      <div className={styles.Main}>
        <Header />

        <SearchPanel onFind={this.onFind} isDataLoading={isDataLoading} />

        {this.dataLayout()}
      </div>
    );
  }
}
