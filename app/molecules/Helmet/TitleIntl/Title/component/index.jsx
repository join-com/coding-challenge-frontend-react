import React from 'react';
import { Helmet } from 'react-helmet';

const Title = ({content}) => (
  <Helmet>
    <title>{ content }</title>
  </Helmet>
);

export default Title;
