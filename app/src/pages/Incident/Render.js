import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import IncidentDetails from 'app/components/IncidentDetails';

export default function IncidentPage({
    incident
}) {
    return (
        <Fragment>
            <IncidentDetails
                {...incident}
                date={incident.occurred_at}
            />
        </Fragment>
    );
}

IncidentPage.propTypes = {
    incident: PropTypes.object
};
