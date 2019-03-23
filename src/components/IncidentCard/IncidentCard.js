// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Instruments
import styles from './IncidentCard.module.scss';

export default class IncidentCard extends PureComponent {
  render() {
    const {
      incident, incident: {
        title, description, occurred_at, media, address,
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
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.dateLocation}>{`${moment.unix(occurred_at).format('llll')} - ${address}`}</div>
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
