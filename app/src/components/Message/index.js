import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function Message({
    message,
    color
}) {
    return (
        <StyledComponent color={color}>
            { message }
        </StyledComponent>
    );
}

Message.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string
};
