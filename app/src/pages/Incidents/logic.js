import { connect } from 'react-redux';
import chunk from 'lodash/chunk';
import {
    compose,
    setDisplayName,
    lifecycle,
    withProps,
    withState,
    defaultProps,
    withPropsOnChange,
    withHandlers
} from 'recompose';

import * as incidentsActions from 'app/redux/incidents/actions';

function mapStateToProps(state) {
    const { incidents } = state.incidents;

    return {
        uuid: incidents.uuid,
        status: incidents.status,
        incidents: incidents.data,
        loading: incidents.loading
    };
}

export default compose(
    connect(mapStateToProps, incidentsActions),

    setDisplayName('incidents-page-logic'),

    defaultProps({
        incidentsPerPage: 10,
    }),

    withState(
        'currentPage',
        'setCurrentPage',
        1
    ),

    withProps(props => {
        const {
            status,
            uuid,
            loading,
            incidents,
            incidentsPerPage
        } = props;
        const isSuccess = status === 'success';
        const isMessage = uuid && !loading && !incidents.length;
        const message = isSuccess ? 'No results' : 'Ooops, something went wrong';

        return {
            isSuccess,
            isMessage,
            totalPages: Math.ceil(incidents.length / incidentsPerPage),
            message: isMessage ? message : undefined,
            color: isSuccess ? 'primary' : 'secondary'
        };
    }),

    withPropsOnChange(
        ['incidents'],

        props => {
            const {
                incidentsPerPage,
                incidents
            } = props;

            return {
                incidentsByChunks: chunk(incidents, incidentsPerPage)
            };
        }
    ),

    withHandlers({
        handleFilter: ({ getIncidents }) => formData => {
            const actualizedDate = {...formData};

            if (actualizedDate.occurred_after) {
                actualizedDate.occurred_after = (new Date(actualizedDate.occurred_after)).valueOf() / 1000;
            }

            if (actualizedDate.occurred_before) {
                actualizedDate.occurred_before = (new Date(actualizedDate.occurred_before)).valueOf() / 1000;
            }

            getIncidents(actualizedDate);
        }
    }),

    lifecycle({
        componentDidMount() {
            const {
                incidents,
                getIncidents
            } = this.props;

            //Cache
            !incidents.length && getIncidents();
        }
    })
);
