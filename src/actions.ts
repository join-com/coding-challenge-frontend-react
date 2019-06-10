import { Dispatch } from 'redux';
import queryString from 'query-string';
import { Incidents } from './types';
import { BIKEWISE_API } from './constants/main';

export enum ActionType {
  REQUEST_INCIDENTS = 'REQUEST_INCIDENTS',
  RECEIVE_INCIDENTS = 'RECEIVE_INCIDENTS'
}

export interface Action {
  type: ActionType;
  payload: {
    [key: string]: any;
  };
}

function requestIncidents(query: object) {
  return {
    type: ActionType.REQUEST_INCIDENTS,
    payload: {
      query
    }
  };
}

function receiveIncidents(incidents: Incidents): Action {
  return {
    type: ActionType.RECEIVE_INCIDENTS,
    payload: {
      incidents
    }
  };
}

export function fetchIncidents() {
  const query = {
    page: 1,
    per_page: 10000,
    incident_type: 'theft',
    proximity: 'Berlin'
  };

  return (dispatch: Dispatch) => {
    dispatch(requestIncidents(query));

    return fetch(`${BIKEWISE_API}/incidents/?${queryString.stringify(query)}`)
      .then(response => response.json())
      .then(({ incidents = [] }) =>
        incidents.reduce((memo: any, item: any) => {
          memo[item.id] = {
            id: item.id,
            title: item.title,
            description: item.description,
            incidentDate: item.occurredAt,
            address: item.address,
            imageUrl: item.media && item.media.image_url,
            imageUrlThumb: item.media && item.media.image_url_thumb
          };
          return memo;
        }, {})
      )
      .then(incidents => dispatch(receiveIncidents(incidents)));
  };
}
