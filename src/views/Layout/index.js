import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Filter from '../../containers/Filter';
import { Wrapper } from './styles';

const Layout = ({ children }) => (
  <>
  <Link to='/'>
    <Header />
  </Link>
  <Filter />
  <Wrapper>
    { children }
  </Wrapper>
  </>
);

export default Layout;
