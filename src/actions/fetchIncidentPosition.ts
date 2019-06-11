import { BIKEWISE_API, INCIDENT_TYPE } from '../constants/main';
import { Dispatch } from 'redux';
import queryString from 'query-string';
import { ActionType } from './ActionType';
import getIncident from '../store/selectors';

export function fetchIncidentPosition({ id }: { id: number }) {
  return (dispatch: Dispatch, getState: Function) => {
    const { title, incidentDate } = getIncident(getState(), id);

    const query = {
      query: title,
      occurred_after: incidentDate,
      occurred_before: incidentDate,
      incident_type: INCIDENT_TYPE
    };

    dispatch({
      type: ActionType.INCIDENT_POSITION_REQUEST,
      payload: { query }
    });

    return fetch(`${BIKEWISE_API}/locations/?${queryString.stringify(query)}`)
      .then(response => response.json())
      .then(json => {
        // correct response should contain only one item
        if (json.features.length > 1 || json.features.length === 0) {
          return null;
        }

        return json.features[0].geometry.coordinates;
      })
      .then((coords: Array<number>) => {
        const coordinates = coords
          ? {
              lng: coords[0],
              lat: coords[1]
            }
          : null;

        dispatch({
          type: ActionType.INCIDENT_POSITION_REQUEST_SUCCESS,
          payload: { id, coordinates }
        });
      });
  };
}
