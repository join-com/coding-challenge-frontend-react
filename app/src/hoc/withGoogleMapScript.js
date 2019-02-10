import React from 'react';
import {
    compose,
    setDisplayName,
    defaultProps
} from 'recompose';
import { withScriptjs } from 'react-google-maps';

const key = 'AIzaSyD6y-ApFD98mFlVdP22gN0lF173Us0O8Xo';

export default compose(
    setDisplayName('google-map-logic'),

    defaultProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
        containerElement: <div className="c-map" />,
        loadingElement: <div className="c-map__loader" />
    }),

    withScriptjs
);
