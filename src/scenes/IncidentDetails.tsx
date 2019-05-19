import React from 'react';
import * as R from 'ramda';

// @ts-ignore
export function IncidentDetails(props): React.ReactElement {
    // @ts-ignore
    return <div>IncidentDetails {R.path(['match', 'params', 'id'], props)}</div>;
}
