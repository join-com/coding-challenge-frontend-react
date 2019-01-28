import BikeWise from '../../services/bikewise';
import { startLoading, stopLoading } from '../loading/actions';
import { setError, clearError } from '../error/actions';

export const SET_INCIDENTS_LIST = 'SET_INCIDENTS_LIST';
export function setIncidentsList(payload) {
  return {
    type: SET_INCIDENTS_LIST,
    payload,
  };
}

export const CLEAR_INCIDENTS_LIST = 'CLEAR_INCIDENTS_LIST';
export function clearIncidentsList() {
  return {
    type: CLEAR_INCIDENTS_LIST,
  };
}

export const SET_INCIDENTS_DETAILS = 'SET_INCIDENTS_DETAILS';
export function setIncidentsDetails(payload) {
  return {
    type: SET_INCIDENTS_DETAILS,
    payload,
  };
}

export const CLEAR_INCIDENTS_DETAILS = 'CLEAR_INCIDENTS_DETAILS';
export function clearIncidentsDetails() {
  return {
    type: CLEAR_INCIDENTS_DETAILS,
  };
}

export const SET_INCIDENTS_FILTERS = 'SET_INCIDENTS_FILTERS';
export function setIncidentsFilters(payload) {
  return {
    type: SET_INCIDENTS_FILTERS,
    payload,
  };
}

export const CLEAR_INCIDENTS_FILTERS = 'CLEAR_INCIDENTS_FILTERS';
export function clearIncidentsFilters() {
  return {
    type: CLEAR_INCIDENTS_FILTERS,
  };
}

export function getIncidentsList(params) {
	return async dispatch => {
		try {
      dispatch(clearError());
      dispatch(startLoading());
      const { incidents } = await BikeWise.list(params);
      dispatch(setIncidentsList(incidents));
		} catch (err) {
      dispatch(setError(err));
		} finally {
      dispatch(stopLoading());
    }
	};
}

export function getIncidentsDetails(params) {
	return async dispatch => {
		try {
      dispatch(clearError());
      dispatch(startLoading());
			const { incident } = await BikeWise.get(params);
      dispatch(setIncidentsDetails(incident));
		} catch (err) {
      dispatch(setError(err));
		} finally {
      dispatch(stopLoading());
    }
	};
}