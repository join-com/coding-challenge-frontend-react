import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import {
    compose,
    setDisplayName,
    lifecycle,
    branch,
    renderComponent,
    defaultProps,
    withHandlers
} from 'recompose';

import * as incidentsActions from 'app/redux/incidents/actions';

import Throbber from 'app/components/Throbber';
import Message from 'app/components/Message';

function mapStateToProps(state, { match }) {
    const incident = state.incidents.incidents.find(
        item => parseInt(match.params.id, 10) === item.id
    );

    return {
        isFound: !!incident,
        uuid: state.incidents.uuid,
        incident: incident || state.incidents.incident,
        loading: state.incidents.loading
    };
}

export default compose(
    connect(mapStateToProps, incidentsActions),

    setDisplayName('incident-page-logic'),

    defaultProps({
        message: 'No such incident'
    }),

    withHandlers({
        getBikeByIncident: ({ getBike }) => incident => {
            if (isEmpty(incident)) {
                return;
            }

            const { source: { api_url: url } } = incident;

            getBike({ url });
        }
    }),

    lifecycle({
        componentDidMount() {
            const {
                isFound,
                getIncident,
                getBikeByIncident,
                incident,
                match: { params }
            } = this.props;

            !isFound
                ? getIncident({ id: params.id })
                : getBikeByIncident(incident);
        },

        componentDidUpdate(prevProps) {
            const {
                incident,
                getBikeByIncident
            } = this.props;

            if (!isEmpty(incident) && isEmpty(prevProps.incident)) {
                getBikeByIncident(incident);
            }
        }
    }),

    branch(
        ({ loading }) => loading,
        renderComponent(Throbber)
    ),

    branch(
        ({ incident }) => isEmpty(incident),
        renderComponent(Message)
    )
);
