import React from 'react';
import Case from '../case/Case.js';
import './Cases.css';

export default class Cases extends React.Component {
  render() {
    let content;

    if (this.props.loading) {
      content = <p>Loading...</p>
    } else if (this.props.cases.length === 0) {
      content = <p>No results</p>
    } else {
      content = this.props.cases.map((c) =>
        <Case
          key={c.id}
          imageSrc={c.media ? c.media.image_url : ''}
          title={c.title}
          description={c.description}
          dateOfTheft={c.occurred_at ? new Date(c.occurred_at).toDateString() : ''}
          reported=""
          location={c.address}
        />
      );
    }

    return (
      <section>
        {content}
      </section>
    )
  }
}
