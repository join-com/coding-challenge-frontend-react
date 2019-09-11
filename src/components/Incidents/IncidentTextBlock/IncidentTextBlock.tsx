import React from 'react';
import styled from 'styled-components';

import { convertFromUnixTimestamp } from 'core/utils/unixTimestamp';
import { media } from 'ui/utils';

interface Props {
    title?: string;
    description?: string | null;
    occurredAt?: number;
    address?: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${media.tabletNDesktop`
    	padding: 0 15px;
	`}
`;

const Title = styled.div`
    font-weight: 600;

    ${media.mobile`
		padding-bottom: 5px;
  	`}

    ${media.tabletNDesktop`
		padding-bottom: 10px;
	`}
`;

const Description = styled.div`
    ${media.mobile`
		padding-bottom: 5px;
  	`}

    ${media.tabletNDesktop`
		padding-bottom: 10px;
	`}
`;

const Details = styled.div``;

export const IncidentTextBlock = (props: Props) => {
    const details = getDetails(props.occurredAt, props.address);

    return (
        <Container>
            {props.title && <Title>{props.title}</Title>}
            {props.description && <Description>{props.description}</Description>}
            {details && <Details>{details}</Details>}
        </Container>
    );
};

function getDetails(occurredAt?: number, address?: string): string {
    if (occurredAt && address) {
        return `${dateToString(occurredAt)} - ${address}`;
    }

    if (occurredAt) {
        return dateToString(occurredAt);
    }

    if (address) {
        return address;
    }

    return '';
}

function dateToString(date: number): string {
    return new Date(convertFromUnixTimestamp(date)).toDateString();
}
