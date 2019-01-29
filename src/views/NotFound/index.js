import React from 'react';
import { Link } from 'react-router-dom';

import Message from '../../components/Message';

const NotFound = () => (
  <>
    <Message
      text='Page not Found'
    />
    <p style={{ textAlign: 'center' }}>
      <Link to='/'>Back to Home</Link>
    </p>
  </>
);

export default NotFound;