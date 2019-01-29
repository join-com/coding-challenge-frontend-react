import React from 'react';

import {
  Wrapper,
  Text,
} from './styles';

const Message = ({ align, text }) => (
  <Wrapper align={align}>
    <Text>{ text }</Text>
  </Wrapper>
);

export default Message;
