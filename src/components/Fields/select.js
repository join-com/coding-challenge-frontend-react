import React from 'react';

import {
  Wrapper,
  Select,
  Label,
} from './styles';

const SelectComponent = ({ label, options, ...props }) => (
  <Wrapper>
    { label && <Label>{label}</Label> }
    <Select { ...props }>
      { options.map((o, i) => <option value={o} key={i}>{o}</option>)}
    </Select>
  </Wrapper>
);

export default SelectComponent;
