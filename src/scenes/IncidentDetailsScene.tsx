import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'core/reducers';
import { Header } from 'components/Header/Header';
import { IIncident } from 'types';
import { selectIncidents } from 'core/incidents/reducer';

interface DispatchProps {
    incidents: IIncident[];
}

const Container = styled.div``;

export class Component extends React.Component<DispatchProps> {
    public render(): React.ReactElement {
        return (
            <Container>
                <Header />
                <div>IncidentDetailsScene {R.path(['match', 'params', 'id'], this.props)}</div>
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    incidents: selectIncidents(state),
});

export const IncidentDetailsScene = connect(mapStateToProps)(Component);
