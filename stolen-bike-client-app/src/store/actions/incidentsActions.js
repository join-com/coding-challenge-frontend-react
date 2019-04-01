import axios from "axios";

import {
  GET_INCIDENT,
  GET_INCIDENTS,
  GET_INCIDENT_LOCATION,
  INCIDENT_LOADING,
  INCIDENT_LOCATION_LOADING
} from "./types";

// Get incident by id
export const getIncidentById = incidentId => dispatch => {
  dispatch(setIncidentLoading());

  axios
    .get(`/v2/incidents/${incidentId}`)
    .then(res =>
      dispatch({
        type: GET_INCIDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_INCIDENT,
        payload: null
      })
    );
};

// Get all incidents
export const getIncidents = (start = '', end = '') => dispatch => {
  dispatch(setIncidentLoading());
  axios
    .get(`/v2/incidents?incident_type=theft&proximity=Berlin&proximity_square=100&occurred_before=${start}&occurred_after=${end}`)
    .then(res => {
      dispatch({
        type: GET_INCIDENTS,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_INCIDENTS,
        payload: null
      })
    );
};

// Get incident location data
export const getLocation = (query) => dispatch => {
  dispatch(setIncidentLocationLoading());
  axios
    .get(`/v2/locations?query=${query}`)
    .then(res => {
      dispatch({
        type: GET_INCIDENT_LOCATION,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_INCIDENTS,
        payload: null
      })
    );
};

// incident loading
export const setIncidentLoading = () => {
  return {
    type: INCIDENT_LOADING
  };
};
// incident location loading
export const setIncidentLocationLoading = () => {
  return {
    type: INCIDENT_LOCATION_LOADING
  };
};
