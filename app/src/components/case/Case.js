import React from 'react';
import './Case.css';

export default class Case extends React.Component {
  render() {
    return (
      <section className="card mb-3">
        <section className="row no-gutters">
          <section className="col-md-3">
            <img src={this.props.imageSrc} className="card-img" />
          </section>
          <section className="col-md-9">
            <section className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text">
                <strong>Date of theft: </strong>
                {this.props.dateOfTheft}
              </p>
              <p className="card-text">
                <strong>Reported: </strong>
                {this.props.reported}
              </p>
              <p className="card-text">
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
