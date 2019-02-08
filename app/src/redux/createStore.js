
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
    createStore,
    applyMiddleware
} from 'redux';

import getReducers from './getReducers';

const middlewares = [
    thunk
];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        createLogger({
            collapsed: true
        })
    );
}

export default function(rootReducer = getReducers()) {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );

    return {
        store
    };
}
