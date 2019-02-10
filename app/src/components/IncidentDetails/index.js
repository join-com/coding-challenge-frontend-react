import React from 'react';
import PropTypes from 'prop-types';

import GoogleMap from 'app/components/GoogleMap';

import StyledComponent from './_style';

export default function IncidentDetails({
    title,
    description,
    date,
    address,
    mapLoading,
    coordinates
}) {
    return (
        <StyledComponent className="c-incident-details">
            <h2 className="c-incident-details__title">{ title }</h2>
            <p>
                <strong>Stolen</strong> { (new Date(date * 1000)).toLocaleDateString() } { address }
            </p>
            {
                mapLoading
                    ? <p>Map loading...</p>
                    : (
                        <GoogleMap
                            center={coordinates}
                            markerPosition={coordinates}
                        />
                    )
            }
            <h2 className="c-incident-details__title">Description of incident</h2>
            <p>{ description }</p>
        </StyledComponent>
    );
}

IncidentDetails.propTypes = {
    mapLoading: PropTypes.bool,
    coordinates: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number,
    address: PropTypes.string
};
