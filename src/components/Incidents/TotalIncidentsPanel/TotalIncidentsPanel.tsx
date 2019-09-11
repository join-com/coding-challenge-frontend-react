import React from 'react';
import styled from 'styled-components';

export interface IProps {
    totalIncidents: number;
}

const Container = styled.div`
    min-height: 40px;
    line-height: 40px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TotalIncidentsPanel: React.FC<IProps> = ({ totalIncidents }: IProps) => (
    <Container>{`Total: ${totalIncidents}`}</Container>
);
