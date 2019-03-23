// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import IncidentCard from '../IncidentCard/IncidentCard';

// Instruments
import styles from './IncidentList.module.scss';

export default class IncidentList extends PureComponent {
  render() {
    const { incidentsData, incidentsData: { incidents = [] } } = this.props;

    console.log('incidentsData', incidentsData);

    return (
      <div className={styles.incidentList}>
        {
          incidents.length > 0
            ? incidents.map(
              incident => (
                <div className={styles.incidentCard} key={incident.id}>
                  <IncidentCard incident={incident} />
                </div>
              ),
            )
            : <p>No results</p>
        }
      </div>
    );
  }
}

// TODO add propTypes
IncidentList.propTypes = {
  incidentsData: PropTypes.shape({
    incidents: PropTypes.arrayOf(
      PropTypes.object,
    ),
  }),
};

IncidentList.defaultProps = {
  incidentsData: { incidents: [] },
};
