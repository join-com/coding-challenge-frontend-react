import React from 'react';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from 'antd';

const UnknownPage: React.FC = () => {
  return (
    <ErrorPage
      textBlock={<Typography.Title>Page not found</Typography.Title>}
      actionsBlock={
        <NavLink to={'/'}>
          <Button type="primary">Go to main page</Button>
        </NavLink>
      }
    />
  );
};

export default UnknownPage;
