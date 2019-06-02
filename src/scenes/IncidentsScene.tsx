import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'core/reducers';
import {
    selectRequesting,
    selectError,
    selectTotalPage,
    selectCurrentPage,
    selectIncidents,
} from 'core/incidents/reducer';
import { ChangePage } from 'core/incidents/actions';
import { Header, Incidents, Loading, Error, Pagination, EmptyResults } from 'components';
import { IIncident } from 'types';

interface DispatchProps {
    incidents: IIncident[];
    requesting: boolean;
    error: boolean;
    currentPage: number;
    totalPages: number;
    changePage: (from: number, to: number, totalPages: number) => void;
}

const Container = styled.div``;

export class Component extends React.Component<DispatchProps> {
    public render(): React.ReactElement {
        const { requesting, error } = this.props;

        if (requesting || error) {
            return (
                <Container>
                    <Header />
                    {requesting && <Loading />}
                    {error && <Error />}
                </Container>
            );
        }

        const { incidents, currentPage, totalPages, changePage } = this.props;
        const isEmptyList = incidents.length === 0;

        return (
            <Container>
                <Header />
                {isEmptyList ? <EmptyResults /> : <Incidents incidents={incidents} />}
                <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    incidents: selectIncidents(state),
    requesting: selectRequesting(state),
    error: selectError(state),
    currentPage: selectCurrentPage(state),
    totalPages: selectTotalPage(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
    changePage: (from: number, to: number, totalPages: number) => {
        dispatch(new ChangePage({ from, to, totalPages }));
    },
});

export const IncidentsScene = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
