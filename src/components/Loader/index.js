import React from 'react';

import {
  Wrapper,
  Spinner,
} from './styles';

const Loader = (props) => (
  <Wrapper>
    <Spinner { ...props } />
  </Wrapper>
);

export default Loader;
