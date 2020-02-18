import React from 'react';
import './Filters.css';

export default class Filters extends React.Component {
  render() {
    return (
      <section className="flex-container">
        <input
          type="text"
          className="form-control"
          placeholder="Search case descriptions"
          value={this.props.searchText}
          onChange={this.props.updateSearchText}
        />
        <span>
          From:
          <input
            type="date"
            className="form-control"
            value={this.props.fromDate}
            onChange={this.props.updateFromDate}
          />
        </span>
        <span>
          To:
          <input
            type="date"
            className="form-control"
            value={this.props.toDate}
            onChange={this.props.updateToDate}
          />
        </span>
        <button
          type="button"
          className="btn btn-primary"
        >
          Find cases
        </button>
      </section>
    )
  }
}
