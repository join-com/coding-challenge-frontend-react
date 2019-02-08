import React from 'react';
import PropTypes from 'prop-types';

import LayoutHeader from 'app/pages/LayoutHeader';
import LayoutContent from 'app/pages/LayoutContent';

import StyleResetComponent from './_style-reset';
import StyledComponent from './_style';

export default function Layout({
    children
}) {
    return (
        <StyledComponent>
            <LayoutHeader />
            <LayoutContent>{ children }</LayoutContent>
            <StyleResetComponent />
        </StyledComponent>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};
