import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'core/reducers';
import { selectRequesting, selectError } from 'core/incidents/reducer';
import { selectIncidents } from 'core/incidents/reducer';
import { Header } from 'components/Header/Header';
import { Incidents } from 'components/Incidents';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { IIncident } from 'types';

interface DispatchProps {
    incidents: IIncident[];
    requesting: boolean;
    error: boolean;
}

const Container = styled.div``;
const EmptyResults = styled.div``;

export class Component extends React.Component<DispatchProps> {
    public render(): React.ReactElement {
        const { incidents, requesting, error } = this.props;

        if (requesting || error) {
            return (
                <Container>
                    <Header />
                    {requesting && <Loading />}
                    {error && <Error />}
                </Container>
            );
        }

        return (
            <Container>
                <Header />
                {incidents.length > 0 ? <Incidents incidents={incidents} /> : <EmptyResults>No results</EmptyResults>}
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    incidents: selectIncidents(state),
    requesting: selectRequesting(state),
    error: selectError(state),
});

export const IncidentsScene = connect(mapStateToProps)(Component);
