import { Dispatch } from 'redux';
import queryString from 'query-string';
import { Incident } from './types';
import { BIKEWISE_API } from './constants/main';

export enum ActionType {
  RECEIVE_INCIDENTS = 'RECEIVE_INCIDENTS'
}

export interface Action {
  type: ActionType;
  payload: any;
}

function receiveIncidents(incidents: Array<Incident>): Action {
  return {
    type: ActionType.RECEIVE_INCIDENTS,
    payload: {
      incidents
    }
  };
}

export function fetchIncidents() {
  const query = {
    incident_type: 'theft',
    proximity: 'Berlin'
  };

  return (dispatch: Dispatch) => {
    return fetch(`${BIKEWISE_API}/incidents/?${queryString.stringify(query)}`)
      .then(response => response.json())
      .then(payload => dispatch(receiveIncidents(payload.incidents)));
  };
}
