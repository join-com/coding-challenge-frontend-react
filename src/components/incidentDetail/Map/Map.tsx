import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

import { IGeoCoordinates } from 'types';
import { media } from 'ui/utils';

interface IProps {
    coordinates: IGeoCoordinates;
    debug?: boolean;
}

const Container = styled.div`
    ${media.mobile`
		> div {
			padding-top: 100% !important;
		}
  	`}

    ${media.tabletNDesktop`
		> div {
			padding-top: 50% !important;
		}
	`}
`;

const Marker = styled.div`
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    width: 20px;
    height: 20px;
`;

export const Map: React.FC<IProps> = ({ coordinates, debug }: IProps) => {
    // @ts-ignore
    const marker = <Marker {...coordinates} text="" />;

    const key = debug ? '' : (process && process.env && process.env.REACT_APP_MAP_KEY) || '';

    return (
        <Container>
            <GoogleMap defaultZoom={15} bootstrapURLKeys={{ key }} center={coordinates}>
                {marker}
            </GoogleMap>
        </Container>
    );
};
