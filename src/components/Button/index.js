import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

const Button = ({ type, to, href, target, children }) => (
  <Wrapper type={type}>
    { href ? 
      <a href={href} target={target || '_blank'}>{ children }</a> :
      <Link to={to}>{ children }</Link>
    }
  </Wrapper>
);

export default Button;
