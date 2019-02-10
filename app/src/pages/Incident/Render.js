import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import IncidentDetails from 'app/components/IncidentDetails';

export default function IncidentPage({
    incident,
    bikeLoading,
    coordinates
}) {
    return (
        <Fragment>
            <IncidentDetails
                {...incident}
                coordinates={coordinates}
                mapLoading={bikeLoading}
                date={incident.occurred_at}
            />
        </Fragment>
    );
}

IncidentPage.propTypes = {
    incident: PropTypes.object,
    coordinates: PropTypes.object,
    bikeLoading: PropTypes.bool
};
