import React from 'react';
import './Case.css';

export default class Case extends React.Component {
  render() {
    return (
      <section class="card mb-3">
        <section class="row no-gutters">
          <section class="col-md-3">
            <img src={this.props.imageSrc} class="card-img" />
          </section>
          <section class="col-md-9">
            <section class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">{this.props.description}</p>
              <p class="card-text">
                <strong>Date of theft: </strong>
                {this.props.dateOfTheft}
              </p>
              <p class="card-text">
                <strong>Reported: </strong>
                {this.props.reported}
              </p>
              <p class="card-text">
                <strong>Location: </strong>
                {this.props.location}
              </p>
            </section>
          </section>
        </section>
      </section>
    )
  }
}
