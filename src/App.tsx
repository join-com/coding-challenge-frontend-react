import React from 'react';
import { store } from 'store';
import { IncidentsRequest } from 'core/incidents/actions';
import { MAX_INCIDENTS_COUNT, DEFAULT_PROXIMITY, DEFAULT_INCIDENTS_PER_PAGE } from 'core/constants';

export class App extends React.Component {
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
    }

    public render(): React.ReactElement {
        return <div>App</div>;
    }
}
