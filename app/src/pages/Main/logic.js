import { connect } from 'react-redux';
import chunk from 'lodash/chunk';
import {
    compose,
    setDisplayName,
    lifecycle,
    branch,
    renderComponent,
    withProps,
    withState,
    defaultProps,
    withPropsOnChange
} from 'recompose';

import * as reportActions from 'app/redux/reports/actions';

import Throbber from 'app/components/Throbber';
import Message from 'app/components/Message';

function mapStateToProps(state) {
    return {
        ...state.reports
    };
}

export default compose(
    connect(mapStateToProps, reportActions),

    setDisplayName('main-page-logic'),

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

    lifecycle({
        componentDidMount() {
            this.props.getIncidents();
        }
    }),

    branch(
        ({ loading }) => loading,
        renderComponent(Throbber)
    ),

    branch(
        ({ isMessage }) => isMessage,
        renderComponent(Message)
    )
);
