import React from 'react';

import {
  Wrapper,
  Input,
  Label,
} from './styles';

const Text = ({ label, ...props }) => (
  <Wrapper>
    { props.label && <Label>{props.label}</Label> }
    <Input { ...props } />
  </Wrapper>
);

export default Text;
