import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IncidentTextPanel, IncidentImage } from 'components';
import { media } from 'ui/media';

interface IProps {
    id: number;
    title?: string;
    description?: string | null;
    address?: string;
    occurredAt?: number;
    imageUrlThumb?: string | null;
}

const Container = styled(Link)`
    display: flex;
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    outline: none;

    ${media.mobile`
		flex-direction: column;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  	`}

    ${media.tabletNDesktop`
    	min-height: 100px;
	`}

    &:hover {
        background: rgba(0, 0, 0, 0.03);
    }
`;

export const Incident: React.FC<IProps> = (props: IProps) => (
    <Container to={`/case/${props.id}`}>
        <IncidentImage imageUrl={props.imageUrlThumb} />
        <IncidentTextPanel
            title={props.title}
            description={props.description}
            address={props.address}
            occurredAt={props.occurredAt}
        />
    </Container>
);
