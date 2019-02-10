import React from 'react';
import { Link } from 'react-router-dom';

import StyledComponent from './_style';

export default function LayoutHeader() {
    return (
        <StyledComponent className="l-header">
            <h1 className="l-header__title">
                <Link to="/">Police Departamen of Berlin</Link>
            </h1>
        </StyledComponent>
    );
}
