import { connect } from 'react-redux';
import {
    compose,
    setDisplayName,
    lifecycle,
    branch,
    renderComponent,
    withProps,
    withState
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
            incidents
        } = props;
        const isSuccess = status === 'success';
        const isMessage = uuid && !loading && !incidents.length;
        const message = isSuccess ? 'No results' : 'Ooops, something went wrong';

        return {
            isSuccess,
            isMessage,
            message: isMessage ? message : undefined,
            color: isSuccess ? 'primary' : 'secondary'
        };
    }),

    lifecycle({
        componentDidMount() {
            const {
                currentPage,
                getIncidents
            } = this.props;

            getIncidents();
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
