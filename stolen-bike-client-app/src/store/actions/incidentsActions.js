import axios from "axios";

import {
  GET_INCIDENT,
  GET_INCIDENTS,
  INCIDENT_LOADING
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

// incident loading
export const setIncidentLoading = () => {
  return {
    type: INCIDENT_LOADING
  };
};
