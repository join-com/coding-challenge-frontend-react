import { Reducer } from 'redux';
import { AppState } from 'core/reducers';
import { ActionTypes, ActionsAll } from './actions';

interface TState {
    error?: object | boolean;
    /* eslint-disable no-use-before-define */
    list: string[];
    /* eslint-enable no-use-before-define */
    requesting?: boolean;
}

const initialState: TState = {
    list: [],
    requesting: false,
};

export type TListState = TState;
export const listInitialState = initialState;
export const list: Reducer<TState> = (state: TState = initialState, action: ActionsAll) => {
    switch (action.type) {
        case ActionTypes.SET_INITIAL_STATE:
            return initialState;

        default:
            return state;
    }
};

export const selectList = (state: AppState): TListState => state.list;
