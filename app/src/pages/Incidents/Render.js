import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    compose,
    branch,
    renderComponent
} from 'recompose';

import Incidents from 'app/components/Incidents';
import Counter from 'app/components/Counter';
import Pagination from 'app/components/Pagination';
import Filter from 'app/components/Filter';
import Throbber from 'app/components/Throbber';
import Message from 'app/components/Message';

function IncidentsPageContent({
    incidents,
    currentPage,
    setCurrentPage,
    totalPages,
    incidentsByChunks,
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

IncidentsPageContent.propTypes = {
    incidentsByChunks: PropTypes.array,
    incidents: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func
};

const IncidentsPageContentEnhaced = compose(
    branch(
        ({ loading }) => loading,
        renderComponent(Throbber)
    ),

    branch(
        ({ isMessage }) => isMessage,
        renderComponent(Message)
    )
)(IncidentsPageContent);


export default function IncidentsPage(props) {
    const { handleFilter } = props;

    return (
        <Fragment>
            <Filter onSubmit={handleFilter} />
            <IncidentsPageContentEnhaced {...props} />
        </Fragment>
    );
}

IncidentsPage.propTypes = {
    handleFilter: PropTypes.func
};
