import React from "react";
import styled from '@emotion/styled';
import Header from "../Header/Header";

const Container = styled.div`
    min-width: 768px;
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
    padding-top: 24px;
    padding-bottom: 56px; 
`;

const Page: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
};

export default Page;