import React from 'react';

import Message from '../Message';

const ErrorMessage = ({ error }) => (
  <Message
    color='#e74c3c'
    text={'Ooops, something went wrong...' || error.response.data.error}
  />
);

export default ErrorMessage;