// Core
import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Instruments
import styles from './SearchPanel.module.scss';

export default class SearchPanel extends PureComponent {
  state = {};

  onChangeData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { onFind } = this.props;
    const { dateFrom, dateTo, query } = this.state;

    let errorMessage;

    if (dateFrom && !moment(dateFrom).isValid()) {
      errorMessage = 'date From is not valid';
    }

    if (dateTo && !moment(dateTo).isValid()) {
      errorMessage = 'date To is not valid';
    }

    if (dateFrom && dateTo && dateFrom > dateTo) {
      errorMessage = '"From" date is greater than date "To"';
    }

    if (!errorMessage) {
      onFind({
        dateFrom: moment(dateFrom).unix(),
        dateTo: moment(dateTo).unix(),
        query,
      });
    }

    this.setState({ errorMessage });
  };

  render() {
    const { isDataLoading } = this.props;
    const { errorMessage } = this.state;

    return (
      <div className={styles.SearchPanel}>
        <form onSubmit={this.onSubmit}>
          <input className={styles.inline} type="text" placeholder="Search case descriptions" name="query" maxLength={30} onChange={this.onChangeData} />

          <div className={styles.inline}>
            <div className={styles.date}>
              <div>From</div>
              <input type="date" placeholder="from" name="dateFrom" onChange={this.onChangeData} />
            </div>

            <div className={styles.date}>
              <div>To</div>
              <input type="date" placeholder="to" name="dateTo" onChange={this.onChangeData} />
            </div>
          </div>

          <button className={styles.inline} type="submit" disabled={isDataLoading} onClick={this.onSubmit}>Find cases</button>
        </form>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      </div>
    );
  }
}

SearchPanel.propTypes = {
  isDataLoading: PropTypes.bool.isRequired,
  onFind: PropTypes.func.isRequired,
};
