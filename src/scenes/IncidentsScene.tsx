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
    selectTotalIncidents,
} from 'core/incidents/reducer';
import { ChangePage, SearchRequest } from 'core/incidents/actions';
import {
    Header,
    Loading,
    Error,
    Pagination,
    EmptyResults,
    SearchPanel,
    TotalIncidentsPanel,
    Incident,
} from 'components';
import { IIncident } from 'types';

interface DispatchProps {
    incidents: IIncident[];
    requesting: boolean;
    error: boolean;
    currentPage: number;
    totalPages: number;
    totalIncidents: number;
    changePage: (from: number, to: number, totalPages: number) => void;
    search: (query?: string, from?: Date | null, to?: Date | null) => void;
}

const Container = styled.div``;

export class Component extends React.Component<DispatchProps> {
    public render(): React.ReactElement {
        const { requesting, error, search } = this.props;

        if (requesting || error) {
            return (
                <Container>
                    <Header />
                    <SearchPanel submit={search} />
                    {requesting && <Loading />}
                    {error && <Error />}
                </Container>
            );
        }

        const { incidents, currentPage, totalPages, totalIncidents, changePage } = this.props;
        const isEmptyList = incidents.length === 0;

        return (
            <Container>
                <Header />
                <SearchPanel submit={search} />
                <TotalIncidentsPanel totalIncidents={totalIncidents} />
                {isEmptyList ? (
                    <EmptyResults />
                ) : (
                    <div>
                        {incidents.map((incident, index) => (
                            <Incident key={index} {...incident} />
                        ))}
                    </div>
                )}
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
    totalIncidents: selectTotalIncidents(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
    changePage: (from: number, to: number, totalPages: number) => {
        dispatch(new ChangePage({ from, to, totalPages }));
    },
    search: (query?: string, from?: Date | null, to?: Date | null) => {
        dispatch(new SearchRequest({ query, from, to }));
    },
});

export const IncidentsScene = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
