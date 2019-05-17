import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import { store, history } from './store';
import { App } from './App';

const mount = (Main: React.ComponentType): React.ReactElement => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={Main} />
        </ConnectedRouter>
    </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(mount(App), rootElement);
