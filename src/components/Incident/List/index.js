import React from 'react';

import Item from '../Item';

import {
  Wrapper,
} from './styles';

const List = ({ items }) => (
  <Wrapper>
    { items.map((item, i) => <Item key={i} {...item} full={false} />)}
  </Wrapper>
);

export default List;
