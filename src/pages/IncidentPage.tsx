import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

import { connect } from 'react-redux';
import getFormattedDate from '../utils/getFormattedDate';
import { Dispatch, StoreState } from '../store';

import { Incident } from '../types';

import Page from '../components/Page/Page';
import { NavLink } from 'react-router-dom';
import { Icon, Typography } from 'antd';
import Map from '../components/Map/Map';

import { fetchIncidentPosition } from '../actions/fetchIncidentPosition';
import { fetchIncidentAndPosition } from '../actions/fetchIncidentAndPosition';
import getIncident from '../store/selectors';

const NavBlock = styled.div`
  margin-bottom: 12px;
`;

const IconWrapper = styled.span`
  margin-left: 6px;
`;

interface IncidentPageProps extends Incident {
  dispatch: Dispatch;
  match: {
    params: {
      id: string;
    };
  };
}

class IncidentPage extends Component<IncidentPageProps> {
  componentDidMount() {
    const { id, incidentDate, dispatch } = this.props;

    if (incidentDate) {
      dispatch(fetchIncidentPosition({ id }));
    } else {
      dispatch(fetchIncidentAndPosition({ id }));
    }
  }

  render() {
    const {
      title,
      description,
      incidentDate,
      address,
      coordinates,
      updateDate
    } = this.props;

    return (
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
          <br />
          <b>Report was updated:</b> {getFormattedDate(updateDate)}
        </p>

        {!!description && (
          <Fragment>
            <Typography.Title level={3}>
              Description of incident
            </Typography.Title>
            <p>{description}</p>
          </Fragment>
        )}

        {coordinates && <Map center={coordinates} />}
      </Page>
    );
  }
}

const mapStateToProps = (
  storeState: StoreState,
  ownProps: IncidentPageProps
) => {
  const id = +ownProps.match.params.id;

  return {
    id,
    ...getIncident(storeState, id)
  };
};

export default connect(mapStateToProps)(IncidentPage);
