import { GET_INCIDENT_BY_ID_REQUEST, GET_INCIDENT_BY_ID_REQUEST_SUCCESS, GET_INCIDENT_BY_ID_REQUEST_FAILURE } from "../constants/get_incident_by_id.constants";

export const getIncidentByIdRequest = id => {
  return {
    type: GET_INCIDENT_BY_ID_REQUEST, id
  }
};

export const getIncidentByIdRequestSuccess = payload => {
  return {
    type: GET_INCIDENT_BY_ID_REQUEST_SUCCESS, payload
  }
};

export const getIncidentByIdRequestFailure = error => {
  return {
    type: GET_INCIDENT_BY_ID_REQUEST_FAILURE, error
  }
};