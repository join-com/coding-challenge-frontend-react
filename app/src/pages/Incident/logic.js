import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import get from 'lodash/get';
import {
    compose,
    setDisplayName,
    lifecycle,
    branch,
    renderComponent,
    defaultProps,
    withHandlers,
    renderNothing
} from 'recompose';

import * as incidentsActions from 'app/redux/incidents/actions';

import Throbber from 'app/components/Throbber';
import Message from 'app/components/Message';

function mapStateToProps(state, { match }) {
    const {
        incidents,
        incident,
        bike
    } = state.incidents;

    const incidentFromList = incidents.data.find(
        item => parseInt(match.params.id, 10) === item.id
    );

    return {
        isFound: !!incidentFromList,
        uuid: incident.uuid,
        incident: incidentFromList || incident.data,
        loading: incident.loading,
        bikeLoading: bike.loading,
        coordinates: {
            lat: get(bike, ['data', 'stolen_record', 'latitude']),
            lng: get(bike, ['data', 'stolen_record', 'longitude'])
        }
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
        ({ incident, uuid }) => isEmpty(incident) && uuid,
        renderComponent(Message)
    ),

    branch(
        ({ incident, uuid }) => isEmpty(incident) && !uuid,
        renderNothing
    )
);
