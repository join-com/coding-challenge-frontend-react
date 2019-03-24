// Core
import React, { PureComponent } from 'react';
import moment from 'moment';

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
    const { onFind } = this.props;
    const { dateFrom, dateTo, query } = this.state;

    let isError = false;

    event.preventDefault();

    if (!moment(dateFrom).isValid()) {
      isError = true;
      console.log('dateFrom is not valid', dateFrom);
    }

    if (!moment(dateTo).isValid()) {
      isError = true;
      console.log('dateTo is not valid', dateTo);
    }

    if (!isError) {
      onFind({
        dateFrom: moment(dateFrom).unix(),
        dateTo: moment(dateTo).unix(),
        query,
      });
    }
  };

  render() {
    const { isDataLoading } = this.props;
    const { dateFrom, dateTo } = this.state;


    return (
      <div className={styles.SearchPanel}>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Search case descriptions" name="query" maxLength={30} onChange={this.onChangeData} />
          <div>
          From
            <input type="date" placeholder="from" name="dateFrom" onChange={this.onChangeData} value={dateFrom} />
          </div>
          <div>
          To
            <input type="date" placeholder="to" name="dateTo" onChange={this.onChangeData} value={dateTo} />
          </div>

          <button type="submit" disabled={isDataLoading} onClick={this.onSubmit}>Find cases</button>
        </form>
      </div>
    );
  }
}

// TODO add propTypes
