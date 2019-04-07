// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Instruments
import styled from 'styled-components';

// Components
import IncidentCard from '../IncidentCard/IncidentCard';
import Pagination from '../Pagination/Pagination';

// Constants
import { CASES_ON_PAGE } from '../../constants/pages';

const TotalIncidents = styled.div`
    display: grid;
    justify-items: end;
    margin-top: 40px;
`;

const IncidentCardWrapper = styled.div`margin: 10px;`;

export default class IncidentList extends PureComponent {
  listWithPagination = () => {
    const { openPage, currentPage, incidents } = this.props;

    return (
      <>
        <TotalIncidents>{`total: ${incidents.length}`}</TotalIncidents>
        {incidents
          // eslint-disable-next-line
          .filter((element, index) => (CASES_ON_PAGE * (currentPage - 1) <= index) && (index < CASES_ON_PAGE * currentPage))
          .map(
            incident => (
              <IncidentCardWrapper key={incident.id}>
                <IncidentCard incident={incident} />
              </IncidentCardWrapper>
            ),
          )}
        <Pagination currentPage={currentPage} openPage={openPage} totalRecords={incidents.length} />
      </>
    );
  };

  render() {
    const { incidents } = this.props;

    return (
      <div>
        {
          incidents.length > 0 ? this.listWithPagination() : <p>No results</p>
        }
      </div>
    );
  }
}

IncidentList.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  openPage: PropTypes.func.isRequired,
};
