import { Store, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { State as AppListIncidentsState } from './containers/AppListIncidents/state/types';
import { actions as AppListIncidentsActions } from './containers/AppListIncidents/state/actions';
import { reducer as AppListIncidentsReducer } from './containers/AppListIncidents/state/reducer';

import { State as AppItemIncidentState } from './containers/AppItemIncident/state/types';
import { actions as AppItemIncidentActions } from './containers/AppItemIncident/state/actions';
import { reducer as AppItemIncidentReducer } from './containers/AppItemIncident/state/reducer';


let store: Store<State>;

export interface State {
    AppListIncidents: AppListIncidentsState;
    AppItemIncident: AppItemIncidentState;
}

export const Actions = {
    AppListIncidents: AppListIncidentsActions,
    AppItemIncident: AppItemIncidentActions,
};

const rootReducer = combineReducers<State>({
    AppListIncidents: AppListIncidentsReducer,
    AppItemIncident: AppItemIncidentReducer,
});

export function Store(): Store<State> {
    if (!store) {
        const newStore = ((window as any).devToolsExtension ? (window as any).devToolsExtension()(createStore) : createStore)(
            rootReducer,
            applyMiddleware(thunk),
        );
        store = newStore;
    }
    return store;
}
