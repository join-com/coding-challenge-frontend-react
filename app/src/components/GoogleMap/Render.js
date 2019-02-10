import React from 'react';
import PropTypes from 'prop-types';
import {
    GoogleMap,
    Marker
} from 'react-google-maps';

export default function GoogleMapComponent({
    markerPosition,
    ...otherProps
}) {

    if (!otherProps.defaultCenter && !otherProps.center) {
        return null;
    }

    return (
        <GoogleMap {...otherProps}>
            {
                markerPosition && (
                    <Marker position={markerPosition} />
                )
            }
        </GoogleMap>
    );
}

GoogleMapComponent.propTypes = {
    defaultZoom: PropTypes.number,
    defaultCenter: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    markerPosition: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    })
};
