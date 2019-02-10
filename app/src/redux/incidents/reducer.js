import c from './constants';

const defaultState = {
    uuid: undefined,
    incidents: [],
    incident: {},
    loading: false,
    bike: {}
};

export default function commentsReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case c.LOADING:
        case c.GET_INCIDENTS:
        case c.GET_INCIDENT:
            return {
                ...state,
                ...payload
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
