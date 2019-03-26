// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import IncidentCard from '../IncidentCard/IncidentCard';
import Pagination from '../Pagination/Pagination';

// Constants
import { CASES_ON_PAGE } from '../../constants/pages';

// Instruments
import styles from './IncidentList.module.scss';

export default class IncidentList extends PureComponent {
  listWithPagination = () => {
    const { openPage, currentPage, incidents } = this.props;

    return (
      <>
        <div className={styles.total}>{`total: ${incidents.length}`}</div>
        {incidents
          .filter((element, index) => (CASES_ON_PAGE * (currentPage - 1) <= index) && (index < CASES_ON_PAGE * currentPage))
          .map(
            incident => (
              <div className={styles.incidentCard} key={incident.id}>
                <IncidentCard incident={incident} />
              </div>
            ),
          )}
        <Pagination currentPage={currentPage} openPage={openPage} totalRecords={incidents.length} />
      </>
    );
  };

  render() {
    const { incidents } = this.props;

    return (
      <div className={styles.incidentList}>
        {
          incidents.length > 0 ? this.listWithPagination() : <p>No results</p>
        }
      </div>
    );
  }
}

IncidentList.propTypes = {
  // TODO
  incidents: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  openPage: PropTypes.func.isRequired,
};
