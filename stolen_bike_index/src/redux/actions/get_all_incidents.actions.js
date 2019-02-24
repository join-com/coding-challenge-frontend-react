import { GET_ALL_INCIDENTS_REQUEST, GET_ALL_INCIDENTS_REQUEST_SUCCESS, GET_ALL_INCIDENTS_REQUEST_FAILURE } from "../constants/get_all_incidents.constants";

export const getAllIncidentsRequest = page => {
  return {
    type: GET_ALL_INCIDENTS_REQUEST, page
  }
};

export const getAllIncidentsRequestSuccess = payload => {
  return {
    type: GET_ALL_INCIDENTS_REQUEST_SUCCESS, payload
  }
};

export const getAllIncidentsRequestFailure = error => {
  return {
    type: GET_ALL_INCIDENTS_REQUEST_FAILURE, error
  }
};