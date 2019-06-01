import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'core/reducers';
import { selectRequesting, selectError, selectTotalPage, selectCurrentPage } from 'core/incidents/reducer';
import { selectIncidents } from 'core/incidents/reducer';
import { Header } from 'components/Header/Header';
import { Incidents } from 'components/Incidents';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { IIncident } from 'types';
import { Pagination } from 'components/Pagination';
import { ChangePage } from 'core/incidents/actions';

interface DispatchProps {
    incidents: IIncident[];
    requesting: boolean;
    error: boolean;
    currentPage: number;
    totalPages: number;
    changePage: (from: number, to: number, totalPages: number) => void;
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

        const { currentPage, totalPages, changePage } = this.props;

        return (
            <Container>
                <Header />
                {incidents.length > 0 ? <Incidents incidents={incidents} /> : <EmptyResults>No results</EmptyResults>}
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
