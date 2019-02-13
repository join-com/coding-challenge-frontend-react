import React from 'react';

import { Col, Row } from 'antd';
import { Cases } from './sections/cases';
import { Header } from './sections/common/header';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

const client = new ApolloClient({
  uri: '/.netlify/functions/api',
});

export const App: React.FC<{}> = () => (
  <ApolloProvider client={client}>
    <Row>
      <Col
        xs={{ offset: 1, span: 22 }}
        md={{ offset: 2, span: 20 }}
        lg={{ offset: 4, span: 16 }}
        xl={{ offset: 6, span: 12 }}
      >
        <Header />
        <Cases />
      </Col>
    </Row>
  </ApolloProvider>
);
