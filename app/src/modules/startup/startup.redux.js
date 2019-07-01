import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: StartupTypes, Creators: StartupActions } = createActions(
  {
    startup: [],
  },
  { prefix: 'STARTUP/' }
);

export const INITIAL_STATE = new Immutable({});

export const reducer = createReducer(INITIAL_STATE, {});
