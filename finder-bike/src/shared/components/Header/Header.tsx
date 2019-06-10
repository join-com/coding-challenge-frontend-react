import React from 'react';
import styled from 'styled-components';
import { Text } from '../../ui-kits/Text';
import { Image } from '../../ui-kits/Image';
import logo from '../../../assets/images/logo.png';

const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 100px auto;
  grid-column-gap: 1rem;
`;

const HeaderTitle = styled.div``;

function Header() {
  return (
    <HeaderWrapper>
      <Image src={logo} />
      <HeaderTitle>
        <Text isBlock size={20}>
          BERLIN POLICE DEPARTMENT
        </Text>
        <Text isBlock size={20}>
          Stolen bike
        </Text>
      </HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
