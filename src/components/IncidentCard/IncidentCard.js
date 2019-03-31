// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Instruments
import styles from './IncidentCard.module.scss';

export default class IncidentCard extends PureComponent {
  render() {
    const {
      incident, incident: {
        title, description, occurred_at, updated_at, media: { image_url_thumb } = {}, address, id,
      },
    } = this.props;

    return (
      <div className={styles.IncidentCard}>
        <div>
          {
            image_url_thumb && <img width={100} height={100} alt="bike" src={image_url_thumb} />
          }
        </div>
        <div className={styles.data}>
          <Link to={{ pathname: `case/${id}`, state: { incident } }}><div>{title}</div></Link>
          <div className={styles.description}>{description}</div>
          <div>
            <strong>Date of the theft:</strong>
            {` ${moment.unix(occurred_at).format('ddd MMM D YYYY')}`}
          </div>
          <div>
            <strong>Report date:</strong>
            {`: ${moment.unix(updated_at).format('ddd MMM D YYYY')}`}
          </div>
          <div>
            <strong>Location:</strong>
            {` ${address}`}
          </div>
        </div>
      </div>
    );
  }
}

IncidentCard.propTypes = {
  incident: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    occurred_at: PropTypes.number,
    updated_at: PropTypes.number,
    media: PropTypes.shape({
      image_url_thumb: PropTypes.string,
    }),
  }).isRequired,
};
