import React from 'react';
import styled from 'styled-components';
import { media } from 'ui/media';

const Container = styled.div`
    margin: 0 auto;

    ${media.mobile`
		padding: 15px;
  	`}

	${media.tablet`
		padding: 15px;
	`}

    ${media.desktop`
		max-width: 940px;
	`}
`;

export const Layout: React.FC = props => <Container>{props.children}</Container>;
