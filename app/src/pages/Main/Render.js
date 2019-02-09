import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Incidents from 'app/components/Incidents';
import Counter from 'app/components/Counter';
import Pagination from 'app/components/Pagination';

export default function MainPage({
    incidents,
    currentPage,
    setCurrentPage,
    totalPages,
    incidentsByChunks
}) {
    return (
        <Fragment>
            <Counter>{ incidents.length }</Counter>
            <Incidents list={incidentsByChunks[currentPage - 1]} />
            <Pagination
                pages={totalPages}
                activePage={currentPage}
                onChange={setCurrentPage}
            />
        </Fragment>
    );
}

MainPage.propTypes = {
    incidentsByChunks: PropTypes.array,
    incidents: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func
};
