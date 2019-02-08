import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Layout from 'app/pages/Layout';
import MainPage from 'app/pages/Main';

export default function RouterWrapper() {
    return (
        <BrowserRouter>
            <Layout>
                <Route
                    exact
                    path="/"
                    component={MainPage}
                />
            </Layout>
        </BrowserRouter>
    );
}
