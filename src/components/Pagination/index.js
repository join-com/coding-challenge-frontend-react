import React from 'react';

import {
  Wrapper,
  Button,
  Page,
} from './styles';

const Pagination = ({ page, onClick }) => (
  <Wrapper>
    { page > 0 && <Button onClick={() => onClick({ direction: -1 })}>Previous Page</Button> }
    <Page>Page: { page + 1 }</Page>
    <Button onClick={() => onClick({ direction: 1 })}>Next Page</Button>
  </Wrapper>
);

export default Pagination;
