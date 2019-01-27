import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { Wrapper } from './styles';

const Layout = ({ children }) => (
  <>
  <Link to='/'>
    <Header />
  </Link>
  <Wrapper>
    { children }
  </Wrapper>
  </>
);

export default Layout;
