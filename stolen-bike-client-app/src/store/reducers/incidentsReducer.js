import {
    GET_INCIDENT,
    GET_INCIDENTS,
    GET_INCIDENT_LOCATION,
    INCIDENT_LOADING,
    INCIDENT_LOCATION_LOADING
} from '../actions/types';

const initialState = {
    incident: null,
    incidents: null,
    location: null,
    loading: false,
    locationLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCIDENT_LOADING:
            return {
                ...state,
                loading: true
            };
        case INCIDENT_LOCATION_LOADING:
            return {
                ...state,
                locationLoading: true
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
        case GET_INCIDENT_LOCATION:
            return {
                ...state,
                location: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
