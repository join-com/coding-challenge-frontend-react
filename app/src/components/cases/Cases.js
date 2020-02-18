import React from 'react';
import './Cases.css';

export default class Cases extends React.Component {
  render() {
    return (
      <section>
        {this.props.loading &&
          <p>Loading...</p>
        }
        {!this.props.loading && this.props.cases.length === 0 &&
          <p>No results</p>
        }
      </section>
    )
  }
}
