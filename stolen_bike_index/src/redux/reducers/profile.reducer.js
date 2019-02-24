import { GET_INCIDENT_BY_ID_REQUEST, GET_INCIDENT_BY_ID_REQUEST_SUCCESS, GET_INCIDENT_BY_ID_REQUEST_FAILURE } from '../constants/get_incident_by_id.constants';

const initialState = {
  loading: false,
  profile: null,
  error: null
};

export const Profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCIDENT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_INCIDENT_BY_ID_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case GET_INCIDENT_BY_ID_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};