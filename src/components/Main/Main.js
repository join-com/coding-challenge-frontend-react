// Core
import React, { PureComponent } from 'react';
import callApi from '../../utils/call-api';

// Instruments
import styles from './Main.module.scss';

// Components
import SearchPanel from '../SearchPanel/SearchPanel';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import IncidentList from '../IncidentList/IncidentList';

export default class Main extends PureComponent {
  state = {
    isDataError: false,
    incidents: {},
  };

  getData = async ({ dateFrom, dateTo, query }) => {
    this.setState({ isDataError: false });

    try {
      const incidents = await callApi({ dateFrom, dateTo, query });
      console.log('data', incidents);
      this.setState({ incidents });
    } catch (error) {
      this.setState({ isDataError: true });
    }
  };

  render() {
    const { isDataError, incidents } = this.state;

    return (
      <div className={styles.Main}>
        <h1>Police Department of Berlin</h1>
        <div>Stolen bikes</div>

        <SearchPanel getData={this.getData} />

        <div>
          {
            isDataError ? <ErrorInfo /> : <IncidentList incidentsData={incidents} />
          }
        </div>
      </div>
    );
  }
}
