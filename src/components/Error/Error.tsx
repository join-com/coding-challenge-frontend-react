import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: red;
`;

export const Error: React.FC = () => <Container>Ooops, something went wrong</Container>;
