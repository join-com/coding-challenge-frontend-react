// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import IncidentCard from '../IncidentCard/IncidentCard';
import Pagination from '../Pagination/Pagination';

// Instruments
import styles from './IncidentList.module.scss';

export default class IncidentList extends PureComponent {
  render() {
    const {
      openPage, incidentsData, currentPage, incidentsData: { incidents = [] },
    } = this.props;

    console.log('incidentsData', incidentsData);

    return (
      <div className={styles.incidentList}>
        {
          incidents.length > 0
            ? (
              <>
                {incidents.map(
                  incident => (
                    <div className={styles.incidentCard} key={incident.id}>
                      <IncidentCard incident={incident} />
                    </div>
                  ),
                )}
                <Pagination currentPage={currentPage} openPage={openPage} />
              </>
            )
            : <p>No results</p>
        }
      </div>
    );
  }
}

IncidentList.propTypes = {
  incidentsData: PropTypes.shape({
    incidents: PropTypes.arrayOf(
      PropTypes.object,
    ),
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
};
