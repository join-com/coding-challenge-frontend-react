import React from 'react';
import styled from 'styled-components';

import logo from 'components/assets/logo.png';
import { HeaderTextContainer } from 'components/HeaderTextContainer';
import { media } from 'ui/media';

const Container = styled.div`
    display: flex;
    align-items: center;

	${media.mobile`
    	height: 60px;
  	`}

	${media.tablet`
    	height: 100px;
	`}

    ${media.desktop`
    	height: 140px;
	`}
`;

const Logo = styled.img`
    width: 64px;
    height: 64px;

    ${media.mobile`
		padding-right: 16px;
  	`}

    ${media.tablet`
		padding-right: 32px;
	`}

    ${media.desktop`
		padding-right: 32px;
	`}
`;

export const Header = () => (
    <Container>
        <Logo src={logo} />
        <HeaderTextContainer />
    </Container>
);
