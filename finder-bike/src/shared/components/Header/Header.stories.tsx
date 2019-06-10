import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from './Header';
import { Layout } from '../Layout';

storiesOf('Components', module).add('Header', () => (
  <Layout>
    <Header />
  </Layout>
));
