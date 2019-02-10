import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Layout from 'app/pages/Layout';
import IncidentsPage from 'app/pages/Incidents';
import IncidentPage from 'app/pages/Incident';
import NotFoundPage from 'app/pages/NotFound';

export default function RouterWrapper() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={IncidentsPage}
                    />
                    <Route
                        exact
                        path="/incidents/:id"
                        component={IncidentPage}
                    />
                    <Route
                        exact
                        path="*"
                        component={NotFoundPage}
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
