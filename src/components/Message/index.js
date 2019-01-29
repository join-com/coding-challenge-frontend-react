import React from 'react';

import {
  Wrapper,
  Text,
} from './styles';

const Message = ({ align, text, color }) => (
  <Wrapper align={align}>
    <Text color={color}>{ text }</Text>
  </Wrapper>
);

export default Message;
