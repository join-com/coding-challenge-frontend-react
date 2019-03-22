import {
    GET_INCIDENT,
    GET_INCIDENTS,
    INCIDENT_LOADING
} from '../actions/types';

const initialState = {
    incident: null,
    incidents: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCIDENT_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_INCIDENT:
            return {
                ...state,
                incident: action.payload,
                loading: false
            };
        case GET_INCIDENTS:
            return {
                ...state,
                incidents: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
