import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function Counter({
    children
}) {
    return (
        <StyledComponent>
            Total: { children }
        </StyledComponent>
    );
}

Counter.propTypes = {
    children: PropTypes.number
};
