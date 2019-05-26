import React from 'react';
import styled from 'styled-components';

import { Incident } from 'components/Incident';
import { IIncident } from 'types';

interface Props {
    incidents: IIncident[];
}

const Container = styled.div``;

export const Incidents = (props: Props) => (
    <Container>
        {props.incidents.map((incident, index) => (
            <Incident key={index} {...incident} />
        ))}
    </Container>
);
