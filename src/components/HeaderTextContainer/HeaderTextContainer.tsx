import React from 'react';
import styled from 'styled-components';
import { media } from 'ui/media';

const Container = styled.div``;

const Title = styled.div`
    font-weight: 600;

	${media.mobile`
    	font-size: 18px;
  	`}

	${media.tablet`
    	font-size: 32px;
	`}

    ${media.desktop`
    	font-size: 48px;
	`}
`;

const Description = styled.div`
	${media.mobile`
    	font-size: 14px;
  	`}

	${media.tablet`
    	font-size: 16px;
	`}

    ${media.desktop`
    	font-size: 32px;
	`}
`;

export const HeaderTextContainer = () => (
    <Container>
        <Title>Police Department of Berlin</Title>
        <Description>Stolen bykes</Description>
    </Container>
);
