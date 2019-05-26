import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';

import { Store } from './src/store';

import App from './src/containers/App/App';

import './css/base.scss';
import './css/core.scss';


try {
    ReactDOM.render((
        <Provider store={ Store() }>
            <BrowserRouter>
                <LastLocationProvider>
                    <Route path="/" component={App}></Route>
                </LastLocationProvider>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('app-root'));
} catch (exc) {
    throw exc;
}
