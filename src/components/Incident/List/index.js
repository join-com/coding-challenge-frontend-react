import React from 'react';

import Item from '../Item';

import {
  Wrapper,
} from './styles';

const List = props => (
  <Wrapper>
    <Item full={false} />
    <Item full={false} />
    <Item full={false} />
    <Item full={false} />
  </Wrapper>
);

export default List;
