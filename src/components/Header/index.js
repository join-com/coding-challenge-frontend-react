import React from 'react';

import {
  Wrapper,
  Title,
} from './styles';

const Header = ({ title }) => (
  <Wrapper>
    <Title>{ title || 'Stolen Bikes' }</Title>
  </Wrapper>
);

export default Header;
