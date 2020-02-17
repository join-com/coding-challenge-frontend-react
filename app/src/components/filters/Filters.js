import React from 'react';
import './Filters.css';

export default class Filters extends React.Component {
  render() {
    return (
      <section class="flex-container">
        <input type="text" class="form-control" placeholder="Search case descriptions" />
        <span>
          From:
          <input type="date" class="form-control" />
        </span>
        <span>
          To:
          <input type="date" class="form-control" />
        </span>
        <button type="button" class="btn btn-primary">Find cases</button>
      </section>
    )
  }
}
