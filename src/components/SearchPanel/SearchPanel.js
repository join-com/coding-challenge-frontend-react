// Core
import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Instruments
import styles from './SearchPanel.module.scss';

export default class SearchPanel extends PureComponent {
  state = {
    // TODO remove from value
    dateFrom: moment('2018-01-01').format('YYYY-MM-DD'),
    dateTo: moment().format('YYYY-MM-DD'),
    query: '',
  };

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
    } else {
      this.setState({ errorMessage });
    }
  };

  render() {
    const { isDataLoading } = this.props;
    const { dateFrom, dateTo, errorMessage } = this.state;

    return (
      <div className={styles.SearchPanel}>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Search case descriptions" name="query" maxLength={30} onChange={this.onChangeData} />

          <div>
            <div>From</div>
            <input type="date" placeholder="from" name="dateFrom" onChange={this.onChangeData} value={dateFrom} />
          </div>

          <div>
            <div>To</div>
            <input type="date" placeholder="to" name="dateTo" onChange={this.onChangeData} value={dateTo} />
          </div>

          <button type="submit" disabled={isDataLoading} onClick={this.onSubmit}>Find cases</button>
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
