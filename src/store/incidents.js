import { createSelector } from "reselect";

import { createPrefix, createAction } from "../helpers/actionHelpers";
import { loadIncidents, loadIncidentById } from "../api";
import { changeUi } from "./ui";
import { createCollectionFromArray } from "../helpers/normalizeData";

const prefix = createPrefix("INCIDENTS");

export const FETCH_INCIDENTS_SUCCESS = prefix("FETCH_INCIDENTS_SUCCESS");
export const FETCH_INCIDENT_SUCCESS = prefix("FETCH_INCIDENT_SUCCESS");

export const fetchIncidentsSuccess = createAction(FETCH_INCIDENTS_SUCCESS);
export const fetchIncidentSuccess = createAction(FETCH_INCIDENT_SUCCESS);
export const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INCIDENTS_SUCCESS:
      return {
        ...state,
        ...createCollectionFromArray(payload)
      };
    case FETCH_INCIDENT_SUCCESS:
      return {
        ...state,
        [payload.id]: payload
      };
    default:
      return state;
  }
};

const onError = (dispatch, message) => {
  dispatch(changeUi({ name: "isLoading", value: false }));
  dispatch(changeUi({ name: "error", value: message }));
};
const hideLoaderAndClearError = dispatch => {
  dispatch(changeUi({ name: "isLoading", value: false }));
  dispatch(changeUi({ name: "error", value: null }));
};

export const fetchIncidents = () => {
  return dispatch => {
    dispatch(changeUi({ name: "isLoading", value: true }));
    loadIncidents()
      .then(({ incidents }) => {
        hideLoaderAndClearError(dispatch);
        dispatch(fetchIncidentsSuccess(incidents));
      })
      .catch(error => onError(dispatch, error.message));
  };
};

export const fetchIncidentById = id => {
  return dispatch => {
    dispatch(changeUi({ name: "isLoading", value: true }));
    loadIncidentById(id)
      .then(({ incident }) => {
        hideLoaderAndClearError(dispatch);
        dispatch(fetchIncidentSuccess(incident));
      })
      .catch(error => onError(dispatch, error.message));
  };
};

const getIncidents = state => state.incidents;

export const getIncidentsSelector = createSelector(getIncidents, incidents =>
  Object.keys(incidents).map(key => incidents[key])
);

export const getTotalIncidentsSelector = createSelector(getIncidentsSelector, incidents => incidents.length);

export default reducer;
