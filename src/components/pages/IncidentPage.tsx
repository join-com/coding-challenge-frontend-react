import React, { Fragment } from 'react';
import Page from '../Page/Page';
import { NavLink } from 'react-router-dom';

import { Icon, Typography } from 'antd';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Incident } from '../../types';
import getFormattedDate from '../../utils/getFormattedDate';
import styled from '@emotion/styled';

const NavBlock = styled.div`
  margin-bottom: 12px;
`;

const IconWrapper = styled.span`
  margin-left: 6px;
`;

interface IncidentPageProps extends Incident {
  match: {
    params: {
      id: string;
    };
  };
}

const IncidentPage: React.FC<IncidentPageProps> = ({
  title,
  description,
  incidentDate,
  address
}) => (
  <Page>
    <NavBlock>
      <NavLink to={'/'}>
        Back
        <IconWrapper>
          <Icon type="rollback" />
        </IconWrapper>
      </NavLink>
    </NavBlock>

    <Typography.Title level={3}>{title || 'Loading...'}</Typography.Title>

    <p>
      <b>Date stolen:</b> {getFormattedDate(incidentDate)}
      <br />
      <b>Location:</b> {address}
    </p>

    {!!description && (
      <Fragment>
        <Typography.Title level={3}>Description of incident</Typography.Title>
        <p>{description}</p>
      </Fragment>
    )}
  </Page>
);

const mapStateToProps = (
  { incidents = [] }: StoreState,
  ownProps: IncidentPageProps
) => ({
  ...incidents[+ownProps.match.params.id]
});

export default connect(mapStateToProps)(IncidentPage);
