import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import { TIncidentsState, incidentsInitialState, incidents } from './incidents/reducer';

export const reducers = combineReducers({
    router: routerReducer,
    incidents,
});

export interface AppState {
    router: RouterState;
    incidents: TIncidentsState;
}

export const appInitialState: AppState = {
    router: { location: { pathname: '/', search: '', state: '', hash: '' } },
    incidents: incidentsInitialState,
};
