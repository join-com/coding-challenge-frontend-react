import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function LayoutContent({
    children
}) {
    return (
        <StyledComponent>
            { children }
        </StyledComponent>
    );
}

LayoutContent.propTypes = {
    children: PropTypes.node
};
