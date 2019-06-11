import { Dispatch } from 'redux';
import queryString from 'query-string';
import { BIKEWISE_API, PROXIMITY } from '../constants/main';
import { ActionType } from './ActionType';
import { pickProps } from './fetchIncident';

export function fetchIncidents() {
  const query = {
    per_page: 1000000,
    incident_type: 'theft',
    proximity: PROXIMITY
  };

  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.INCIDENTS_REQUEST
    });

    return fetch(`${BIKEWISE_API}/incidents/?${queryString.stringify(query)}`)
      .then(response => response.json())
      .then(({ incidents = [] }) =>
        incidents.reduce((memo: any, item: any) => {
          memo[item.id] = pickProps(item);
          return memo;
        }, {})
      )
      .then(incidents =>
        dispatch({
          type: ActionType.INCIDENTS_REQUEST_SUCCESS,
          payload: { incidents }
        })
      )
      .catch(error =>
        dispatch({
          type: ActionType.INCIDENTS_REQUEST_FAILURE,
          payload: { message: error.messsage }
        })
      );
  };
}
