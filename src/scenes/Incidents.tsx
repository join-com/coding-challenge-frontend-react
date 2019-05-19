import React from 'react';
import { store } from 'store';
import { MAX_INCIDENTS_COUNT, DEFAULT_PROXIMITY, DEFAULT_INCIDENTS_PER_PAGE } from 'core/constants';
import { IncidentsRequest } from 'core/incidents/actions';
import { GeoRequest } from 'core/geo/actions';

export class Incidents extends React.Component {
    public componentDidMount() {
        store.dispatch(
            new IncidentsRequest({
                perPage: MAX_INCIDENTS_COUNT,
                proximity: DEFAULT_PROXIMITY,
            }),
        );

        store.dispatch(
            new IncidentsRequest({
                perPage: DEFAULT_INCIDENTS_PER_PAGE,
                proximity: DEFAULT_PROXIMITY,
            }),
        );

        setTimeout(() => {
            store.dispatch(
                new GeoRequest({
                    proximity: DEFAULT_PROXIMITY,
                    occurredAfter: 1532152800,
                    occurredBefore: 1532152800,
                }),
            );
        }, 1000);
    }

    public render(): React.ReactElement {
        return <div>Incidents</div>;
    }
}
