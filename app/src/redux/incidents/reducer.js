import c from './constants';

const defaultState = {
    incidents: {
        uuid: undefined,
        loading: false,
        data: []
    },
    incident: {
        uuid: undefined,
        loading: false,
        data: {}
    },
    bike: {
        uuid: undefined,
        loading: false,
        data: {}
    }
};

export default function commentsReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case c.INCIDENTS_LOADING:
            return {
                ...state,
                incidents: {
                    ...state.incidents,
                    ...payload
                }
            };

        case c.GET_INCIDENTS: {
            const {
                incidents: data,
                ...rest
            } = payload;

            return {
                ...state,
                incidents: {
                    data,
                    ...rest
                }
            };
        }

        case c.INCIDENT_LOADING:
            return {
                ...state,
                incident: {
                    ...state.incident,
                    ...payload
                }
            };

        case c.GET_INCIDENT: {
            const {
                incident: data,
                ...rest
            } = payload;

            return {
                ...state,
                incident: {
                    data,
                    ...rest
                }
            };
        }

        case c.BIKE_LOADING:
            return {
                ...state,
                bike: {
                    ...state.bike,
                    ...payload
                }
            };

        case c.GET_BIKE: {
            const {
                bikes: data,
                ...rest
            } = payload;

            return {
                ...state,
                bike: {
                    data,
                    ...rest
                }
            };
        }

        default:
            return state;
    }
}
