import React from 'react';
import Page from '../Page/Page';
import { NavLink } from 'react-router-dom';

import { Button, Icon } from 'antd';

const IncidentPage: React.FC = () => (
  <Page>
    <div>
      <NavLink to={'/'}>
        <Button type="link">
          Back
          <Icon type="rollback" />
        </Button>
      </NavLink>
    </div>
    lorem
  </Page>
);

export default IncidentPage;
