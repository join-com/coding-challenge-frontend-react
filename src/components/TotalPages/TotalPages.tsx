import React from 'react';
import styled from 'styled-components';

export interface IProps {
    totalPages: number;
}

const Container = styled.div`
    min-height: 40px;
    line-height: 40px;
    text-align: right;
`;

export const TotalPages: React.FC<IProps> = ({ totalPages }: IProps) => <Container>{`Total: ${totalPages}`}</Container>;
