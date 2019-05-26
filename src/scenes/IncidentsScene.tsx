import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'core/reducers';
import { Header } from 'components/Header/Header';
import { Incidents } from 'components/Incidents';
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
                <Incidents incidents={this.props.incidents} />
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    incidents: selectIncidents(state),
});

export const IncidentsScene = connect(mapStateToProps)(Component);
