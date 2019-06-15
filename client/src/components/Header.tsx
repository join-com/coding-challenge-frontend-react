import React, { FC } from 'react';
import Styled from 'styled-components';

interface HeaderProps {
  className? :string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => 
<header className={className}>
  <h1>Stolen Bike index</h1>
</header>

export default Styled(Header)`
  display: flex;
  justify-content: center;
`