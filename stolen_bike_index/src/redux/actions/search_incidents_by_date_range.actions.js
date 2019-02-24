import { SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST, SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_SUCCESS, SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_FAILURE } from "../constants/search_incidents_by_date_range.constants";

export const searchIncidentsByDateRangeRequest = (occurred_after, occurred_before) => {
  return {
    type: SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST, occurred_after, occurred_before
  }
};

export const searchIncidentsByDateRangeRequestSuccess = payload => {
  return {
    type: SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_SUCCESS, payload
  }
};

export const searchIncidentsByDateRangeRequestFailure = error => {
  return {
    type: SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_FAILURE, error
  }
};