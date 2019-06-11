import { StoreState } from './index';
import { Incident } from '../types';

export default function getIncident(state: StoreState, id: number): Incident {
  return state.incidents.byId[id];
}
