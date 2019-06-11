import { Dispatch } from 'redux';
import { BIKEWISE_API } from '../constants/main';
import { ActionType } from './ActionType';

export const pickProps = (incident: any) => ({
  id: incident.id,
  title: incident.title,
  description: incident.description,
  incidentDate: incident.occurred_at,
  updateDate: incident.updated_at,
  address: incident.address,
  imageUrl: incident.media && incident.media.image_url,
  imageUrlThumb: incident.media && incident.media.image_url_thumb
});

export function fetchIncident({ id }: { id: number }) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.INCIDENT_REQUEST
    });

    return fetch(`${BIKEWISE_API}/incidents/${id}`)
      .then(response => response.json())
      .then(({ incident }) => pickProps(incident))
      .then(incident =>
        dispatch({
          type: ActionType.INCIDENT_REQUEST_SUCCESS,
          payload: { id, incident }
        })
      );
  };
}
