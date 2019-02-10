import React from 'react';
import {
    compose,
    setDisplayName,
    defaultProps
} from 'recompose';
import { withGoogleMap } from 'react-google-maps';

import withGoogleMapScript from 'app/hoc/withGoogleMapScript';

export default compose(
    setDisplayName('google-map-logic'),

    defaultProps({
        mapElement: <div className="c-map__element" />,
        defaultZoom: 18
    }),

    withGoogleMapScript,

    withGoogleMap
);
