import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function IncidentDetails({
    id,
    src,
    title,
    description,
    date,
    address
}) {
    return (
        <StyledComponent className="c-incident-details">
            <h2 className="c-incident-details__title">{ title }</h2>
            <p>
                <strong>Stolen</strong> { (new Date(date)).toLocaleDateString() } { address }
            </p>
            <div className="c-incident-details__map">MAP</div>
            <h2 className="c-incident-details__title">Description of incident</h2>
            <p>{ description }</p>
        </StyledComponent>
    );
}

IncidentDetails.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number,
    address: PropTypes.string
};
