import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import { store, history } from 'store';
import { Layout } from 'components/Layout';
import { IncidentsScene } from 'scenes/IncidentsScene';
import { IncidentDetailsScene } from 'scenes/IncidentDetailsScene';

import { MAX_INCIDENTS_COUNT, DEFAULT_PROXIMITY, DEFAULT_INCIDENTS_PER_PAGE } from 'core/constants';
import { IncidentsRequest } from 'core/incidents/actions';

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
    }

    public render() {
        return (
            <Provider store={store}>
                <Layout>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact={true} path="/" component={IncidentsScene} />
                            <Route exact={true} path="/case/:id" component={IncidentDetailsScene} />
                        </Switch>
                    </ConnectedRouter>
                </Layout>
            </Provider>
        );
    }
}
