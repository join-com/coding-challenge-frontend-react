import { COUNT_ALL_INCIDENTS_REQUEST, COUNT_ALL_INCIDENTS_REQUEST_SUCCESS, COUNT_ALL_INCIDENTS_REQUEST_FAILURE } from "../constants/count_all_incidents.constants";

export const countAllIncidentsRequest = page => {
  return {
    type: COUNT_ALL_INCIDENTS_REQUEST, page
  }
};

export const countAllIncidentsRequestSuccess = payload => {
  return {
    type: COUNT_ALL_INCIDENTS_REQUEST_SUCCESS, payload
  }
};

export const countAllIncidentsRequestFailure = error => {
  return {
    type: COUNT_ALL_INCIDENTS_REQUEST_FAILURE, error
  }
};