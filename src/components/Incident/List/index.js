import React from 'react';

import Item from '../Item';
import Message from '../../Message';

import {
  Wrapper,
} from './styles';

const List = ({ items, pagination }) => (
  <Wrapper>
    { items && items.length
      ? items.map((item, i) => <Item key={i} {...item} full={false} />)
      : <Message align='center' text='No results' />
    }
    { items && items.length && pagination ? pagination : null }
  </Wrapper>
);

export default List;
