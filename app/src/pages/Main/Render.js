import React from 'react';
import PropTypes from 'prop-types';

import Incidents from 'app/components/Incidents';

export default function MainPage({
    incidents
}) {
    return (
        <Incidents list={incidents} />
    );
}

MainPage.propTypes = {
    incidents: PropTypes.array
};
