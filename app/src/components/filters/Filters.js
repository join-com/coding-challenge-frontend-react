import React from 'react';
import './Filters.css';

export default class Filters extends React.Component {
  render() {
    return (
      <section className="flex-container">
        <input type="text" className="form-control" placeholder="Search case descriptions" />
        <span>
          From:
          <input type="date" className="form-control" />
        </span>
        <span>
          To:
          <input type="date" className="form-control" />
        </span>
        <button type="button" className="btn btn-primary">Find cases</button>
      </section>
    )
  }
}
