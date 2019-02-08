import c from './constants';

const defaultState = {
    uuid: undefined,
    incidents: [],
    loading: false
};

export default function commentsReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case c.LOADING:
        case c.GET_INCIDENTS:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
}
