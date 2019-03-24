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
        title, description, occurred_at, updated_at, media, address, id
      },
    } = this.props;

    // console.log('incident.id', incident.id);

    return (
      <div className={styles.IncidentCard}>
        <div className={styles.picture}>
          {
            media.image_url_thumb && <img width={100} height={100} alt="bike" src={media.image_url_thumb} />
          }
        </div>
        <div className={styles.textInfo}>
          <Link to={{ pathname: `case/${id}`, state: { incident } }}><div className={styles.title}>{title}</div></Link>
          <div className={styles.description}>{description}</div>
          <div className={styles.dateTheft}>{`Date of the theft: ${moment.unix(occurred_at).format('llll')}`}</div>
          <div className={styles.dateReport}>{`Report date: ${moment.unix(updated_at).format('llll')}`}</div>
          <div className={styles.location}>{`Location: ${address}`}</div>
        </div>
      </div>
    );
  }
}

// TODO add propTypes
IncidentCard.propTypes = {
  incident: PropTypes.object,
};

IncidentCard.defaultProps = {
  incident: { },
};
