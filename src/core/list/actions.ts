import { Action } from 'redux';

export enum ActionTypes {
    SET_INITIAL_STATE = 'List/set initial state',
}

// List Set InitialState

export class ListSetInitialState implements Action {
    public readonly type = ActionTypes.SET_INITIAL_STATE;
}

export type ActionsAll = ListSetInitialState;
