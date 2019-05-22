import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import { store, history } from 'store';
import { Layout } from 'components/Layout';
import { Incidents } from 'scenes/Incidents';
import { IncidentDetails } from 'scenes/IncidentDetails';

import { MAX_INCIDENTS_COUNT, DEFAULT_PROXIMITY, DEFAULT_INCIDENTS_PER_PAGE } from 'core/constants';
import { IncidentsRequest } from 'core/incidents/actions';
import { GeoRequest } from 'core/geo/actions';

import './reset.css';
import './App.css';

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

    public render() {
        return (
            <Provider store={store}>
                <Layout>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact={true} path="/" component={Incidents} />
                            <Route path="/case/:id" component={IncidentDetails} />
                        </Switch>
                    </ConnectedRouter>
                </Layout>
            </Provider>
        );
    }
}
