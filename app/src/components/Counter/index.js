import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function Counter({
    children
}) {
    if (typeof children !== 'number') {
        return;
    }

    return (
        <StyledComponent className="c-counter">
            Total: { children }
        </StyledComponent>
    );
}

Counter.propTypes = {
    children: PropTypes.number
};
