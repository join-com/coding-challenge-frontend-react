import React from 'react';
import styled from 'styled-components';
import { Text } from '../../ui-kits/Text';
import { Image } from '../../ui-kits/Image';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const HeaderTitle = styled.div``;

function Header() {
  return (
    <HeaderWrapper>
      <Image />
      <HeaderTitle>
        <Text isBlock>Police department</Text>
        <Text isBlock>Stolen bike</Text>
      </HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
