import React from 'react';
import styled from '@emotion/styled';
import logo from './logo.svg';

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 32px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 38px;
    line-height: 1.23;
`;

const SubTitle = styled.h2`
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.35;
`;

const Header: React.FC = () => (
      <Wrapper>
        <Logo src={logo} alt="logo" />

        <div>
            <Title>Police Departament of Berlin</Title>
            <SubTitle>Stolen Bikes</SubTitle>
        </div>
      </Wrapper>
  );

export default Header;
