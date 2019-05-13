import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({content, name}) => (
  <Helmet>
    <meta name={name} content={content} />
  </Helmet>
);

export default Meta;
