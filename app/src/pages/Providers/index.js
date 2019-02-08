import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

export default function Providers({
    store,
    children
}) {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
}

Providers.propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.node
};
