import { fetchIncident } from './fetchIncident';
import { fetchIncidentPosition } from './fetchIncidentPosition';
import { Dispatch } from '../store';

export function fetchIncidentAndPosition({ id }: { id: number }) {
  return (dispatch: Dispatch) =>
    dispatch(fetchIncident({ id })).then(() =>
      dispatch(fetchIncidentPosition({ id }))
    );
}
