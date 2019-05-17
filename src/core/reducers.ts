import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import { TListState, listInitialState, list } from './list/reducer';

export const reducers = combineReducers({
    router: routerReducer,
    list,
});

export interface AppState {
    router: RouterState;
    list: TListState;
}

export const appInitialState: AppState = {
    router: { location: { pathname: '/', search: '', state: '', hash: '' } },
    list: listInitialState,
};
