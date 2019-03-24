// Core
import React, { PureComponent } from 'react';
import moment from 'moment';
import callApi from '../../utils/call-api';

// Instruments
import styles from './Case.module.scss';

// Components
import Header from '../Header/Header';

export default class Case extends PureComponent {
  state = {
    incident: {},
  };

  async componentDidMount() {
    const { match: { params: { caseId } }, location: { state: { incident } = {} } } = this.props;

    if (incident) {
      this.setState({ incident });
    } else {
      try {
        const { incident } = await callApi({ id: caseId });
        console.log('NEW incident', incident);
        this.setState({ incident });
      } catch (error) {
        throw new Error(`ERROR call api with caseId : ${caseId}`);
      }
    }
  }

  render() {
    const { incident: { title, updated_at, description, address } } = this.state;

    console.log('this.props', this.props);

    return (
      <div className={styles.Case}>
        <Header />
        <div>{title}</div>
        <div>{`Stolen ${moment.unix(updated_at).format('llll')} at ${address}`}</div>
        <h2>DESCRIPTION OF INCIDENT</h2>
        <div>{description}</div>
      </div>
    );
  }
}
